import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";
import MenuIcon from "@material-ui/icons/Menu";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";

//Drawer styles
const useStyle = makeStyles((theme) => ({
  list: {
    width: "100%",
  },
  nav: {
    ...theme.typography.h6,
    color: theme.palette.primary,
    textAlign: "center",
  },
}));

const NavDrawer = (props) => {
  const classes = useStyle();
  const [openDrawer, setOpenDrawer] = useState(false);
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  return (
    <>
      <Drawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onOpen={() => setOpenDrawer(true)}
        onClose={() => setOpenDrawer(false)}
        anchor="bottom"
      >
        <List className={classes.list}>
          <ListItem className={classes.nav} divider>
            <ListItemText>
              <Typography variant="h6" className={classes.nav}>
                Navigation
              </Typography>
            </ListItemText>
          </ListItem>
          {props.tabs.map((tab) => (
            <ListItem
              key={tab.name}
              divider
              button
              selected={props.value === tab.activeIndex}
              component={Link}
              to={tab.path}
              onClick={() => {
                setOpenDrawer(false);
                props.setValue(tab.activeIndex);
              }}
            >
              <ListItemText>{tab.name}</ListItemText>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Tabs centered>
        <Tab
          onClick={() => setOpenDrawer(!openDrawer)}
          label={openDrawer ? "CLOSE" : "OPEN"}
          icon={openDrawer ? <MenuIcon /> : <MenuOpenIcon />}
        />
      </Tabs>
    </>
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

export default connect(mapStateToProps, mapDispatchToProps)(NavDrawer);
