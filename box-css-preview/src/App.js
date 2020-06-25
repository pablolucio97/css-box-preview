import React, {useState} from 'react';
import {Divider, Slider, Button} from '@material-ui/core'
import './styles/styles.css'

function App() {

  const [width, setWidth] = useState(100)
  const [height, setHeight] = useState(100)
  const [rotation, setRotation] = useState(0)
  const [border, setBorder] = useState (0)
  const [opacity, setOpacity] = useState (.5)

  //SET WIDTH
  
  const increaseWidth = () => {
  const getBox = document.getElementById('box')
  const newWidth = setWidth(width + 5)
  getBox.style.width = newWidth
}

const decreaseWidth = () => {
  const getBox = document.getElementById('box')
  const newWidth = setWidth(width - 5)
  getBox.style.width = newWidth
}

//SET HEIGHT

const increaseHeight = () =>{
  const getBox = document.getElementById('box')
  const newHeight = setHeight(height + 5)
  getBox.style.height = newHeight
}

const decreaseHeight = () => {
  const getBox = document.getElementById('box')
  const newHeight = setHeight(height -5)
  getBox.style.height = newHeight
}


//HANDLE BORDER

const increaseBorder = () => {
  const getBox = document.getElementById('box')
  const newBorder = setBorder(border + 5)
  getBox.style.borderRadius = newBorder
}

const decreaseBorder = () => {
  const getBox = document.getElementById('box')
  const newBorder = setBorder(border - 5)
  getBox.style.borderRadius = newBorder
}

  return  (
    <div className="main-container">
      <div id="box-container">
        <div id="box" 
        style={{
          width: width,
          height: height,
          rotate: rotation +'deg',
          borderRadius: border,
          opacity: opacity
        }}
        
        ></div>
      </div>
      <div id="options-container">
        <div className="style-container">
          <h4>Dimmensions</h4>
          <p>Width</p>
          <Button variant='contained' style={{margin: 10}} onClick={increaseWidth}>+</Button>
          <Button variant='contained' style={{margin: 10}} onClick={decreaseWidth}>-</Button>
          <p>Height</p>
          <Button variant='contained' style={{margin: 10}} onClick={increaseHeight}>+</Button>
          <Button variant='contained' style={{margin: 10}} onClick={decreaseHeight}>-</Button>
        </div>
        <Divider orientation='vertical' style={{width: 1, height: 250, marginTop: 12}}/>
        <div className="style-container">
          <h4>Rotation</h4>
            <input type="range" name="handle-rotation" id="handle-rotation"
            min='0'
            max='360'
            defaultValue='0'
            onChange={(event) => {setRotation(Number(event.target.value))}}
            />
        </div>
        <Divider orientation='vertical' style={{width: 1, height: 250, marginTop: 12}}/>
        <div className="style-container">
          <h4>Radius</h4>
          <Button variant='contained' style={{margin: 10}} onClick={increaseBorder}>+</Button>
          <Button variant='contained' style={{margin: 10}} onClick={decreaseBorder}>-</Button>
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
