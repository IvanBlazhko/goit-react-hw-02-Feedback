import React from 'react';
import PropTypes from 'prop-types';

import Style from './Phonebook.module.css';
import PhonebookContact from './PhonebookComponents/PhonebookContact';

export const Phonebook = ({
  title,
  stateContacts,
  statePhone,
  stateName,
  stateSearch,
  handelInputValue,
  Submit,
}) => {
  return (
    <div className={Style.phonebook__body}>
      <h1 className={Style.phonebook__title}>{title}</h1>
      <div>
        <form onSubmit={Submit}>
          <label htmlFor="" className={Style.phonebook__text}>
            Name
            <input
              type="text"
              name="name"
              onChange={handelInputValue}
              value={stateName}
              className={Style.phonebook__input}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label htmlFor="" className={Style.phonebook__text}>
            Phone
            <input
              onChange={handelInputValue}
              value={statePhone}
              className={Style.phonebook__input}
              type="tel"
              name="tel"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <button type="submit" className={Style.phonebook__btn}>
            Add contact
          </button>
        </form>
        <ul className={Style.phonebook__contacts}>
          <h2 className={Style.phonebook__title}>Contacts</h2>
          <label className={Style.phonebook__text}>
            Search
            <input
              type="text"
              name="search"
              onChange={handelInputValue}
              value={stateSearch}
              className={Style.phonebook__input}
              required
            />
          </label>
          {stateContacts.map(({ name, id, phone }) => (
            <PhonebookContact name={name} key={id} phone={phone} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Phonebook;

Phonebook.propTypes = {
  title: PropTypes.string,
};
