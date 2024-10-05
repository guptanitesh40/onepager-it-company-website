import toast from "react-hot-toast";
import { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      toast.error("Please fill in all required fields.");
      return;
    }

    const serviceId = import.meta.env.VITE_SERVICE_ID;
    const templateId = import.meta.env.VITE_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;

    const data = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        from_name: name,
        from_email: email,
        to_name: "infowave solution",
        message: message,
      },
    };

    try {
      const response = await axios.post(
        "https://api.emailjs.com/api/v1.0/email/send",
        data
      );

      setName("");
      setEmail("");
      setMessage("");

      if (response.status === 200) {
        toast.success("Email sent successfully!");
      } else {
        toast.error("Failed to send email.");
      }
    } catch (error) {
      toast.error(`An error occurred while sending the email. ${error}`);
    }
  };

  return (
    <section id="contact" className="section-contact">
      <div className="container">
        <div className="flex items-start">
          <div className="flex-[0_0_50%]">
            <div className="flex flex-col items-start pt-44 pb-20">
              <span className="sub-title">{"// Contact Us"}</span>
              <h2 className="main-heading">
                We are Trusted By
                <br />
                7+ Countries Worldwide
              </h2>
            </div>
            <p className="description mb-8 w-[80%]">
              Write to us, we endeavour to answer all enquiries within 24 hours
              on business days. We will be happy to answer your questions.
            </p>
          </div>

          <div className="flex-[0_0_50%]">
            <div className="form-container">
              <h2 className="mb-4 text-white">Ready to Get Started?</h2>
              <p>
                Your email address will not be published. Required fields are
                marked *
              </p>
              <form className="form" onSubmit={handleSubmit}>
                <input
                  type="text"
                  className="input"
                  placeholder="Your Name *"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="text"
                  className="input"
                  placeholder="Your Email *"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <textarea
                  placeholder="Message..."
                  className="input"
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <span className="btn-container">
                  <button type="submit" className="submit-btn">
                    send message
                  </button>
                </span>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
