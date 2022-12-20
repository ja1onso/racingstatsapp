import "./App.scss";
import React from "react";
import Result from "../Result/Result";
import { Driver, DriverStanding } from "../DriverStanding/DriverStanding";
import { GrandPrixMenu } from "../GrandPrixMenu/GrandPrixMenu";
import { GpCard } from "../Cards/GpCard/GpCard";
import { CircuitCard } from "../Cards/CircuitCard/CircuitCard";
import { ScheduledCard } from "../Cards/ScheduleCard/ScheduledCard";
import { GapSimulationCard } from "../Cards/GapSimulationCard/GapSimulationCard";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      raceName: "N/A",
      raceDate: "N/A",
      raceTime: "N/A",
      circuitName: "N/A",
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
        let circuitName = data.MRData.RaceTable.Races[0].Circuit.circuitName;
        let raceName = data.MRData.RaceTable.Races[0].raceName;
        let raceDate = data.MRData.RaceTable.Races[0].date;
        let raceTime = data.MRData.RaceTable.Races[0].time;
        console.log("a", data.MRData.RaceTable.Races[0]);
        this.setState({
          results: results.length ? results[0].Results : [],
          raceName: raceName,
          raceDate: raceDate,
          raceTime: raceTime,
          circuitName: circuitName,
        });
      })
      .catch((error) => console.log("error", error));
  }

  render() {
    return (
      <div className="app font-face-roboto">
        <div className="box main">
          <div className="header"></div>
          <div className="sidebar">
            <GrandPrixMenu onSelectGrandPrix={this.selectGP} />
          </div>
          <div className="content">
            <GpCard
              circuitName={this.state.circuitName}
              raceName={this.state.raceName}
            />
            <div className="wrapper">
              <CircuitCard />
              <ScheduledCard
                raceDate={this.state.raceDate}
                raceTime={this.state.raceTime}
              />
            </div>
            <GapSimulationCard />
          </div>
        </div>
        <div className="box sidebar">
          <div>LeaderBoard</div>
          <div className="standingList">{this.renderResults()}</div>
        </div>
      </div>
    );
  }
}

export default App;
