import React from "react";
import { Component } from "react";

import List from "../containers/list.js";
import ActiveVertical from "../containers/active_vertical.js";

export default class App extends Component {
  render() {
    return (
      <div>
        <List />
        <ActiveVertical />
      </div>
    );
  }
}
