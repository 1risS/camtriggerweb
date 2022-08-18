import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
import Sketch from "react-p5";

function App() {
  const capture = 0;

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(500, 400).parent(canvasParentRef)
    capture = p5.createCapture(p5.VIDEO);
    capture.size(320, 240);
  }

  const draw = p5 => {
    p5.background(255);
    p5.image(capture, 0, 0, 320, 240);
    capture.loadPixels();

    let withRatio = capture.width / width;
    let heightRatio = capture.height / height;

  }

  return <Sketch setup={setup} draw={draw} />
}

export default App
