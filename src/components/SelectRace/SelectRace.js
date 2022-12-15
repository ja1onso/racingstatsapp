import React from "react";
import "./SelectRace.scss";

class SelectRace extends React.Component {
  constructor(props) {
    super(props);
    this.selectRace = this.selectRace.bind(this);
  }

  selectRace(event) {
    let race = event.target.value;
    this.props.onSelectRace(race);
  }

  render() {
    return (
      <div className="select-race">
        <select
          name="races"
          id="races"
          onChange={this.selectRace}
        >
          <option value="1">Bahrain Grand Prix</option>
          <option value="2">Saudi Arabian Grand Prix</option>
          <option value="3">Australian Grand Prix</option>
          <option value="4">Emilia Romagna Prix</option>
          <option value="5">Miami Grand Prix</option>
          <option value="6">Spanish Grand Prix</option>
          <option value="7">Mónaco Grand Prix</option>
          <option value="8">Azerbaijan Grand Prix</option>
          <option value="9">Canadian Grand Prix</option>
          <option value="10">British Grand Prix</option>
          <option value="11">Austrian Grand Prix</option>
          <option value="12">French Grand Prix</option>
          <option value="13">Hungarian Grand Prix</option>
          <option value="14">Belgian Grand Prix</option>
          <option value="15">Dutch Grand Prix</option>
          <option value="16">Italian Grand Prix</option>
          <option value="17">Singapore Grand Prix</option>
          <option value="18">Japanese Grand Prix</option>
          <option value="19">United States Grand Prix</option>
          <option value="20">México City Grand Prix</option>
          <option value="21">Brazilian Grand Prix</option>
          <option value="22">Abu Dhabi Grand Prix</option>
        </select>
      </div>
    );
  }
}

export default SelectRace;
