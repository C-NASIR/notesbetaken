import React, { useEffect } from "react";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const NavTabs = (props) => {
  //handle when the tab value changes / user tabs a different tab
  const handleValueChanged = (event, newValue) => {
    props.setValue(newValue);
  };

  //setting to the correct index after the page refreshes or user tabs another tab
  useEffect(() => {
    props.tabs.forEach((tab) => {
      if (
        window.location.pathname === tab.path &&
        props.value !== tab.activeIndex
      ) {
        props.setValue(tab.activeIndex);
      }
    });
  }, [props]);

  return (
    <Tabs
      value={props.value}
      onChange={handleValueChanged}
      indicatorColor="primary"
      textColor="primary"
      centered
    >
      <Tab label="Home" component={Link} to="/" />
      <Tab label="Economy" component={Link} to="/economy" />
      <Tab label="Communication" component={Link} to="/communication" />
      <Tab label="Philosophy" component={Link} to="/philosophy" />
      <Tab label="React Js" component={Link} to="/reactjs" />
    </Tabs>
  );
};

const mapStateToProps = (state) => {
  return {
    value: state.TabActiveIndex,
    tabs: state.NavTabs,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setValue: (value) => dispatch({ type: "ASSIGN_VALUE", value: value }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(NavTabs);
