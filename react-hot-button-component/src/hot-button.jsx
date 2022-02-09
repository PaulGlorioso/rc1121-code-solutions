import React from 'react';

export default class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicks: 0 };
    this.handleClicks = this.handleClicks.bind(this);
    this.renderButton = this.renderButton.bind(this);
  }

  handleClicks() {
    this.setState(({ clicks }) => ({
      clicks: clicks + 1
    }));
    const button = document.querySelector('.hot-button');
    const clicks = this.state.clicks;
    if (clicks <= 3) {
      button.className = 'hot-button cold';
    } else if (clicks <= 6) {
      button.className = 'hot-button cool';
    } else if (clicks <= 9) {
      button.className = 'hot-button tepid';
    } else if (clicks <= 12) {
      button.className = 'hot-button warm';
    } else if (clicks <= 15) {
      button.className = 'hot-button hot';
    } else {
      button.className = 'hot-button nuclear';
    }

  }

  renderButton() {
    return (
      <div>
        <button className='hot-button cold' onClick={() => this.handleClicks()}>Hot Button</button>
        <p>Clicks: {this.state.clicks}</p>
    </div>
    );
  }

  render() {
    return <this.renderButton />;
  }
}
