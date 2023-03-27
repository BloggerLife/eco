import React, { useRef } from 'react';
import './Footer.css';
import Fb from '../images/facebook.png';
import Ig from '../images/instagram.png';
import Wa from '../images/whatsapp.png';
import Tw from '../images/twitter.png';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';

const Footer = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_PUBLIC_SERVICE_ID,
        process.env.REACT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.REACT_PUBLIC_KEY
      )
      .then(
        (result) => {
          e.target.reset();
          alert('Message Sent');
        },
        (error) => {
          console.log(error.text);
          alert('Message Not Sent');
        }
      );
  };

  return (
    <div className="footer">
      <div className="footerLeft">
        <div className="footerMenu">
          <h1 className="fMenuTitle">About Us</h1>
          <ul className="fList">
            <li className="fListItem">
              <Link to={`about`}>Company</Link>
            </li>
            <li className="fListItem">
              <Link to={`contact`}>Contact</Link>
            </li>
            <li className="fListItem">Careers</li>
            <li className="fListItem">Affiliates</li>
            <li className="fListItem">Stores</li>
          </ul>
        </div>
        <div className="footerMenu">
          <h1 className="fMenuTitle">Useful Links</h1>
          <ul className="fList">
            <li className="fListItem">Support</li>
            <li className="fListItem">Refund</li>
            <li className="fListItem">FAQ</li>
            <li className="fListItem">Feedback</li>
            <li className="fListItem">Stories</li>
          </ul>
        </div>
        <div className="footerMenu">
          <h1 className="fMenuTitle">Products</h1>
          <ul className="fList">
            <li className="fListItem">Accessories</li>
            <li className="fListItem">Office Equip</li>
            <li className="fListItem">Home Appliances</li>
            <li className="fListItem">Mobile Phones</li>
            <li className="fListItem">Laptops</li>
          </ul>
        </div>
      </div>
      <div className="footerRight">
        <div className="footerRightMenu">
          <h1 className="fMenuTitle">Subscribe to our newsletter</h1>
          <form className="fMail" ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              placeholder="your@email.com"
              className="fInput"
              name="message"
            />
            <button className="fButton" type="submit" value="Send">
              Join!
            </button>
          </form>
        </div>
        <div className="footerRightMenu">
          <h1 className="fMenuTitle">Follow Us</h1>
          <div className="fIcons">
            <img src={Fb} alt="" className="fIcon" />
            <img src={Tw} alt="" className="fIcon" />
            <img src={Ig} alt="" className="fIcon" />
            <img src={Wa} alt="" className="fIcon" />
          </div>
        </div>
        <div className="footerRightMenu">
          <span className="copyright">
            @Juvemile Electronics. All rights reserved. 2023.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
