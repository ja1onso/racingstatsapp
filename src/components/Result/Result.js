import React from "react";
import "./Result.scss";

class Result extends React.Component {
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

  render() {
    console.log("result", this.props.result);
    return (
      <div className="result">
        <span className="position">{this.props.result.position}</span>
        <span className="code">{this.props.result["Driver"].code}</span>
        {this.renderTime()}
      </div>
    );
  }
}

export default Result;
