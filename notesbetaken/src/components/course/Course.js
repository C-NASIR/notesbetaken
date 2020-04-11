import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

//course styles
const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up("lg")]: {
      marginLeft: "9em",
      marginRight: "9em",
    },
    [theme.breakpoints.down("md")]: {
      marginLeft: "5em",
      marginRight: "5em",
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: "0",
      marginRight: "0",
    },
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  secondHeading: {
    fontWeight: theme.typography.fontWeightLight,
    marginLeft: "4em",
  },
  expansionPanel: {
    marginTop: "0.5em",
    marginBottom: "0.5em",
  },
  expansionPanelSummary: {
    height: "5em",
  },
}));

const Course = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {props.data.map((course) => (
        <ExpansionPanel
          classes={{ root: classes.expansionPanel }}
          key={course.id}
        >
          <ExpansionPanelSummary
            className={classes.expansionPanelSummary}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>
              ExpansionPanel 1
            </Typography>
            <Typography className={classes.secondHeading}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse{" "}
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      ))}
    </div>
  );
};

export default Course;
