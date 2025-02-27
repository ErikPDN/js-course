import React, { Component } from 'react';

// form
import { FaPlus } from 'react-icons/fa';

import './Main.css';

class Main extends Component {
  state = {
    newTask: '',
  };

  handleChange = (e) => {
    this.setState({
      newTask: e.target.value,
    });
  }

  render() {
    const { newTask } = this.state;

    return (
      <div className='main'>
        <h1>TO-DO List</h1>

        <form action="#" className="form">
          <input
            onChange={this.handleChange}
            type="text"
            valie={newTask}
          />
          <button type="submit"><FaPlus /></button>
        </form>
      </div >
    );
  }

}

export default Main;
