import React from "react";
//importing images
import EconomyImage from "../../images/EconomyImage.svg";
import CommImage from "../../images/CommImage.svg";
import Philosophy from "../../images/PhilosophyImage.svg";
import ReactJS from "../../images/ReactJSImage.svg";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
//Creating The Styles
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    [theme.breakpoints.down("md")]: {
      width: "18em",
    },
    [theme.breakpoints.down("sm")]: {
      width: "17em",
    },
    [theme.breakpoints.down("sx")]: {
      width: "20em",
    },
  },
  media: {
    height: 140,
  },
}));
const Home = (props) => {
  const classes = useStyles();
  return (
    <Grid container justify="center" spacing={2}>
      <Grid item>
        <Card className={classes.root}>
          <CardMedia
            className={classes.media}
            image={EconomyImage}
            title="Economy Image"
            component={Link}
            to="/economy"
            onClick={() => props.setValue(1)}
          />
          <CardContent>
            <Typography variant="h5" component="h2">
              Economy
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              An economy (from Greek οίκος – "household" and νέμoμαι – "manage")
              is an area of the production, distribution and trade, as well as
              consumption of goods and services by different agents. Understood
              in its broadest sense, 'The economy is defined as a social domain
              that emphasize the practices, discourses, and material expressions
              associated with the production, use, and management of
              resources'.[1] Economic agents can be individuals, businesses,
              organizations, or governments. Economic transactions occur when
              two groups or parties agree to the value or price of the
              transacted good or service, commonly expressed in a certain
              currency.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item>
        <Card className={classes.root}>
          <CardMedia
            className={classes.media}
            image={CommImage}
            title="Communication Image"
            component={Link}
            to="/communication"
            onClick={() => props.setValue(2)}
          />
          <CardContent>
            <Typography variant="h5" component="h2">
              Communication
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              An economy (from Greek οίκος – "household" and νέμoμαι – "manage")
              is an area of the production, distribution and trade, as well as
              consumption of goods and services by different agents. Understood
              in its broadest sense, 'The economy is defined as a social domain
              that emphasize the practices, discourses, and material expressions
              associated with the production, use, and management of
              resources'.[1] Economic agents can be individuals, businesses,
              organizations, or governments. Economic transactions occur when
              two groups or parties agree to the value or price of the
              transacted good or service, commonly expressed in a certain
              currency.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item>
        <Card className={classes.root}>
          <CardMedia
            className={classes.media}
            image={Philosophy}
            title="Philosophy Image"
            component={Link}
            to="/philosophy"
            onClick={() => props.setValue(3)}
          />
          <CardContent>
            <Typography variant="h5" component="h2">
              Philosophy
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              An economy (from Greek οίκος – "household" and νέμoμαι – "manage")
              is an area of the production, distribution and trade, as well as
              consumption of goods and services by different agents. Understood
              in its broadest sense, 'The economy is defined as a social domain
              that emphasize the practices, discourses, and material expressions
              associated with the production, use, and management of
              resources'.[1] Economic agents can be individuals, businesses,
              organizations, or governments. Economic transactions occur when
              two groups or parties agree to the value or price of the
              transacted good or service, commonly expressed in a certain
              currency.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item>
        <Card className={classes.root}>
          <CardMedia
            className={classes.media}
            image={ReactJS}
            title="ReactJS Image"
            component={Link}
            to="/reactjs"
            onClick={() => props.setValue(4)}
          />
          <CardContent>
            <Typography variant="h5" component="h2">
              ReactJS
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              An economy (from Greek οίκος – "household" and νέμoμαι – "manage")
              is an area of the production, distribution and trade, as well as
              consumption of goods and services by different agents. Understood
              in its broadest sense, 'The economy is defined as a social domain
              that emphasize the practices, discourses, and material expressions
              associated with the production, use, and management of
              resources'.[1] Economic agents can be individuals, businesses,
              organizations, or governments. Economic transactions occur when
              two groups or parties agree to the value or price of the
              transacted good or service, commonly expressed in a certain
              currency.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setValue: (value) => dispatch({ type: "ASSIGN_VALUE", value: value }),
  };
};
export default connect(null, mapDispatchToProps)(Home);
