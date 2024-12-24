import toast from "react-hot-toast";
import { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [loading, setLoading] = useState(false);
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
      setLoading(true);
      const response = await axios.post(
        "https://api.emailjs.com/api/v1.0/email/send",
        data
      );

      if (response.status === 200) {
        toast.success("Email sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        toast.error("Failed to send email.");
      }
    } catch (error) {
      toast.error(`An error occurred while sending the email. ${error}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-contact">
      <div className="secondary-container">
        <div className="flex items-start tb-l:flex-col tb-l:gap-8">
          <div className="basis-1/2 pr-8 md-s:pr-6 tb-l:pr-0">
            <div className="flex flex-col items-start pt-44 pb-20 max:pt-28 lg-s:pt-20 md-s:pb-12 tb-l:pt-0 tb-l:pb-6">
              <span className="sub-title">{"// Contact Us"}</span>
              <h2 className="main-heading">
                We are Trusted By <br className="tb-l:hidden" />
                7+ Countries Worldwide
              </h2>
            </div>
            <p className="text-description mb-8">
              Write to us, we endeavour to answer all enquiries within 24 hours
              on business days. We will be happy to answer your questions.
            </p>
          </div>

          <div className="basis-1/2">
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
