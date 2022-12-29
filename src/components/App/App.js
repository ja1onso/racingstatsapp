import "./App.scss";
import React from "react";
import { Driver, DriverStanding } from "../DriverStanding/DriverStanding";
import { GrandPrixMenu } from "../GrandPrixMenu/GrandPrixMenu";
import { GpCard } from "../Cards/GpCard/GpCard";
import { CircuitOverviewCard } from "../Cards/CircuitOverviewCard/CircuitOverviewCard";
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
        let circuitId = data.MRData.RaceTable.Races[0].Circuit.circuitId;
        let circuitName = data.MRData.RaceTable.Races[0].Circuit.circuitName;
        let raceName = data.MRData.RaceTable.Races[0].raceName;
        let raceDate = data.MRData.RaceTable.Races[0].date;
        let raceTime = data.MRData.RaceTable.Races[0].time;
        // console.log("a", data.MRData.RaceTable.Races[0]);
        console.log(data.MRData.RaceTable.Races[0].Circuit.circuitId);
        this.setState({
          results: results.length ? results[0].Results : [],
          raceName: raceName,
          raceDate: raceDate,
          raceTime: raceTime,
          circuitId: circuitId,
          circuitName: circuitName,
        });
      })
      .catch((error) => console.log("error", error));
  }

  render() {
    return (
      <div className="app font-face-roboto">
        <div className="box main">
          <div className="header">
            <div className="header__logo"></div>
            <div className="header__slogan">
              Hi! Wellcome to Grand Prix Results
            </div>
            <div className="header__chip">season 2022</div>
          </div>
          <div className="sidebar">
            <GrandPrixMenu onSelectGrandPrix={this.selectGP} />
          </div>
          <div className="content">
            <GpCard
              circuitId={this.state.circuitId}
              circuitName={this.state.circuitName}
              raceName={this.state.raceName}
            />
            <div className="wrapper">
              <CircuitOverviewCard circuitId={this.state.circuitId} />
              <ScheduledCard
                raceDate={this.state.raceDate}
                raceTime={this.state.raceTime}
              />
            </div>
            <GapSimulationCard circuitId={this.state.circuitId} />
          </div>
        </div>
        <div className="box sidebar">
          <h2>LeaderBoard</h2>
          <div className="standingList">{this.renderResults()}</div>
        </div>
      </div>
    );
  }
}

export default App;
