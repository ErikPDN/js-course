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
    ]
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState((prevState) => {
      const newTask = prevState.newTask.trim();

      if (!newTask || prevState.tasks.includes(newTask)) return null;

      return {
        tasks: [...prevState.tasks, newTask],
        newTask: '',
      };
    });
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

        <form onSubmit={this.handleSubmit} action="#" className="form">
          <input
            onChange={this.handleChange}
            type="text"
            value={newTask}
          />
          <button type="submit"><FaPlus /></button>
        </form>

        <ul className='tasks'>
          {tasks.map((task) => (
            <li key={task}>
              {task}
              <span>
                <FaEdit className="edit" />
                <FaWindowClose className="delete" />
              </span>
            </li>

          ))}
        </ul>
      </div >
    );
  }
}

export default Main;
