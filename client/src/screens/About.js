import Container from 'react-bootstrap/Container';
import { Helmet } from 'react-helmet-async';

export default function About() {
  return (
    <Container className="small-container">
      <Helmet>
        <title>About Us</title>
      </Helmet>
      <h1 className="my-3">About Us</h1>
      <h3 className="my-3">Introduction</h3>
      <p>
        Juvenile Electronics (PVT) Ltd is an informa Technology company Founded
        in Harare. Specializing in Sta System design ,Integra Today the company
        has grown and boast of a significant number of technical staff directly
        involved and dynamic marke administra fully the ac Juvenile Electronics
        strength in the market place has allowed this organiza nego most interna
        of the iden are based on leading brands such as Hp, Microsoft, Symantec,
        Dell, IBM, 3CCOM Sun Microsystems which means our customer enjoy the
        latest up to date solu Juvenile Electronics offers designs, implementa
        renowned sofware, manufacturing and maintenance management system.
      </p>
      <h3 className="my-3">Our Values</h3>
      <p>
        Fundamental to the success of Juvenile Electronics is its culture ,a set
        of discipline ,adopted since the organization’s inception which are;
      </p>
      <ul>
        <li>Strategic information planning</li>
        <li>Logistics support, personnel and training</li>
        <li>Project management</li>
        <li>Quality assurance</li>
      </ul>
      <h5 className="my-3">
        For Further Information Please Do Enquire Via Email Or Call
      </h5>
    </Container>
  );
}
