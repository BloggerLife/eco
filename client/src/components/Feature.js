import React from 'react';
import './Feature.css';
import Tv from '../images/tv.webp';
import Laptop from '../images/lapp.webp';
import './Feature.css';
import { Link } from 'react-router-dom';

const Feature = () => {
  return (
    <div className="newSeason">
      <div className="nsItem">
        <img src={Tv} alt="" className="nsImg" />
        <button className="nsT">
          <Link to={`/home`}>HOME APPLIANCES</Link>
        </button>
      </div>
      <div className="nsItem">
        <h2 className="nsTitleSm"> New Arrivals</h2>
        <h1 className="nsTitle">New Season</h1>
        <h1 className="nsTitle">New Collection</h1>
        <a href="#nav">
          <button className="nsButton">
            <Link to={`/home`}>CHOOSE YOUR STYLE</Link>
          </button>
        </a>
      </div>
      <div className="nsItem">
        <img src={Laptop} alt="" className="nsImg" />
        <button className="nsT">
          <Link to={`/home`}>OFFICE APPLIANCES</Link>
        </button>
      </div>
    </div>
  );
};

export default Feature;
