import "./App.scss";
import React from "react";
import Result from "../Result/Result";
import { Driver, DriverStanding } from "../DriverStanding/DriverStanding";
import Bahrain from "../Circuits/Bahrain";
import { GrandPrixMenu } from "../GrandPrixMenu/GrandPrixMenu";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
    };
    this.selectGP = this.selectGP.bind(this);
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

  selectGP(race) {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(`http://ergast.com/api/f1/2022/${race}/results.json`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        let results = data.MRData.RaceTable.Races;
        console.log("a", data.MRData.RaceTable.Races[0]);
        this.setState({ results: results.length ? results[0].Results : [] });
      })
      .catch((error) => console.log("error", error));
  }

  render() {
    return (
      <div className="app font-face-roboto">
        <GrandPrixMenu onSelectGrandPrix={this.selectGP} />
        <div className="main">
          <h2>LeaderBoard</h2>
          <div className="standingList">{this.renderResults()}</div>
        </div>
      </div>
    );
  }
}

export default App;
