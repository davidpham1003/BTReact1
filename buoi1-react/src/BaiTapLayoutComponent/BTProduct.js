import React, { Component } from "react";
import BTItems from "./BTItems";

export default class BTProduct extends Component {
  render() {
    return (
      <div>
        <div className="row text-center">
          <div className="col-lg-3 col-md-6 mb-4">
            <BTItems />
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <BTItems />
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <BTItems />
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <BTItems />
          </div>
        </div>
      </div>
    );
  }
}
