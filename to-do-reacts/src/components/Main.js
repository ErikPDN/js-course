import React, { Component } from 'react';

// form
import { FaPlus } from 'react-icons/fa';

// tasks
import { FaEdit, FaWindowClose } from 'react-icons/fa';

import './Main.css';

class Main extends Component {
  state = {
    newTask: '',
    tasks: [
      'Make coffee',
      'Drink water',
      'Study',
    ]
  };

  handleChange = (e) => {
    this.setState({
      newTask: e.target.value,
    });
  }

  render() {
    const { newTask, tasks } = this.state;

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

        <ul className='tasks'>
          {tasks.map((task) => (
            <li key={task}>
              {task}
              <div>
                <FaEdit className="edit" />
                <FaWindowClose className="delete" />
              </div>
            </li>

          ))}
        </ul>
      </div >
    );
  }
}

export default Main;
