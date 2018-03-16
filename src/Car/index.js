import React from "react";
import PropTypes from "prop-types";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Toggle from "material-ui/Toggle";

import Wheel from "../Wheel/index";

const positionRegulatorP = (t, t0, targetPos, currentPos) => {
  const delta = Math.min(20, t - t0);
  const P = 0.001 * delta;
  const newPos = P * (targetPos - currentPos);
  return newPos;
};

class Car extends React.Component {
  static propTypes = {
    targetPos: PropTypes.number
  };

  constructor(props) {
    super(props);

    this.state = {
      x: 0,
      targetPos: 0,
      isAnimate: false
    };

    this.previousTime = 0;
    this.v = 0;
  }

  repeatedAnim = time => {
    const { isAnimate, x } = this.state;

    const targetPos = this.state.targetPos || this.props.targetPos;

    this.v = positionRegulatorP(
      time,
      this.previousTime,
      targetPos,
      this.state.x
    );

    this.previousTime = time;

    if (isAnimate) {
      this.setState({
        x: x + this.v
      });
      requestAnimationFrame(this.repeatedAnim);
    }
  };

  setToInitState = () => {
    this.setState({
      x: 0
    });
  };

  animathionSwitch = e => {
    const toggleBtnState = e.target.checked;
    this.setState({
      isAnimate: toggleBtnState
    });
    if (toggleBtnState) {
      requestAnimationFrame(this.repeatedAnim);
    }
  };

  onChangeTargetPos = e => {
    this.setState({
      targetPos: e.target.value
    });
  };

  render() {
    const x = this.state.x;
    const v = this.state.isAnimate ? this.v : 0;

    return (
      <div>
        <MuiThemeProvider>
          <Toggle label="animation" onToggle={this.animathionSwitch} />
        </MuiThemeProvider>
        <button
          onClick={this.setToInitState}
          style={{
            textAlign: "center",
            display: "block",
            width: "150px",
            margin: "auto"
          }}
        >
          Set to init state
        </button>
        <input
          type="number"
          placeholder="Set target position"
          onChange={this.onChangeTargetPos}
          style={{
            textAlign: "center",
            display: "block",
            width: "150px",
            margin: "auto"
          }}
        />
        <Wheel x={-233 + x} y={-338} r={10} l={v} />
        <Wheel x={-149 + x} y={-338} r={10} l={v} />
        <svg height="600" id="Shape_1_5_" viewBox="0 0 1000 600" width="1000">
          <g transform={`translate(${x}, 0)`}>
            <g transform="scale(0.15)">
              <path d="M251.99,369.532c-3.653,0-6.615,2.962-6.615,6.615s2.962,6.615,6.615,6.615s6.615-2.962,6.615-6.615
                c-0.244,0.682-0.52,1.349-0.826,1.997l16.058,16.058c3.744-5.276,6.354-11.413,7.482-18.055H832.402z M937.276,292.157
                c-9.801-15.004-34.896-20.235-54.012-26.477c-133.488-32.242-177.882-21.747-200.162-24.888
                c-4.495-1.199-8.503-5.123-12.179-7.413c-8.057-5.019-16.418-9.434-24.358-14.298c-13.119-8.036-73.653-41.146-90.02-47.128
                c-35.963-13.142-92.818-23.68-229.815-12.708c-5.56-1.528-8.916-6.016-14.826-7.414c-5.846-1.383-11.214,1.693-15.356,2.648
                c0.075,4.491-0.326,8.136-1.059,11.649c-26.775,11.291-53.869,19.953-80.488,31.242c-11.108,4.711-22.569,9.32-33.89,14.297
                c-7.042,3.097-13.77,7.495-21.71,10.062c-8.624,2.786-18.051,1.527-27.536,3.706c-17.267,3.967-35.99,4.497-55.071,4.766
                c-2.181,3.738-5.977,7.503-6.884,12.18c3.305,1.02,4.412,3.298,4.236,7.942c-5.84,8.653-4.274,20.981-4.236,34.949
                c-12.441,6.37-14.333,29.711-11.12,48.187c-0.353,1.589-0.706,3.178-1.059,4.767c0.665,5.223,2.365,10.742,2.647,16.415
                c4.672,3.133,9.968,8.167,13.238,12.709c1.595,2.215,2.371,6.033,5.295,6.884c15.631,11.41,94.785,13.768,94.785,13.768
                l4.164,0.228c-0.637-3.934-0.973-7.969-0.973-12.082c0-41.478,33.625-75.102,75.102-75.102c41.478,0,75.102,33.624,75.102,75.102
                c0,6.966-0.952,18.277-2.728,24.678l416.073-0.736c-2.527-7.52-3.898-15.57-3.898-23.941c0-41.478,33.624-75.102,75.102-75.102
                s75.102,33.624,75.102,75.102c0,7.27-1.036,14.297-2.964,20.945l4.252-0.089c0,0,32.779-1.584,40.773-5.296
                c7.994-3.711,11.12-14.297,11.12-14.297l-2.118-22.24C937.806,355.171,947.652,308.042,937.276,292.157z M272.719,237.621
                c-24.887-16.535-11.702-35.842-12.373-35.781c-0.398,0.354-0.685,0.636-0.865,0.827c0.528-0.559,0.788-0.82,0.865-0.827
                c6.412-5.714,43.006-31.271,172.82-31.474c4.06,22.768,8.12,52.68,12.179,75.446C393.112,244.229,290.3,245.112,272.719,237.621z
                M607.381,246.088c-11.408,0-124.969-0.031-124.969-0.031s-18.331-48.33-24.887-75.157c0.763,0.07,23.298,1.055,23.298,1.055
                s44.613,5.079,72.546,14.298c21.976,7.253,65.363,36.403,66.19,38.126C606.506,225.047,603.416,235.329,607.381,246.088z
              " />
            </g>
          </g>
        </svg>
      </div>
    );
  }
}

export default Car;
