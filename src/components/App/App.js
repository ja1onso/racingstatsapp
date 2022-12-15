import "./App.scss";
import React from "react";
import Result from "../Result/Result";
import SelectRace from "../SelectRace/SelectRace";
import { Driver, DriverStanding } from "../DriverStanding/DriverStanding";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
    };
    this.selectRace = this.selectRace.bind(this);
  }

  renderResults() {
    if (this.state.results.length) {
      return (
        <div className="resultList">
          {this.state.results.map((result, index) => {
            return (
              <DriverStanding
                result={result}
                key={result.number}
              />
            );
          })}
        </div>
      );
    }
    return <span>No results yet</span>;
  }

  selectRace(race) {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(`http://ergast.com/api/f1/2022/${race}/results.json`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        let results = data.MRData.RaceTable.Races;
        this.setState({ results: results.length ? results[0].Results : [] });
      })
      .catch((error) => console.log("error", error));
  }

  render() {
    return (
      <div className="app font-face-roboto">
        <div className="main"></div>
        <SelectRace onSelectRace={this.selectRace} />
        <h2>LeaderBoard</h2>
        <div className="standingList">{this.renderResults()}</div>
      </div>
    );
  }
}

export default App;
