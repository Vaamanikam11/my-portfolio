import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });

  useEffect(() => {
    emailjs.init('cxZtVFCyG-2gJ_4QV');
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_4so8xnr', 'template_sa299qm', e.target)
      .then(() => {
          console.log('SUCCESS!');
          alert("Message sent successfully!");
          setFormData({ user_name: '', user_email: '', message: '' });
      }, (error) => {
          console.log('FAILED...', error);
          alert("Failed to send the message, please try again.");
      });
  };

  return (
    <section id="contact">
      <div className="contact-container">
        <h2>Get in touch
        </h2>
        <form id="contact-form" onSubmit={handleSubmit}>
          <input type="hidden" name="contact_number" value="697483" />
          <label htmlFor="user_name">Name</label>
          <input type="text" id="user_name" name="user_name" value={formData.user_name} onChange={handleChange} required />
          
          <label htmlFor="user_email">Email</label>
          <input type="email" id="user_email" name="user_email" value={formData.user_email} onChange={handleChange} required />
          
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange} required />
          
          <input type="submit" value="Send" />
        </form>
      </div>
    </section>
  );
};

export default Contact;
