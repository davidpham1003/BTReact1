import React, { Component } from "react";
import BTAbout from "./BTAbout";
import BTProduct from "./BTProduct";

export default class BTContainer extends Component {
  render() {
    return (
      <div className="container">
        <BTAbout />
        <BTProduct/>
      </div>
    );
  }
}
