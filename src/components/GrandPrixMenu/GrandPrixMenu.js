import React from "react";
import { Bahrain } from "../Circuits/Bahrain";
import { Saudi } from "../Circuits/Saudi";

import "./GrandPrixMenu.scss";

const options = [
  {
    round: 1,
    component: <Bahrain />,
    name: "Bahrain Grand Prix",
  },
  {
    round: 2,
    component: <Saudi />,
    name: "Saudi Arabian Grand Prix",
  },
  {
    round: 3,
    component: <Bahrain />,
    name: "Australian Grand Prix",
  },
  {
    round: 4,
    component: <Bahrain />,
    name: "Emilia-Romagna Gran Prix",
  },
  {
    round: 5,
    component: <Bahrain />,
    name: "Miami Grand Prix",
  },
  {
    round: 6,
    component: <Bahrain />,
    name: "Spanish Grand Prix",
  },
  {
    round: 7,
    component: <Bahrain />,
    name: "Monaco Grand Prix",
  },
  {
    round: 8,
    component: <Bahrain />,
    name: "Azerbaijan Grand Prix",
  },
  {
    round: 9,
    component: <Bahrain />,
    name: "Canada Grand Prix",
  },
  {
    round: 10,
    component: <Bahrain />,
    name: "British Grand Prix",
  },
  {
    round: 11,
    component: <Bahrain />,
    name: "Austria Grand Prix",
  },
  {
    round: 12,
    component: <Bahrain />,
    name: "France Grand Prix",
  },
  {
    round: 13,
    component: <Bahrain />,
    name: "Hungary Grand Prix",
  },
  {
    round: 14,
    component: <Bahrain />,
    name: "Belgium Grand Prix",
  },
  {
    round: 15,
    component: <Bahrain />,
    name: "Netherlands Grand Prix",
  },
  {
    round: 16,
    component: <Bahrain />,
    name: "Italy Grand Prix",
  },
  {
    round: 17,
    component: <Bahrain />,
    name: "Singapore Grand Prix",
  },
  {
    round: 18,
    component: <Bahrain />,
    name: "Japan Grand Prix",
  },
  {
    round: 19,
    component: <Bahrain />,
    name: "United States Grand Prix",
  },
  {
    round: 20,
    component: <Bahrain />,
    name: "Mexico Grand Prix",
  },
  {
    round: 21,
    component: <Bahrain />,
    name: "Brazil Grand Prix",
  },
  {
    round: 22,
    component: <Bahrain />,
    name: "Abu Dhabi Grand Prix",
  },
];

export class GrandPrixMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: null,
    };
    this.selectGrandPrix = this.selectGrandPrix.bind(this);
  }
  selectGrandPrix(event) {
    let round = event.target.closest("div.grandprix-menu__item").dataset.round;
    let selectedIndex = event.target.closest("div.grandprix-menu__item").dataset
      .index;
    this.setState({ selectedIndex: selectedIndex });
    this.props.onSelectGrandPrix(round);
  }

  render() {
    return (
      <div className="grandprix-menu">
        {options.map((grandprix, i) => {
          return (
            <div
              className="grandprix-menu__item"
              key={i}
              data-index={i}
              data-round={grandprix.round}
              onClick={this.selectGrandPrix}
            >
              <div
                className="marker"
                style={{
                  visibility:
                    this.state.selectedIndex == i ? "visible" : "hidden",
                }}
              ></div>
              {grandprix.component}
              <div className="wrapper">
                <div className="round">
                  round {grandprix.round}/{options.length}
                </div>
                <div className="name">{grandprix.name}</div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
