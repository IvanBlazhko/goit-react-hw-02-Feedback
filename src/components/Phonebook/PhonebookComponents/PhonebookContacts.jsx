import PropTypes from 'prop-types';

import PhonebookContactItem from './PhonebookContactsItem';

export const PhonebookContacts = ({ stateContacts, onDeleteContact }) => {
  return (
    <>
      {stateContacts.map(({ name, id, phone }) => (
        <PhonebookContactItem
          name={name}
          key={id}
          id={id}
          phone={phone}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </>
  );
};
export default PhonebookContacts;

PhonebookContacts.prototype = {
  stateContacts: PropTypes.array,
  onDeleteContact: PropTypes.func,
};
