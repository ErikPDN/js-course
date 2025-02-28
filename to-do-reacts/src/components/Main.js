import React, { Component } from 'react';
import Tasks from './Tasks';
import Form from './Form'
import './Main.css';

class Main extends Component {
  state = {
    newTask: '',
    tasks: [],
    editIndex: null,
  };

  componentDidMount() {
    const tasks = JSON.parse(localStorage.getItem('tasks'));

    this.setState({
      tasks: tasks || [],
    })
  }

  componentDidUpdate(prevProps, prevState) {
    const { tasks } = this.state;

    if (tasks !== prevState.tasks) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }

  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState((prevState) => {
      const newTask = prevState.newTask.trim();

      if (!newTask) return null;

      if (prevState.editIndex !== null) {
        const updatedTasks = [...prevState.tasks];
        updatedTasks[prevState.editIndex] = newTask;

        return {
          tasks: updatedTasks,
          newTask: '',
          editIndex: null,
        };
      }

      if (prevState.tasks.includes(newTask)) return null;

      return {
        tasks: [...prevState.tasks, newTask],
        newTask: '',
      };

    });
  };

  handleDelete = (e, index) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.filter((_, i) => i !== index),
    }));
  };

  handleEdit = (e, index) => {
    this.setState({
      newTask: this.state.tasks[index],
      editIndex: index,
    })
  }

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

        <Form
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          newTask={newTask}
        />

        <Tasks
          tasks={tasks}
          handleEdit={this.handleEdit}
          handleDelete={this.handleDelete}
        />

      </div >
    );
  }
}

export default Main;
