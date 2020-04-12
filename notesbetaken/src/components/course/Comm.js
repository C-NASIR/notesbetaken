import React from "react";
import Course from "./Course";
import { connect } from "react-redux";
const Comm = (props) => {
  return <Course course={props.data} />;
};

const mapStateToProps = (state) => {
  return {
    data: state.Comm,
  };
};
export default connect(mapStateToProps)(Comm);
