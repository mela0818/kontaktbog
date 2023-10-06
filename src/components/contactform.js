import React, { useState } from 'react';

const ContactForm = ({ addContact }) => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    company: '',
    position: '',
  });

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    addContact(formData);
    setFormData({
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      company: '',
      position: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstname">Fornavn:</label>
      <input
        type="text"
        id="firstname"
        name="firstname"
        value={formData.firstname}
        onChange={handleChange}
        required
      />

      <label htmlFor="lastname">Efternavn:</label>
      <input
        type="text"
        id="lastname"
        name="lastname"
        value={formData.lastname}
        onChange={handleChange}
        required
      />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <label htmlFor="phone">Telefon:</label>
      <input
        type="tel"
        id="phone"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        pattern="[0-9]{2}-[0-9]{2}-[0-9]{2}"
        required
      />

      <label htmlFor="company">Firma:</label>
      <input
        type="text"
        id="company"
        name="company"
        value={formData.company}
        onChange={handleChange}
        required
      />

      <label htmlFor="position">Stilling:</label>
      <input
        type="text"
        id="position"
        name="position"
        value={formData.position}
        onChange={handleChange}
        required
      />
      <button type="submit">Opret kontakt</button>
    </form>
  );
};

export default ContactForm;
