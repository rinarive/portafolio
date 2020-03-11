import {Button} from 'react'

class Button extends React.Component {
    handleClick() {
      console.log('this is:', this);
    }
  
    render() {
      // Esta sintaxis nos asegura que `this` esta ligado dentro de handleClick
      return (
        <Button onClick={(e) => this.handleClick(e)}>
          Click me
        </Button>
      );
    }
  }
  export default Button