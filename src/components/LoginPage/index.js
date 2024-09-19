import { Component } from "react";
import "./index.css";

class LoginPage extends Component {
  state = {
    title: "navya",
    description: "navya is a good girl",
    Due_date: "12-5-2024",
    list: [],
  };
  onSubmitForm = () => {
    console.log("clicke");
    const { title, description, Due_date } = this.state;
    const newItem = {
      Title: title,
      Description: description,
      Deu: Due_date,
    };
    this.setState({ list: newItem });
  };

  renderLoginForm = () => {
    return (
      <form className="form-cont" onSubmit={this.onSubmitForm()}>
        <div className="tiny">
          <label id="title"> Title : </label>
          <input type="text" htmlFor="title" className="title-cont"></input>
        </div>
        <div className="tiny">
          <label id="description"> Description : </label>
          <input
            type="text"
            htmlFor="description"
            className="title-cont"
          ></input>
        </div>
        <div className="tiny">
          <label id="due-date"> Due Date : </label>
          <input type="text" htmlFor="due-date" className="title-cont"></input>
        </div>
        <button type="submit" className="btn-add">
          Add
        </button>
      </form>
    );
  };

  render() {
    return (
      <div>
        <h1>Task Manager</h1>
        <div>{this.renderLoginForm()}</div>
      </div>
    );
  }
}

export default LoginPage;
