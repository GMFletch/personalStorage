import React from 'react';
import ReactDOM from 'react-dom';

const width = 960;
const height = 500;
const centerX = width / 2;
const centerY = height / 2;
const strokeWidth = 10;
const eyeOffsetX = 90;
const eyeOffsetY = 90;
const eyeRadius = 50;

const App = () => {
  return (
    <svg width={width} height={height}>
      <circle
        cx={centerX}
        cy={centerY}
        r={centerY - strokeWidth}
        fill="yellow"
        stroke="black"
        stroke-width={strokeWidth}
      />
      <circle
        cx={centerX - eyeOffsetX}
        cy={centerY - eyeOffsetY}
        r={eyeRadius}
      />
      <circle
        cx={centerX + eyeOffsetX}
        cy={centerY - eyeOffsetY}
        r={eyeRadius}
      />
    </svg>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
