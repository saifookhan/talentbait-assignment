import React from "react";
import PropTypes from "prop-types";
import Reflux from "reflux";
import { RStore, Actions } from "../../utils/store";

class Counter extends Reflux.Component {
  constructor(props) {
    super(props);
    this.store = RStore;
  }

  render() {
    return (
      <div
        onClick={e => {
          Actions.increment();
        }}
      >
        {this.state.count}
      </div>
    );
  }
}

function Home(props) {
  return (
    <div>
      home {props.string} <Counter />
    </div>
  );
}

Home.propTypes = {
  string: PropTypes.string
};

export default Home;
