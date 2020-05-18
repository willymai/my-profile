import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import LazyLoad from "./utils/LazyLoad";
import Profile from "./scenes/Profile";

const Test = (props) => <LazyLoad component={React.lazy(() => import(/* webpackChunkName: "Test" */ './scenes/Test'))} {...props} />;
export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Profile} />
        <Route path="/test" component={Test} />
      </Switch>
    );
  }
}
