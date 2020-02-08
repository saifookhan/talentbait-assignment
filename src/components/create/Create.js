import React from "react";
import PropTypes from "prop-types";

function Create(props) {
  return <div>x {props.string}</div>;
}

Create.propTypes = {
  string: PropTypes.string
};

export default Create;
