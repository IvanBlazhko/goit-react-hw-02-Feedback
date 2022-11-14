import Style from '../Phonebook.module.css';

export const PhonebookContact = ({ name, id, phone }) => {
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
    </div>
  );
};
export default PhonebookContact;
