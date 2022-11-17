import PropTypes from 'prop-types';

import Style from '../Phonebook.module.css';

export const PhonebookSearch = ({ handelSearchValue, stateSearch }) => {
  return (
    <label className={Style.phonebook__text}>
      Search
      <input
        type="text"
        name="search"
        onChange={handelSearchValue}
        value={stateSearch}
        className={Style.phonebook__input}
        required
      />
    </label>
  );
};
export default PhonebookSearch;

PhonebookSearch.propTypes = {
  stateSearch: PropTypes.string,
  handelSearchValue: PropTypes.func,
};
