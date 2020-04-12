import React from "react";
import Course from "./Course";
import { connect } from "react-redux";
const Economy = (props) => {
  return <Course course={props.data} />;
};

const mapStateToProps = (state) => {
  return {
    data: state.Economy,
  };
};
export default connect(mapStateToProps)(Economy);
