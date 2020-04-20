import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
  },
  inputContainer: {
    display: "flex",
    flexDirection: "column",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  title: {
    textDecoration: "underline",
    color: theme.palette.common.purple,
  },
  cancellButton: {
    margin: theme.spacing(2),
    width: "10em",
    height: "5em",
    backgroundColor: theme.palette.common.destroy,
    color: "white",
    "&:hover": {
      backgroundColor: theme.palette.common.destroyHover,
    },
  },
  saveButton: {
    margin: theme.spacing(2),
    width: "10em",
    height: "5em",
    backgroundColor: theme.palette.common.save,
    color: "white",
    "&:hover": {
      backgroundColor: theme.palette.common.saveHover,
    },
  },
}));
