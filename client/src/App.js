import { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Materialize styles
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";

// Redux
import { connect } from "react-redux";

// Pages
import Home from "./components/pages/Home";
import Compare from "./components/pages/Compare";
import Login from "./components/pages/Login";

// Themes
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/globalStyles";
import { lightTheme, darkTheme } from "./components/Theme";

const App = ({ sync: { theme } }) => {
  // Style Initialization
  useEffect(() => {
    M.AutoInit();
    const elems = document.querySelectorAll(".fixed-action-btn");
    M.FloatingActionButton.init(elems, {
      hoverEnabled: false,
    });
  });

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/compare" component={Compare} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

const mapStateToProps = (state) => ({
  sync: state.sync,
});

export default connect(mapStateToProps, {})(App);
