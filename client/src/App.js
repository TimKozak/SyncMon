import { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Materialize styles
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";

// Store (Redux)
import { Provider } from "react-redux";
import store from "./store";

// Pages
import Home from "./components/pages/Home";
import Compare from "./components/pages/Compare";

const App = () => {
  // Style Initialization
  useEffect(() => {
    M.AutoInit();
    const elems = document.querySelectorAll(".fixed-action-btn");
    M.FloatingActionButton.init(elems, {
      hoverEnabled: false,
    });
  });

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/compare" component={Compare} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
