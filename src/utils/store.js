var Reflux = require("reflux");

var Actions = Reflux.createActions(["increment"]);

class RStore extends Reflux.Store {
  constructor() {
    super();
    this.state = { count: 0 };
    this.listenables = Actions;
  }

  onIncrement() {
    this.setState({ count: this.state.count + 1 });
  }
}

module.exports = { RStore, Actions };
