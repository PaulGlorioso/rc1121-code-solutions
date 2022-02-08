import React from 'react';
import ReactDOM from 'react-dom';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
  }

  handleClick() {
    this.setState({ isClicked: true });
  }

  render() {
    const click = this.state.isClicked;
    return (
      <div>
      {click
        ? <button onClick={() => this.handleClick()}>Thanks</button>
        : <button onClick={() => this.handleClick()}>Click Me!</button>
        }
      </div>
    );
  }
}

ReactDOM.render(
  <CustomButton />,
  document.querySelector('#root')
);
