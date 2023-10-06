import React, { useState } from 'react';
import Modal from 'react-modal';
import ContactList from './components/contactlist';
import ContactForm from './components/contactform';

Modal.setAppElement('#root');

const App = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);
  const [contacts, setContacts] = useState([]);

  const addContact = newContact => {
    setContacts([...contacts, newContact]);
    closeModal();
  };

  return (
    <div>
      <h1>Kontaktbog</h1>
      <button onClick={openModal}>Opret ny kontakt</button>

      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <ContactForm addContact={addContact} />
        <button onClick={closeModal}>Annuller</button>
        {/* Note: You might want to move the "submit" button inside the ContactForm component */}
      </Modal>

      <ContactList contacts={contacts} />
    </div>
  );
};

export default App;


