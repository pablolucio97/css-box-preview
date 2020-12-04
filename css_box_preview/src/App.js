import React, {useState} from 'react';
import {Divider} from '@material-ui/core'

import './styles/index.css'


function App() {

  const [width, setWidth] = useState(100)
  const [height, setHeight] = useState(100)
  const [rotation, setRotation] = useState(20)
  const [border, setBorder] = useState (0)
  const [opacity, setOpacity] = useState (.5)


  return  (
    <div className="main-container">
      <div id="box-container">
        <div id="box" 
        style={{
          width: width,
          height: height,
          transform:  'rotate(' + rotation + 'deg)',
          borderRadius: border,
          opacity: opacity
        }}
        
        ></div>
      </div>
      <div id="options-container">
        <div className="style-container">
          <h4>Dimmensions</h4>
          <p>Width</p>
            <input type="range"
            min='0'
            max='200'
            step='2'
            value={width}
            onChange={(event) => {
              setWidth(Number(event.target.value))
            }}
            />
          <p>Height</p>
            <input type="range"
            min='2'
            max='200'
            step='2'
            value={height}
            onChange={(event) => {
              setHeight(Number(event.target.value))
            }}
            />
        </div>
        <Divider orientation='vertical' style={{width: 1, height: 250, marginTop: 12}}/>
        <div className="style-container">
          <h4>Rotation</h4>
            <input type="range"
            min='0'
            max='360'
            step='2'
            value={rotation}
            onChange={(event) => {
              setRotation(Number(event.target.value))
            }}
            />
        </div>
        <Divider orientation='vertical' style={{width: 1, height: 250, marginTop: 12}}/>
        <div className="style-container">
          <h4>Radius</h4>
          <input type="range"
          min='0'
          max='100'
          step='1'
          value={border}
          onChange={(event) => {
            setBorder(Number(event.target.value))
          }}
          />
        </div>
        <Divider orientation='vertical' style={{width: 1, height: 250, marginTop: 12}}/>
      <div className="style-container">
          <h4>Opacity</h4>
          <input
            type='range'
            min='.1'
            max='1'
            step='.1'
            defaultValue={opacity}
            onChange={(event) => {
              setOpacity(Number(event.target.value));
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;