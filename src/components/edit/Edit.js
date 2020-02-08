import React from "react";
import Reflux from "reflux";
import { RStore, Actions } from "../../utils/store";
import { withRouter } from "react-router-dom";
import _ from "lodash";

class Edit extends Reflux.Component {
  constructor(props) {
    super(props);
    this.store = RStore;
    this.actions = Actions; // <- the only thing needed to tie the store into this component
    console.log(this.props);
  }

  state = {
    urlParam: this.props.location.pathname.split("/")[2],
    _id: "",
    title: "",
    location: "",
    company: "",
    requirements: "",
    tasks: ""
  };

  componentDidMount() {
    this.setState(
      { urlParam: this.props.location.pathname.split("/")[2] },
      this.autoFillForm()
    );
  }

  autoFillForm() {
    //let output = _.find(this.state.jobData, { _id: this.state.urlParam });
    let output = this.state.jobData.filter(j => {
      return j._id === this.state.urlParam;
    })[0];
    console.log(output);
    if (output !== {}) {
      this.setState({
        _id: output._id,
        title: output.title,
        location: output.city,
        company: output.employer,
        requirements: output.requirements,
        tasks: output.tasks
      });
    }
  }

  onClickUpdate = e => {
    e.preventDefault();
    var index = _.findIndex(this.state.jobData, { _id: this.state.urlParam });
    console.log(index);
    Actions.updateJob(index, {
      _id: this.state._id,
      title: this.state.title,
      city: this.state.location,
      employer: this.state.company,
      requirements: Array.isArray(this.state.requirements)
        ? this.state.requirements
        : this.state.requirements.split(","),
      tasks: Array.isArray(this.state.tasks)
        ? this.state.tasks
        : this.state.tasks.split(",")
    });
    this.props.history.push("/#true");
  };

  render() {
    return (
      <div>
        <div>
          <h2>Edit ({this.state.urlParam})</h2>
        </div>
        <div>
          <form class="form" onSubmit={e => this.onClickUpdate(e)}>
            <div class="form-label-input-holder">
              <div class="form-label-holder">
                <div class="form-label">ID</div>
              </div>
              <div class="form-input-holder">
                <input
                  class="form-input"
                  defaultValue={this.state._id}
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
                  defaultValue={this.state.title}
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
                  defaultValue={this.state.location}
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
                  defaultValue={this.state.company}
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
                  onChange={e =>
                    this.setState({ requirements: e.target.value })
                  }
                  defaultValue={this.state.requirements}
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
                  defaultValue={this.state.tasks}
                  onChange={e => this.setState({ tasks: e.target.value })}
                ></textarea>
              </div>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(Edit);
