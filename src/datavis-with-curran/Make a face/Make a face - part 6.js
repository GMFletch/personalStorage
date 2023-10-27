import React from 'react';
import ReactDOM from 'react-dom';
import { range } from 'd3';
import { Face } from './Face';

const width = 160;
const height = 166;

const faceArray = range(6 * 3);

console.log(faceArray);

const App = () =>
  faceArray.map(() => (
    <Face
      width={width}
      height={height}
      centerX={width / 2}
      centerY={height / 2}
      strokeWidth={6 + Math.random() * 3}
      eyeOffsetX={20 + Math.random() * 9}
      eyeOffsetY={20 + Math.random() * 15}
      eyeRadius={5 + Math.random() * 10}
      mouthWidth={7 + Math.random() * 9}
      mouthRadius={30 + Math.random() * 10}
    />
  ));

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
