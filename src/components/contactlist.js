import React from 'react';
import Contact from './contact';

const ContactList = ({ contacts }) => (
  <div>
    <h2>Kontaktliste</h2>
    {contacts.map(contact => (
      <Contact key={contact.email} contact={contact} />
    ))}
  </div>
);

export default ContactList;