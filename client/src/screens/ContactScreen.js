import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Helmet } from 'react-helmet-async';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactScreen() {
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
    <Container className="small-container">
      <Helmet>
        <title>Contact Us</title>
      </Helmet>
      <h1 className="my-3">Contact Us</h1>
      <Form onSubmit={sendEmail} ref={form}>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" required name="email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="message">
          <Form.Label>Your Message</Form.Label>
          <Form.Control type="text" required name="message" />
        </Form.Group>
        <div className="mb-3">
          <Button type="submit">Send</Button>
        </div>
      </Form>
    </Container>
  );
}
