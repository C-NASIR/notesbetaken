import React from "react";
import Header from "./ui/Header";
//importing routes
import Home from "./home/Home";
import Economy from "./course/Economy";
import Comm from "./course/Comm";
import Phyilosophy from "./course/Philosophy";
import ReactJS from "./course/ReactJS";
import CourseInput from "./Inputs/courseInput/CourseInput";
//Import Other Staff
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";
import { theme } from "./ui/Theme";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/economy" component={Economy} />
          <Route exact path="/communication" component={Comm} />
          <Route exact path="/philosophy" component={Phyilosophy} />
          <Route exact path="/reactjs" component={ReactJS} />
          <Route exact path="/addcourse" component={CourseInput} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
