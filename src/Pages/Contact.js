import React, { useRef } from 'react';
import './Contact.css'; 
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import emailjs from '@emailjs/browser';



function Contact() {

    
    const handleEmailClick = () => {
        window.location.href = 'mailto:odofinibukun123@gmail.com';
      };
    
      const handlePhoneClick = () => {
        window.location.href = 'tel:+2348068469020';
      };
    
      
      const form = useRef();

      const handleSubmit = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_fecz038', 'template_3zocoyp', form.current, {
            publicKey: 'w3--2oL69sZ1N2lv3',
          })
          .then(
            () => {
              alert('Email sent successfully');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };

    



  return (
    <div style={{ backgroundColor: 'white', height: '100vh' }}>
    <Container className="text-center pt-5 mt-5">
      <h6 className="subtitle" style={{ color: '#000' }}>Get In Touch</h6>
      <h2 className="main-heading" style={{ color: '#BAE60A'  }}>Contact Me</h2>
      <Row className="mt-4">
        <Col>
          <div>
            <FaEnvelope style={{ color: '#BAE60A', fontSize: '24px', cursor: 'pointer' }} />
            <span
              onClick={handleEmailClick}
              style={{ color: '#000', marginLeft: '10px', cursor: 'pointer', fontSize: '18px' }}
            >
              Email: odofinibukun123@gmail.com
            </span>
          </div>
          <div className="mt-3">
            <FaPhoneAlt style={{ color: '#BAE60A', fontSize: '24px', cursor: 'pointer' }} />
            <span
              onClick={handlePhoneClick}
              style={{ color: '#000', marginLeft: '10px', cursor: 'pointer', fontSize: '18px' }}
            >
              Phone: +234 8068469020
            </span>
          </div>
        </Col>
      </Row>
      <Form ref={form} onSubmit={handleSubmit} className="contact mt-5">
        <Form.Group controlId="formName" className="mb-3">
          <Form.Control type="text" placeholder="Your Name" name='from_name' required />
        </Form.Group>
        <Form.Group controlId="formEmail" className="mb-3">
          <Form.Control type="email" placeholder="Your Email" name='user_email' required />
        </Form.Group>
        <Form.Group controlId="formMessage" className="mb-3">
          <Form.Control as="textarea" rows={5} placeholder="Your Message" name='message' required />
        </Form.Group>
        <Button style={{ backgroundColor:"#000", color: '#fff' }} type="submit" value="Send">
          Send Message
        </Button>
      </Form>
    </Container>


  </div>
  )
}

export default Contact