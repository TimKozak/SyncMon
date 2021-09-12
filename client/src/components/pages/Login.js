import React, { Fragment, useState, useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
// import AuthContext from "../../context/auth/authContext";
import LoginBar from "../layout/LoginBar";
import Preloader from "../layout/Preloader";

// Redux
import { connect } from "react-redux";

// Redux actions
import {} from "../../actions/authActions";

const Login = (props) => {
  const auth = props.auth;
  const { login, error, isAuthenticated } = auth;

  useEffect(() => {
    if (isAuthenticated) {
      // Redirect to home page
      props.history.push("/");
    }

    if (error === "Invalid Credentials") {
      M.toast({ html: error });
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const { username, password } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    if (username === "" || password === "") {
      M.toast({ html: "Please fill in all fields" });
    } else {
      login({ username, password });
    }
  };

  return (
    <Fragment>
      <LoginBar />
      <div className="container">
        <div className="container">
          <h1 className="center">
            Log <span className="blue-text text-lighten-1">In</span>
          </h1>
          <form onSubmit={onSubmit} className="container">
            {true && <Preloader />}
            <div className="form-group">
              <label htmlFor="email">User</label>
              <input
                type="text"
                name="username"
                value={username}
                onChange={onChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={onChange}
                required
              />
            </div>
            <input
              type="submit"
              value="Login"
              className="btn blue lighten-1"
              style={{ display: "block", width: "100%", marginTop: "30px" }}
            />
          </form>
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {})(Login);
