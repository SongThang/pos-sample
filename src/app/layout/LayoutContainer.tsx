import React, { Component } from "react";
import LayoutScreen from "./LayoutScreen";
interface Props {}
interface State {}

export default class LayoutContainer extends Component<Props, State> {
  state = {};

  render() {
    const { v4: uuidv4 } = require("uuid");
    console.log(`uuidv4();`, uuidv4());
    return <LayoutScreen />;
  }
}
