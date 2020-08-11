import React, { useState } from 'react';
import PropTypes from 'prop-types';
//styles
import './ContactCard.styles.css';

const ContactCard = ({ avatar, name, email, age }) => {
  const [showAge, setShowAge] = useState(false);

  return (
    <div className="contact-card">
      <img src={avatar} alt="profile" />
      <div className="user-details">
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <button onClick={() => setShowAge(!showAge)}>Toggle Age</button>
        {showAge && <p>Age: {age}</p>}
      </div>
    </div>
  );
};

ContactCard.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  email: PropTypes.string,
  age: PropTypes.number,
};

ContactCard.defaultProps = {
  avatar: '#',
  name: 'Liliia',
  email: '#',
  age: '',
};

export default ContactCard;
