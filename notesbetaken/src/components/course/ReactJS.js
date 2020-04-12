import React from "react";
import Course from "./Course";
import { connect } from "react-redux";
const ReactJS = (props) => {
  return <Course course={props.data} />;
};

const mapStateToProps = (state) => {
  return {
    data: state.ReactJS,
  };
};
export default connect(mapStateToProps)(ReactJS);
