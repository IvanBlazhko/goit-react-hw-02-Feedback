import React from 'react';
import PropTypes from 'prop-types';

import Style from './Phonebook.module.css';

export const Phonebook = ({
  title,
  stateContacts,
  stateName,
  handelInputValue,
}) => {
  return (
    <div className={Style.phonebook__body}>
      <h1 className={Style.phonebook__title}>{title}</h1>
      <div>
        <form action="">
          <label htmlFor="" className={Style.phonebook__text}>
            Name
          </label>
          <input
            type="text"
            name="name"
            onChange={handelInputValue}
            value={stateName}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <button type="button">Add contact</button>
        </form>
      </div>
    </div>
  );
};

export default Phonebook;

Phonebook.propTypes = {
  title: PropTypes.string,
};
