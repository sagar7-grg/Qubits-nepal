import React from "react";
import Button from "../components/Button";
import { animateScroll } from "react-scroll";

function Contact() {
  return (
    <div className="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h1>Contact Us</h1>
          <p>
            Don't hesitate to give us a call or send us a contact form message
          </p>
        </div>

        <div className="contact-body">
          <div className="contact-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.6085180413734!2d83.46226171552131!3d27.698492082795592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3996868a9d13ac97%3A0x9d55dbbf86d5ca36!2sButwal%2C%20Nepal!5e0!3m2!1sen!2snp!4v1597380352995!5m2!1sen!2snp"
              width="600"
              height="450"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
          <div className="contact-form">
            <form>
              <input type="text" placeholder="name" />
              <br></br>
              <input type="text" placeholder="email" />
              <br></br>
              <textarea type="text" placeholder="message" />
              <br></br>
              <Button name="submit message" />
            </form>
          </div>
        </div>
      </div>
      <div className="arrow" onClick={() => animateScroll.scrollToTop()}>
        <i className="fa fa-angle-up"></i>
      </div>
    </div>
  );
}

export default Contact;
