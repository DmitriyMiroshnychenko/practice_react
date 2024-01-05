import React from "react";

class Form extends React.Component {
  state = {
    firstName: "",
    email: "",
    message: "",
    select: "",
  };
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  validateName = () => {
    if (this.state.firstName.length < 5) {
      alert("Your  first name can`t be letter than  7 letters");
    }
  };

  validateEmail = () => {
    if (
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})*$/.test(this.state.email)
    ) {
      alert("is not valid");
    }
  };

  render() {
    const { firstName, email, message, select } = this.state;
    return (
      <div>
        <input
          type="text"
          name="firstName"
          placeholder="firstName"
          value={firstName}
          onChange={this.handleChange}
          onBlur={this.validateName}
        />
        <input
          type="email"
          name="email"
          placeholder="email"
          value={email}
          onChange={this.handleChange}
          onBlur={this.validateEmail}
        />
        <br />
        <textarea name="message" value={message} onChange={this.handleChange} />
        <br />
        <select name="select" value={select} onChange={this.handleChange}>
          <option value="disabled"></option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
    );
  }
}

export { Form };
