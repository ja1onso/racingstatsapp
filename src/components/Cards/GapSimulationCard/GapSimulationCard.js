import React from "react";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/src/all";

import "./GapSimulationCard.scss";

export class GapSimulationCard extends React.Component {
  renderPoint() {
    let point = document.getElementById("p1");
    console.log(
      "a",
      point.querySelector("animateMotion mpath").getAttribute("xlinkHref")
    );
    point
      .querySelector("animateMotion mpath")
      .setAttribute("xlinkHref", "#track");
  }
  render() {
    return (
      <div className="gapSimulationCard">
        <div className="gapSimulationCard__title">
          <div>Winner's gap</div>
          <div
            className="info"
            onClick={this.animate}
          >
            Gap simulation relative to one lap and race time.
          </div>
        </div>
        <div className="gapSimulationCard__wrapper">
          <svg
            className="gapSimulationCard__svg"
            width="514"
            height="361"
            viewBox="0 0 514 361"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="track"
              d="M312.47 337.37C218.296 332.557 29.1129 325.036 29.1129 325.036C26.0526 323.901 13.2175 318.632 17.597 311.505C20.66 306.351 26.6887 303.239 30.5296 298.572C37.1418 291.182 38.4059 280.923 36.607 271.54C32.9119 259.774 28.0014 248.154 28.1473 235.611C29.6058 214.17 34.3219 192.777 38.6489 171.774L39.7017 166.055C45.7689 133.097 51.8432 100.1 58.0479 67.1461C59.8954 57.1306 61.6943 46.8721 63.6877 36.8566C65.5838 20.2775 76.7175 12.7902 92.3728 20.2775C103.895 25.1881 108.417 38.2665 115.418 47.7472C124.753 60.3881 136.567 70.9384 148.965 80.4677C165.885 90.6291 184.019 97.0954 186.013 119.655C186.013 128.163 183.533 136.671 185.186 145.082C188.055 163.898 203.467 177.511 219.122 186.7C230.207 193.75 242.508 199.389 251.843 208.919C260.205 216.746 253.982 227.443 243.772 228.707C234.583 230.165 225.297 226.081 216.302 224.671C199.043 219.955 181.394 217.038 163.794 213.781C139.241 208.724 107.396 203.911 90.2822 226.713C86.6358 230.311 84.8855 237.507 89.0667 241.25C93.7341 244.751 99.7629 244.8 105.208 245.675C115.126 247.133 125.142 248.154 135.109 248.883C174.101 252.967 213.726 253.162 253.058 254.961C276.736 255.69 300.51 257.003 324.139 258.607C339.503 257.829 357.832 264.442 371.008 254.183C388.462 237.507 378.446 206.731 359.728 195.208C346.358 185.144 328.904 182.908 315.29 173.378C284.466 153.202 284.223 117.418 300.364 87.323C306.296 74.7793 312.908 58.5406 327.008 53.7759C334.884 49.9837 344.364 51.6367 351.22 56.5959C361.332 64.2776 365.076 76.9185 371.397 87.2744C385.788 114.695 401.492 141.582 416.223 168.857C434.844 202.696 454.049 236.34 472.767 270.227C477.921 279.805 483.512 289.48 488.908 298.912C492.701 305.768 497.465 312.866 496.59 321.131C490.075 352.247 438.442 342.378 415.008 342.523C380.909 340.775 346.617 340.433 312.566 337.378"
              stroke="white"
              strokeWidth="4"
              strokeMiterlimit="3.3231"
            />
            <circle
              id="p1"
              r="12"
              fill="none"
              stroke="red"
              strokeWidth="3"
            >
              <animateMotion
                dur="5.2s"
                repeatCount="indefinite"
              >
                <mpath xlinkHref="#track" />
              </animateMotion>
            </circle>
            <circle
              id="p1"
              r="12"
              fill="none"
              stroke="red"
              strokeWidth="3"
            >
              <animateMotion
                dur="5s"
                repeatCount="indefinite"
              >
                <mpath xlinkHref="#track" />
              </animateMotion>
            </circle>
            <circle
              id="p1"
              r="12"
              fill="none"
              stroke="red"
              strokeWidth="3"
            >
              <animateMotion
                dur="5.5s"
                repeatCount="indefinite"
              >
                <mpath xlinkHref="#track" />
              </animateMotion>
            </circle>
          </svg>
          <div>
            <button onClick={this.renderPoint}>LEC</button>
            <button>SAI</button>
            <button>HAM</button>
          </div>
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
