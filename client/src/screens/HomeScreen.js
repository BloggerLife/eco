import { useEffect, useReducer, useState } from 'react';
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Product from '../components/Product';
import { Helmet } from 'react-helmet-async';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import './HomeScreen.css';
import Shipping from '../images/shipping.png';
import Return from '../images/return.png';
import Gift from '../images/gift.png';
import Contact from '../images/contact.png';
import Feature from '../components/Feature';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, products: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function HomeScreen() {
  const [{ loading, error, products }, dispatch] = useReducer(reducer, {
    products: [],
    loading: true,
    error: '',
  });

  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  });

  // const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axiosInstance.get('/api/products');
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: err.message });
      }

      // setProducts(result.data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <Helmet>
        <title>Juvenile Electronics</title>
      </Helmet>
      <Feature />
      <Container>
        <h1>Featured Products</h1>
        <div className="products">
          {loading ? (
            <LoadingBox />
          ) : error ? (
            <MessageBox variant="danger">{error}</MessageBox>
          ) : (
            <Row>
              {products.map((product) => (
                <Col key={product.slug} sm={6} md={4} lg={3} className="mb-3">
                  <Product product={product}></Product>
                </Col>
              ))}
            </Row>
          )}
        </div>
        <div className="features">
          <div className="feature">
            <img src={Shipping} alt="" className="featureIcon" />
            <span className="featureTitle">Free Shipping</span>
            <span className="featureDesc">
              Free delivery in and around the CBD.
            </span>
          </div>
          <div className="feature">
            <img className="featureIcon" src={Return} alt="" />
            <span className="featureTitle">About Returns</span>
            <span className="featureDesc">
              Please read carefully our Terms & Conditions.
            </span>
          </div>
          <div className="feature">
            <img className="featureIcon" src={Gift} alt="" />
            <span className="featureTitle">Gift Cards</span>
            <span className="featureDesc">
              Buy gift cards and use coupon codes easily.
            </span>
          </div>
          <div className="feature">
            <img className="featureIcon" src={Contact} alt="" />
            <span className="featureTitle">Contact Us!</span>
            <span className="featureDesc">
              Keep in touch via email and support system.
            </span>
          </div>
        </div>
      </Container>
    </div>
  );
}
export default HomeScreen;
