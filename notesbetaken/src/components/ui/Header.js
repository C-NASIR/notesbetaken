import React from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme, makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import NavTabs from "./NavTabs";
import Drawer from "./NavDrawer";

const useStyle = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: "3em",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "1em",
    },
  },
}));
const Header = (props) => {
  const classes = useStyle();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Paper className={classes.root}>{matches ? <Drawer /> : <NavTabs />}</Paper>
  );
};

export default Header;
