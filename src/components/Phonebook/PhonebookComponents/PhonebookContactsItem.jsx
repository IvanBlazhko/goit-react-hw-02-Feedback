import PropTypes from 'prop-types';

import Style from '../Phonebook.module.css';

export const PhonebookContact = ({ name, id, phone, onDeleteContact }) => {
  return (
    <div key={id} className={Style.phonebook__contact}>
      <div className={Style.phonebook__name}>
        <h3>Name</h3>
        <div>{name}</div>
      </div>
      <div className={Style.phonebook__phone}>
        <h3>Phone</h3>
        <div>{phone}</div>
      </div>
      <button type="button" onClick={() => onDeleteContact(id)}>
        Del
      </button>
    </div>
  );
};
export default PhonebookContact;

PhonebookContact.prototype = {
  name: PropTypes.string,
  id: PropTypes.string,
  phone: PropTypes.string,
  onDeleteContact: PropTypes.func,
};
