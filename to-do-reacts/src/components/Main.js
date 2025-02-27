import React, { Component } from 'react';
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

        <form action="#">
          <input onChange={this.handleChange} type="text" />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }

}

export default Main;
