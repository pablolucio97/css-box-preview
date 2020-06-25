import React, {useState} from 'react';
import {Divider, Slider, Button} from '@material-ui/core'
import './styles/styles.css'
import InputRange from 'react-input-range';

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


//SET ROTATION 

const rotationRight = () => {
  const getBox = document.getElementById('box')
  const newRotation = setRotation(rotation + 5)
  getBox.style.rotate = newRotation
}

const rotationLeft = () => {
  const getBox = document.getElementById('box')
  const newRotation = setRotation(rotation - 5)
  getBox.style.rotate = newRotation
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

//HANDLE OPACITY

const increaseOpacity= () => {
  const getBox = document.getElementById('box')
  const newOpacity = setOpacity(opacity + .1)
  getBox.style.borderRadius = newOpacity
}

const decreaseOpacity = () => {
  const getBox = document.getElementById('box')
  const newOpacity = setOpacity(opacity - .1)
  getBox.style.borderRadius = newOpacity
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
          <Button variant='contained' style={{margin: 10}} onClick={rotationRight}>+</Button>
          <Button variant='contained' style={{margin: 10}} onClick={rotationLeft}>-</Button>
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
          <Button variant='contained' style={{margin: 10}} onClick={increaseOpacity}>+</Button>
          <Button variant='contained' style={{margin: 10}} onClick={decreaseOpacity}>-</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
