import React from "react";

let totalPhi = 0; // when l prop is known.

const findPhi = (l, R) => {
  totalPhi = totalPhi + (l / (2 * Math.PI * R) * 360) % 360;
  return totalPhi % 360;
};

const Wheel = ({ x, y, r, phi, l }) => {
  const outerCircleRad = 94.954338;
  const wheelCenterX = 270.72089;
  const wheelCenterY = 393.74274;
  const scaleFactor = r / outerCircleRad;

  const shifting = {
    x: (1 - scaleFactor) * (x + wheelCenterX),
    y: (1 - scaleFactor) * (y + wheelCenterY)
  };
  const transformScale = `translate(${shifting.x} ${
    shifting.y
  }) scale(${scaleFactor})`; //
  const rotateAngle = phi || findPhi(l, outerCircleRad * scaleFactor);

  const transformRotate = `rotate(${rotateAngle} ${wheelCenterX +
    x} ${wheelCenterY + y})`;

  return (
    <div style={{ position: "absolute" }}>
      <svg width="1000" height="1000" viewBox="0 0 1000 1000">
        <g transform={transformRotate}>
          <g transform={transformScale}>
            <svg x={x} y={y}>
              <circle
                id="outerBound"
                cy={wheelCenterY}
                cx={wheelCenterX}
                r={outerCircleRad}
                fill="white"
                stroke="black"
                strokeWidth="7"
              />
              <path
                d="m 174.75639,394.7529 c 193.94929,0 190.91883,-1.01016 190.91883,-1.01016"
                id="vertLine"
                stroke="black"
                strokeWidth="7"
              />
              <path
                d="m 269.71073,487.68693 c 0,-188.89233 1.01015,-185.86807 1.01015,-185.86807"
                id="horLine"
                stroke="black"
                strokeWidth="7"
              />
              <circle
                id="innerBound"
                cx="270.72089"
                cy="393.74274"
                r="42.426407"
                stroke="black"
                strokeWidth="7"
                fill="hsla(0, 100%, 100%,0.99)"
              />
            </svg>
          </g>
        </g>
      </svg>
    </div>
  );
};

export default Wheel;
