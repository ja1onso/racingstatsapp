import React from "react";

import "./ScheduledCard.scss";

export class ScheduledCard extends React.Component {
  render() {
    return (
      <div className="scheduledCard">
        <div className="scheduledCard__title">Race schedule</div>
        <div className="scheduledCard__wrapper">
          <div className="date">
            <div className="label">Date</div>
            <div className="text">{this.props.raceDate}</div>
          </div>
          <div className="time">
            <div className="label">Time (UTC)</div>
            <div className="text">{this.props.raceTime}</div>
          </div>
        </div>
      </div>
    );
  }
}
