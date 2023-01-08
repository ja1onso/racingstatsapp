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
      q3PodiumTimes: [],
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
    // race results
    fetch(`http://ergast.com/api/f1/2022/${race}/results.json`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        let results = data.MRData.RaceTable.Races;
        // console.log("a", data.MRData.RaceTable.Races[0]);
        this.setState({
          results: results.length ? results[0].Results : [],
          raceName: data.MRData.RaceTable.Races[0].raceName,
          raceDate: data.MRData.RaceTable.Races[0].date,
          raceTime: data.MRData.RaceTable.Races[0].time,
          circuitId: data.MRData.RaceTable.Races[0].Circuit.circuitId,
          circuitName: data.MRData.RaceTable.Races[0].Circuit.circuitName,
        });
      })
      .catch((error) => console.log("error", error));
    fetch(
      `http://ergast.com/api/f1/2022/${race}/qualifying.json`,
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        // console.log("a", data.MRData.RaceTable.Races[0].QualifyingResults);
        let q3PodiumResultsRaw =
          data.MRData.RaceTable.Races[0].QualifyingResults.slice(0, 3);
        let q3PodiumResultsFormatted = q3PodiumResultsRaw.map((result) => ({
          constructor: result.Constructor.constructorId,
          familyName: result.Driver.familyName,
          givenName: result.Driver.givenName,
          code: result.Driver.code,
          q3PodiumTimes: result.Q3,
        }));
        this.setState({ q3PodiumTimes: q3PodiumResultsFormatted });
      })
      .catch((error) => console.log("error", error));
  }

  render() {
    return (
      <div className="app font-face-roboto">
        <div className="box main">
          <div className="main__header">
            <div className="header__logo"></div>
            <div className="header__slogan">
              Hi! Wellcome to Grand Prix Results
            </div>
            <div className="header__chip">season 2022</div>
          </div>
          <div className="main__wrapper">
            <div className="wrapper__sidebar">
              <div className="inner-wrapper">
                <GrandPrixMenu onSelectGrandPrix={this.selectGP} />
              </div>
            </div>
            <div className="wrapper__content">
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
              <GapSimulationCard
                circuitId={this.state.circuitId}
                q3Times={this.state.q3PodiumTimes}
              />
            </div>
          </div>
        </div>
        <div className="box sidebar">
          <div className="sidebar__title">LeaderBoard</div>
          <div className="sidebar__list">{this.renderResults()}</div>
          <div className="sidebar__list"></div>
        </div>
      </div>
    );
  }
}

export default App;
