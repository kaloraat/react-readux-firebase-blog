import React, { Component } from 'react';
import { database } from '../firebase';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: ''
    };
    // bind
    this.onInputChange = this.onInputChange.bind(this);
    this.onHandleSubmit = this.onHandleSubmit.bind(this);
  }

  onInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onHandleSubmit(e) {
    e.preventDefault();
    const post = {
      title: this.state.title,
      body: this.state.body
    };
    database.push(post);
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.onHandleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="title"
              placeholder="Title"
              onChange={this.onInputChange}
              ref="title"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="body"
              placeholder="Body"
              onChange={this.onInputChange}
              ref="body"
              className="form-control"
            />
          </div>
          <button className="btn btn-primary">Post</button>
        </form>
      </div>
    );
  }
}

export default App;
