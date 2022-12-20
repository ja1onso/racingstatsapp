import React from "react";

import "./CircuitCard.scss";

export class CircuitCard extends React.Component {
  render() {
    return (
      <div className="circuitCard">
        <div className="circuitCard__title">Circuit overview</div>
        <div className="circuitCard__wrapper">
          <div className="turns">
            <div className="label">Turns</div>
            <div className="text">{this.props.turns}</div>
          </div>
          <div className="distance">
            <div className="label">Distance</div>
            <div className="text">{this.props.distance}</div>
          </div>
        </div>
      </div>
    );
  }

  // Default props
  static defaultProps = {
    turns: "N/A",
    distance: "N/A",
  };
}
