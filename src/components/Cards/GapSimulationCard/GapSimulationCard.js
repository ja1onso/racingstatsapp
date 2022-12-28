import React from "react";
import { AlbertPark } from "../../Circuits/AlbertPark";
import { Americas } from "../../Circuits/Americas";
import { Bahrain } from "../../Circuits/Bahrain";
import { Baku } from "../../Circuits/Baku";
import { Catalunya } from "../../Circuits/Catalunya";
import { Hungaroring } from "../../Circuits/Hungaroring";
import { Imola } from "../../Circuits/Imola";
import { Interlagos } from "../../Circuits/Interlagos";
import { Jeddah } from "../../Circuits/Jeddah";
import { MarinaBay } from "../../Circuits/MarinaBay";
import { Miami } from "../../Circuits/Miami";
import { Monaco } from "../../Circuits/Monaco";
import { Monza } from "../../Circuits/Monza";
import { RedBullRing } from "../../Circuits/RedBullRing";
import { Ricard } from "../../Circuits/Ricard";
import { Rodriguez } from "../../Circuits/Rodriguez";
import { Silverstone } from "../../Circuits/Silverstone";
import { Spa } from "../../Circuits/Spa";
import { Suzuka } from "../../Circuits/Suzuka";
import { Villeneuve } from "../../Circuits/Villeneuve";
import { YasMarina } from "../../Circuits/YasMarina";
import { Zandvoort } from "../../Circuits/Zandvoort";

import "./GapSimulationCard.scss";

const trackComponentMapping = {
  albert_park: <AlbertPark />,
  americas: <Americas />,
  bahrain: <Bahrain />,
  baku: <Baku />,
  catalunya: <Catalunya />,
  hungaroring: <Hungaroring />,
  imola: <Imola />,
  interlagos: <Interlagos />,
  jeddah: <Jeddah />,
  marina_bay: <MarinaBay />,
  miami: <Miami />,
  monaco: <Monaco />,
  monza: <Monza />,
  red_bull_ring: <RedBullRing />,
  ricard: <Ricard />,
  rodriguez: <Rodriguez />,
  silverstone: <Silverstone />,
  spa: <Spa />,
  suzuka: <Suzuka />,
  villeneuve: <Villeneuve />,
  yas_marina: <YasMarina />,
  zandvoort: <Zandvoort />,
};

export class GapSimulationCard extends React.Component {
  render() {
    return (
      <div className="gapSimulationCard">
        <div className="gapSimulationCard__title">
          <div>Qualifying’s gap </div>
          <div className="info">Gap simulation relative to Q3 times.</div>
        </div>
        <div className="gapSimulationCard__wrapper">
          {trackComponentMapping[this.props.circuitId]}
        </div>
      </div>
    );
  }

  // Default props
  static defaultProps = {
    turns: "N/A",
    distance: "N/A",
  };
}
