import React from 'react';
import ReactDOM from 'react-dom';
import { range } from 'd3';
import { Face } from './Face';

const width = 166;
const height = 166;

const faceArray = [1, 2, 3, 4, 5];

const App = () =>
  faceArray.map(() => (
    <Face
      width={width}
      height={height}
      centerX={width / 2}
      centerY={height / 2}
      strokeWidth={10}
      eyeOffsetX={30}
      eyeOffsetY={30}
      eyeRadius={10}
      mouthWidth={10}
      mouthRadius={40}
    />
  ));

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
