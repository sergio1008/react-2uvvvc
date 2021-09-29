import React from 'react';
import './style.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Sergio',
    };
    this.changeName = this.changeName.bind(this);
  }

  changeName() {
    this.setState((oldState) => ({
      name: oldState.name + ' ' + 'Bernal',
    }));
  }
  render() {
    return (
      <>
        <button onClick={this.changeName}>cambiar</button>
        <h1>{this.state.name + (this.props.mensaje ? this.props.mensaje : '' )}</h1>
      </>
    );
  }
}
