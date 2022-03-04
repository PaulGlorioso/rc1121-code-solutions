import React from 'react';

export default class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      className: 'hot-button cold'
    };
    this.handleClicks = this.handleClicks.bind(this);
    this.renderButton = this.renderButton.bind(this);
    this.changeClass = this.changeClass.bind(this);
  }

  handleClicks() {
    const click = this.state.clicks;
    this.changeClass(this.setState({ clicks: click + 1 }));
  }

  changeClass() {
    const clicks = this.state.clicks;
    if (clicks <= 3) {
      this.setState({ className: 'hot-button cold' });
    } else if (clicks <= 6) {
      this.setState({ className: 'hot-button cool' });
    } else if (clicks <= 9) {
      this.setState({ className: 'hot-button tepid' });
    } else if (clicks <= 12) {
      this.setState({ className: 'hot-button warm' });
    } else if (clicks <= 15) {
      this.setState({ className: 'hot-button hot' });
    } else if (clicks <= 18) {
      this.setState({ className: 'hot-button nuclear' });
    } else {
      return this.state.className;
    }
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
