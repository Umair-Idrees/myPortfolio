import React, { useRef } from "react";
import "../Contact/Contact.css";
import LinkedIn from "../../assets/linkedin.png";
import google from "../../assets/google.png";
import Microsoft from "../../assets/Microsoft.png";
import youtube from "../../assets/youtube.png";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0d5061l",
        "template_pzscgya",
        form.current,
        "NwVt9dfSrsbQp-nTv"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert("Email Sent Successfully");
        },
        (error) => {
          console.error("FAILED...", error.text);
          alert("Failed to send email. Please try again.");
        }
      );
  };

  return (
    <div id="contact">
      <h1 className="contactTitle">Contact Me</h1>
      <p className="contactDesc">
        Please fill out the form below to discuss any work opportunities.
      </p>
      <form className="contactForm" ref={form} onSubmit={sendEmail}>
        <input
          type="text"
          className="name"
          placeholder="your Name"
          name="from_name"
        />
        <input
          type="email"
          className="email"
          placeholder="your Email"
          name="from_email"
        />
        <textarea
          className="msg"
          name="message"
          rows="5"
          placeholder="Your Message"
        />
        <button type="submit" value="send" className="submitBtn">
          Submit
        </button>
        <div className="links">
          <img src={LinkedIn} alt="" className="link" />
          <img src={google} alt="" className="link" />
          <img src={Microsoft} alt="" className="link" />
          <img src={youtube} alt="" className="link" />
        </div>
      </form>
    </div>
  );
};

export default Contact;
