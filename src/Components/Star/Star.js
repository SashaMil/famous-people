import React, { Component } from 'react';

class Star extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        name: '',
        accolade: ''
      }
    };
    // this.handleNameChange = this.handleNameChange.bind(this);
    // this.handleAccoladeChange = this.handleAccoladeChange.bind(this);
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state.person);
  }


  handleNameChange = event => {
    this.setState({
      person: {
        ...this.state.person,
        name: event.target.value
      }
    })
  }

  handleAccoladeChange = event => {
    this.setState({
      person: {
        ...this.state.person,
        accolade: event.target.value
      }
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleNameChange} placeholder="Name"/>
          <input onChange={this.handleAccoladeChange} placeholder="Accolade"/>
          <p>{this.state.person.name} is famous for {this.state.person.accolade}</p>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
}

export default Star;
