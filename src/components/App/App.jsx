import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import Feedback from '../Feedback/Feedback';
import Phonebook from '../Phonebook/Phonebook';

import Style from './App.module.css';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', phone: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', phone: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', phone: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', phone: '227-91-26' },
    ],
    name: '',
    tel: '',
    search: '',
  };
  handelInputValue = event => {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value,
    });
  };
  addTodo = (name, phone) => {
    const todo = {
      id: nanoid(),
      name,
      phone,
    };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, todo],
    }));
  };
  handelSubmit = event => {
    event.preventDefault();
    this.addTodo(this.state.name, this.state.tel);
    this.reset();
  };
  reset = () => {
    this.setState({ name: '', tel: '' });
  };

  render() {
    return (
      <div className={Style.app__wrapper}>
        <Feedback />
        <Phonebook
          title="My phonebook"
          stateName={this.state.name}
          statePhone={this.state.tel}
          stateSearch={this.state.search}
          stateContacts={this.state.contacts}
          handelInputValue={this.handelInputValue}
          Submit={this.handelSubmit}
        />
      </div>
    );
  }
}

export default App;
