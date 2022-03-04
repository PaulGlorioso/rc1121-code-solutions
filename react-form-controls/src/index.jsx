import React from 'react';
import ReactDom from 'react-dom';

const div = document.querySelector('#root');

class NewsletterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }

  handleChange(event) {
    this.setState({ email: event.target.value });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Email:
          <input type="email" value={this.state.email} onChange={this.handleChange}></input>
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

ReactDom.render(
  <NewsletterForm />,
  div
);
