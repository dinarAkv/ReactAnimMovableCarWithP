import React from "react";
import { render } from "react-dom";

import Car from "./Car";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      phi: 10,
      l: 0.5,
      speed: 0.5,
      targetSpeed: 0,
      prevTime: 0
    };
    //requestAnimationFrame(this.repeatedAnim);
  }

  repeatedAnim = time => {
    const phi = this.state.phi;
    const l = this.state.l;
    const speed = this.state.speed;
    this.setState({
      l: l + speed
    });
    requestAnimationFrame(this.repeatedAnim);
  };

  render() {
    return (
      <div style={styles}>
        Test movable car
        <Car targetPos={500} />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
