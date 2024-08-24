import { BiSolidMessageRoundedDots } from "react-icons/bi";
import "./Contact.css";
import { MdAttachEmail } from "react-icons/md";
import { FaAddressCard, FaLongArrowAltRight, FaPhoneAlt } from "react-icons/fa";
import { useState } from "react";

const Contact = () => {
    const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "91c2004a-9457-4aeb-99ba-4d6e658027b6");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  }
  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send us a message <BiSolidMessageRoundedDots className="message" />
        </h3>
        <p>
          Feel free to contact us any time. We will get back to you as soon as
          possible.
        </p>
        <ul>
          <li>
            Our Email: <MdAttachEmail className="details"/>
            <span>XXXXXXXXXXXXXXX</span>
          </li>
          <li>
            Phone: <FaPhoneAlt className="details"/>
            <span>000000000000</span>
          </li>
          <li>
            Address: <FaAddressCard className="details"/>
            <span>123 Street, Lucknow, India</span>
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <label>Contact Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your contact number"
            required
          />
          <label>Message</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
            required
          ></textarea>
           <button type="submit" className='btn btn2'><span>Submit now <FaLongArrowAltRight className='arrow'/></span></button>
        </form>
        <span className="span">{result}</span>
      </div>
      
    </div>
  );
};

export default Contact;
