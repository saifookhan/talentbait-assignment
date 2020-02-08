import React from "react";
import { RStore, Actions } from "../../utils/store";
import "./form.css";
var Reflux = require("reflux");

export default class Create extends Reflux.Component {
  constructor(props) {
    super(props);
    this.store = RStore; // <- the only thing needed to tie the store into this component
  }

  state = {
    _id: "",
    title: "",
    location: "",
    company: "",
    requirements: "",
    tasks: ""
  };

  onClickSubmit = e => {
    e.preventDefault();
    Actions.appendJobs({
      _id: this.state._id,
      title: this.state.title,
      city: this.state.location,
      employer: this.state.company,
      requirements: this.state.requirements.split(","),
      tasks: this.state.tasks.split(",")
    });
  };

  render() {
    return (
      <div class="container">
        <h2>Add new data</h2>
        <form class="form" onSubmit={e => this.onClickSubmit(e)}>
          <div class="form-label-input-holder">
            <div class="form-label-holder">
              <div class="form-label">ID</div>
            </div>
            <div class="form-input-holder">
              <input
                class="form-input"
                onKeyPress={e => this.setState({ _id: e.target.value })}
              ></input>
            </div>
          </div>
          <div class="form-label-input-holder">
            <div class="form-label-holder">
              <div class="form-label">Title</div>
            </div>
            <div class="form-input-holder">
              <input
                class="form-input"
                onChange={e => this.setState({ title: e.target.value })}
              ></input>
            </div>
          </div>
          <div class="form-label-input-holder">
            <div class="form-label-holder">
              <div class="form-label">Location</div>
            </div>
            <div class="form-input-holder">
              <input
                class="form-input"
                onChange={e => this.setState({ location: e.target.value })}
              ></input>
            </div>
          </div>
          <div class="form-label-input-holder">
            <div class="form-label-holder">
              <div class="form-label">Company</div>
            </div>
            <div class="form-input-holder">
              <input
                class="form-input"
                onChange={e => this.setState({ company: e.target.value })}
              ></input>
            </div>
          </div>
          <div class="form-label-input-holder">
            <div class="form-label-holder">
              <div class="form-label">Requirements</div>
            </div>
            <div class="form-input-holder">
              <textarea
                class="form-textarea"
                rows="5"
                onChange={e => this.setState({ requirements: e.target.value })}
              ></textarea>
            </div>
          </div>
          <div class="form-label-input-holder">
            <div class="form-label-holder">
              <div class="form-label">Tasks</div>
            </div>
            <div class="form-input-holder">
              <textarea
                class="form-textarea"
                rows="5"
                onChange={e => this.setState({ tasks: e.target.value })}
              ></textarea>
            </div>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
