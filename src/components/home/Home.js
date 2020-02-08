import React from "react";
import PropTypes from "prop-types";

function Home(props) {
  return <div>{props.string}</div>;
}

Home.propTypes = {
  string: PropTypes.string
};

export default Home;
