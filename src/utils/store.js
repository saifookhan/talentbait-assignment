var Reflux = require("reflux");

var Actions = Reflux.createActions(["increment"]);

var jobData = require("./constants/job_dataset").default;

class RStore extends Reflux.Store {
  constructor() {
    super();
    this.state = { count: 0, jobData: jobData };
    this.listenables = Actions;
  }

  onIncrement() {
    this.setState({ count: this.state.count + 1 });
  }
}

module.exports = { RStore, Actions };
