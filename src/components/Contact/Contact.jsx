import React, { useRef } from "react";
import "./Contact.css";
import walmart from "../../assets/walmart.png";
import adobe from "../../assets/adobe.png";
import microsoft from "../../assets/microsoft.png";
import facebook from "../../assets/facebook.png";
import facebookicon from "../../assets/facebook-icon.png";
import twittericon from "../../assets/twitter.png";
import youtubeicon from "../../assets/youtube.png";
import instagramicon from "../../assets/instagram.png";
import emailjs from "@emailjs/browser";

const Contact = () => {
  // Need to refer the form from belw contact section
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    // console.log(e.target.value)
    // debugger;

    emailjs.sendForm(
        "service_uq99etr",
        "template_d5gs289",
        form.current,
        "Lr22EN3uG2kkcAU01"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert("Email sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <section id="contactpage">
        <div className="contact">
          <h1 className="contactpagetitle">Contact me</h1>
          <span className="contactdesc">
            Please fill out the form below to discuss about work oppurtunity
          </span>
          <form
            action=""
            className="contactform"
            ref={form}
            onSubmit={sendEmail}
          >
            <input
              type="text"
              className="name"
              placeholder="Your Name"
              name="your_name"
            />
            <input
              type="email"
              className="email"
              placeholder="Your Email"
              name="email"
            />
            <textarea 
              className="msg"
              name="message"
              rows="5"
              placeholder="Your message"
            ></textarea>
            <button type="submit" value="send" className="submitbtn">
              Send
            </button>
            <div className="links">
              <img src={facebookicon} alt="facebook" className="link" />
              <img src={twittericon} alt="twitter" className="link" />
              <img src={youtubeicon} alt="youtube" className="link" />
              <img src={instagramicon} alt="instagram" className="link" />
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
