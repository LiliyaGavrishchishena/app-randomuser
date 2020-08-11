import React, { useState, useEffect } from 'react';
//components
import ContactCard from './components/ContactCard';

const App = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=5')
      .then((response) => response.json())
      .then((data) => {
        setContacts(data.results);
      });
  }, []);

  return (
    <>
      {contacts.map((contact) => (
        <ContactCard
          key={contact.name.first}
          avatar={contact.picture.large}
          name={contact.name.first + ' ' + contact.name.last}
          email={contact.email}
          age={contact.dob.age}
        />
      ))}
    </>
  );
};

export default App;
