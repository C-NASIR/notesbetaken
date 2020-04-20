import React, { useState } from "react";
import { useStyles } from "./courseInputStyles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";

const CourseInput = (props) => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [definition, setDefinition] = useState("");
  const [nameVerified, setNameVerified] = useState(true);
  const [definitionVerified, setDefinitionVerified] = useState(true);

  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    const func = name === "name" ? setName : setDefinition;
    assigner(func, value);
    const verifiedResult = verify(value);
    const funcVerify =
      name === "name" ? setNameVerified : setDefinitionVerified;
    assigner(funcVerify, verifiedResult);
  };

  const assigner = (setter, value) => {
    setter(value);
  };

  const verify = (value) => {
    return value !== "" && value !== null && value.length > 3 ? true : false;
  };

  const cancellHandler = () => {};
  const saveHandler = () => {};

  return (
    <form className={classes.root} noValidate>
      <Typography variant="h4" className={classes.title}>
        ADD NEW COURSE
      </Typography>
      <div className={classes.inputContainer}>
        <TextField
          label="Course Name"
          required
          error={nameVerified ? false : true}
          value={name}
          helperText={nameVerified ? null : "Name must Be 3 or more Letters"}
          name="name"
          onChange={changeHandler}
        />
        <TextField
          label="Course Description"
          variant="outlined"
          multiline
          required
          name="definition"
          error={definitionVerified ? false : true}
          value={definition}
          helperText={
            definitionVerified ? null : "Definition must Be 3 or more Letters"
          }
          rows={6}
          onChange={changeHandler}
        />
      </div>
      <Button
        variant="contained"
        className={classes.cancellButton}
        onClick={cancellHandler}
      >
        Cancell
      </Button>
      <Button
        variant="contained"
        className={classes.saveButton}
        onClick={saveHandler}
      >
        Save
      </Button>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveCourse: (data) => dispatch({ type: "course", data: data }),
  };
};
export default connect(null, mapDispatchToProps)(CourseInput);
