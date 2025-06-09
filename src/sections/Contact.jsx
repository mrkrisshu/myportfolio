import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import Alert from "../components/Alert";
import { Particles } from "../components/Particles";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");

  // Initialize EmailJS with your public key when component mounts
  useEffect(() => {
    emailjs.init("Pd4cFZgcnkVOnhDCa");
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const showAlertMessage = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      console.log("Sending email...", formData);
      
      // Send notification email to you
      const notificationResult = await emailjs.send(
        "service_0ltmbn5",  // Your Service ID
        "template_l798s6j", // Your Contact Us Template ID (UPDATED)
        {
          from_name: formData.name,
          to_name: "Krishna",
          from_email: formData.email,
          to_email: "mrkrisshu@gmail.com",
          message: formData.message,
        }
      );
      
      console.log("Notification sent:", notificationResult);
      
      // Send auto-reply to the person who contacted you
      const autoReplyResult = await emailjs.send(
        "service_0ltmbn5",  // Your Service ID
        "template_b8wppte", // Your Auto-Reply Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          to_name: formData.name,
        }
      );
      
      console.log("Auto-reply sent:", autoReplyResult);
      
      // Success - clear form and show success message
      setIsLoading(false);
      setFormData({ name: "", email: "", message: "" });
      showAlertMessage("success", "Message sent successfully! Check your email for confirmation.");
      
    } catch (error) {
      setIsLoading(false);
      console.error("EmailJS error:", error);
      showAlertMessage("danger", "Failed to send message. Please try again later.");
    }
  };

  return (
    <section className="relative flex items-center c-space section-spacing" id="contact">
      <Particles
        className="absolute inset-0 -z-50"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />
      
      {showAlert && <Alert type={alertType} text={alertMessage} />}
      
      <div className="flex flex-col items-center justify-center max-w-md p-5 mx-auto border border-white/10 rounded-2xl bg-primary">
        <div className="flex flex-col items-start w-full gap-5 mb-10">
          <h2 className="text-heading">Let's Talk</h2>
          <p className="font-normal text-neutral-400">
            Whether you're looking to build a new website, improve your existing
            platform, or bring a unique project to life, I'm here to help
          </p>
        </div>
        
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label htmlFor="name" className="field-label">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="field-input field-input-focus"
              placeholder="Your Name"
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              required
              minLength="2"
              maxLength="50"
            />
          </div>
          
          <div className="mb-5">
            <label htmlFor="email" className="field-label">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="field-input field-input-focus"
              placeholder="Your Gmail"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              required
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            />
          </div>
          
          <div className="mb-5">
            <label htmlFor="message" className="field-label">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="field-input field-input-focus resize-none"
              placeholder="Share your thoughts or project ideas..."
              autoComplete="off"
              value={formData.message}
              onChange={handleChange}
              required
              minLength="10"
              maxLength="500"
            />
            <p className="mt-1 text-xs text-neutral-500">
              {formData.message.length}/500 characters
            </p>
          </div>
          
          <button
            type="submit"
            className="w-full px-4 py-3 text-lg font-medium text-white text-center rounded-md cursor-pointer bg-gradient-to-r from-lavender to-royal hover:opacity-90 transition-opacity duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isLoading}
          >
            {isLoading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Sending...
              </span>
            ) : (
              "Send Message"
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
