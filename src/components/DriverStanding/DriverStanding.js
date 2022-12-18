import React from "react";
import "./DriverStanding.scss";
export class DriverStanding extends React.Component {
  constructor(props) {
    super(props);
  }

  renderTime() {
    let time = this.props.result["Time"];
    let positionText = this.props.result["positionText"];
    let status = this.props.result["status"];
    if (time) {
      return <span className="time">{time["time"]}</span>;
    } else if (isNaN(positionText)) {
      return <span className="time">{positionText}</span>;
    } else {
      return <span className="time">{status}</span>;
    }
  }

  renderClassName() {
    let isPodiumPosition = parseInt(this.props.result.position) < 4;
    return isPodiumPosition ? "" : "small";
  }

  render() {
    return (
      <div className={"driverStanding " + this.renderClassName()}>
        <div
          className={"team " + this.props.result["Constructor"].constructorId}
        ></div>
        <div className="wrapper">
          {parseInt(this.props.result.position) > 3 && (
            <div className="position">{this.props.result.position}</div>
          )}
          <div className="familyName">
            {this.props.result["Driver"].familyName}
            <span>, </span>
          </div>
          <div className="givenName">
            {this.props.result["Driver"].givenName}
          </div>
        </div>
        <span className="time">{this.renderTime()}</span>
      </div>
    );
  }
}
