import React from 'react';
import './style.css';
import { Button} from './components/button.js'
export default class  App extends React.Component {
  render(){
    return <NavBar name="sergio" />;
  }
}

class NavBar extends React.Component {
  nombre = 'sergio';
  render() {
    return (
      <div className="card">
        <div className="card-body">{this.props.name}</div>
        <Button class="btn btn-info"type="button" label="Entrar"></Button>
      </div>
    );
  }
}
