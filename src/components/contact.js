import React from 'react';

const Contact = ({ contact }) => (
  <div>
    <p>{`Fornavn: ${contact.firstname}`}</p>
    <p>{`Efternavn: ${contact.lastname}`}</p>
    <p>{`Email: ${contact.email}`}</p>
    <p>{`Tlf: ${contact.phone}`}</p>
    <p>{`Firma: ${contact.company}`}</p>
    <p>{`Stilling: ${contact.position}`}</p>
  </div>
);

export default Contact;