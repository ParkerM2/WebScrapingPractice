import React from 'react';
import runPuppeteerUsername from "../../Scripts/Puppeteer";

class Form extends React.Component {
  // Setting the component's initial state
  state = {
    username: "",
    currentUserStats: [],  
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;
    // Updating the input's state
    this.setState({
      [name]: value
    });
    };

    // run username search through the web scraper 
    searchUsername = query => {
        runPuppeteerUsername.runPuppeteerUsername(query)
            .then(res => this.setState({ currentUserStats: res }))
            .catch(err => console.log(err));
        console.log("ran the searchUsername function", this.state.currentUserStats)
    };
    
  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    // Alert the user their first and last name, clear `this.state.username` and `this.state.lastName`, clearing the inputs
    alert(`Hello ${this.state.username}`);
    this.searchUsername(this.username)
    this.setState({
        username: "",
    });
 };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>
        <p>
          Hello {this.state.username}
        </p>
        <form className="form">
          <input
            value={this.state.username}
            name="username"
            onChange={this.handleInputChange}
            type="text"
            placeholder="First Name"
          />
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Form