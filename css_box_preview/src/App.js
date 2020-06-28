import React from 'react';
import {Divider} from '@material-ui/core'

function App() {
  return (
    <div className="main-container">
      <div id="options-container">
        <div className="style-container">
          <h4>Dimmensions</h4>
          <p>Width</p>
          <button>+</button>
          <button>-</button>
          <p>Hieght</p>
          <button>+</button>
          <button>-</button>
        </div>
        <Divider/>
        <div className="style-container">
          <h4>Rotation</h4>
          <p></p>
          <button>+</button>
          <button>-</button>
        </div>
        <Divider/>
        <div className="style-container">
          <h4>Color</h4>
          <input type="range" name="set-color" id="set-color"/>
          
        </div>
        <Divider/>
        <div className="style-container">
          <h4>Border</h4>
          <p></p>
          <button>+</button>
          <button>-</button>
        </div>
        <Divider/>
      </div>
      <div className="style-container">
          <h4>Opacity</h4>
          <p></p>
          <button>+</button>
          <button>-</button>
        </div>
        <Divider/>
    </div>
  );
}

export default App;
