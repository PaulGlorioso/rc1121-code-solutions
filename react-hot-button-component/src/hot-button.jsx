import React from 'react';

export default class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      className: 'hot-button cold'
    };
    this.handleClicks = this.handleClicks.bind(this);
    this.renderButton = this.renderButton.bind(this);
    this.changeClass = this.changeClass.bind(this);
  }

  handleClicks() {
    const clicks = 0;
    this.changeClass(clicks);
  }

  changeClass(clicks) {
    let className = this.state.className;
    if (clicks <= 3) {
      className = 'hot-button cold';
    } else if (clicks <= 6) {
      className = 'hot-button cool';
    } else if (clicks <= 9) {
      className = 'hot-button tepid';
    } else if (clicks <= 12) {
      className = 'hot-button warm';
    } else if (clicks <= 15) {
      className = 'hot-button hot';
    } else {
      className = 'hot-button nuclear';
    }
    return className;
  }

  renderButton() {
    return (
      <div>
        <button className={this.state.className} onClick={() => this.handleClicks()}>Hot Button</button>
        <p>Clicks: {this.state.clicks}</p>
    </div>
    );
  }

  render() {
    return <this.renderButton />;
  }
}
