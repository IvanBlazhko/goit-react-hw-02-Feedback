import React, { Component } from 'react';

import Feedback from '../Feedback/Feedback';
import Phonebook from '../Phonebook/Phonebook';

import Style from './App.module.css';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };
  handelInputValue = event => {
    this.setState({
      name: event.currentTarget.value,
    });
  };

  render() {
    return (
      <div className={Style.app__wrapper}>
        <Feedback />
        <Phonebook
          title="My phonebook"
          stateName={this.state.name}
          stateContacts={this.state.contacts}
          handelInputValue={this.handelInputValue}
        />
      </div>
    );
  }
}

export default App;
