import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
//setting the header styles
const useStyle = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: "3em",
  },
  homeTab: {},
}));

//setting the header function
const Header = (props) => {
  const classes = useStyle();

  //handle when the tab value changes / user tabs a different tab
  const handleValueChanged = (event, newValue) => {
    props.setValue(newValue);
  };

  //this switch fixes the active index when the page is refreshed
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
    <Paper className={classes.root}>
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
    </Paper>
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
export default connect(mapStateToProps, mapDispatchToProps)(Header);
