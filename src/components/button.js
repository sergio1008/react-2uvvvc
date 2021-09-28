import {React} from react;

export default class  Button extends React.Component{
  render(){
    const button = <button className="{this.props.class}" type="{this.props.type}">;{this.props.label}</button>
   return (button);
  }
}