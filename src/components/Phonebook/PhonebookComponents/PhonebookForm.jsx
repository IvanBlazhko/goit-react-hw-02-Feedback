import PropTypes from 'prop-types';
import Style from '../Phonebook.module.css';

export const PhonebookForm = ({
  stateName,
  handelInputValue,
  onSubmit,
  statePhone,
}) => {
  return (
    <form onSubmit={onSubmit}>
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
  );
};
export default PhonebookForm;

PhonebookForm.propTypes = {
  stateName: PropTypes.string,
  statePhone: PropTypes.string,
  handelInputValue: PropTypes.func,
  onSubmit: PropTypes.func,
};
