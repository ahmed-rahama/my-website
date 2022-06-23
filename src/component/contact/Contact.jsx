import React from 'react';
import './contact.css';
import { Container, Row, Col } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import { motion } from 'framer-motion';
export default function Contact() {
  const thanksMessage = (e) => {
    // e.preventDefault();
    toast.success("Thank's for Your Message ", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 5000,
    });
  };
  return (
    <motion.div
      className="body"
      intial={{ width: 0 }}
      animate={{ width: '100%' }}
      exit={{ x: window.innerWidth, transition: { duration: 0.3 } }}
    >
      <Container>
        <Row className="mb-5 mt-3">
          <Col lg="8">
            <h1> Contact Me</h1>{' '}
          </Col>
        </Row>
        <Row className="sec-sp">
          <Col lg="5" className="mb-5">
            {' '}
            <h3 className="color-sec py-4"> Get in Touch </h3>
            <address>
              <strong> Email: ahmmmost@gmail.com</strong> <br /> <br />{' '}
              <strong> Phone: 0179334619276</strong>
              <p>
                {' '}
                I will be very Habby to see Your Massage and Your Feedback about
                my design so feel free to write what do you want ✌🏼
              </p>
            </address>
          </Col>{' '}
          <Col lg="7" className="d-flex align-items-center">
            {' '}
            <form
              className="contact_form w-100"
              action="https://formsubmit.co/ahmmmost@gmail.com"
              onSubmit={thanksMessage}
              method="POST"
            >
              <Row>
                {' '}
                <Col lg="6" className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="add your name"
                  />
                </Col>
                <Col lg="6" className="form-group">
                  <input
                    type="text"
                    className="form-control rounded-0"
                    id="email"
                    name="email"
                    placeholder="email"
                  />
                </Col>
              </Row>{' '}
              <textarea
                className="form-control rounded-0"
                id="message"
                placeholder="Message"
                rows="4"
                name="message"
              >
                {' '}
              </textarea>
              <br />
              <Row>
                <Col lg="12" className="form-group">
                  <button className="btn ac_btn" type="submit" name="submit">
                    {' '}
                    Send{' '}
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
        {/* <ToastContainer /> */}
      </Container>
    </motion.div>
  );
}
