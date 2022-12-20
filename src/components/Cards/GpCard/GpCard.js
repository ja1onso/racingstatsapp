import React from "react";

import "./GpCard.scss";

export class GpCard extends React.Component {
  render() {
    return (
      <div className="gpCard">
        <div className="suptitle">
          <div className="flag"></div>
          <div className="text">{this.props.circuitName}</div>
        </div>
        <div className="title">FORMULA 1 {this.props.raceName}</div>
      </div>
    );
  }
}
