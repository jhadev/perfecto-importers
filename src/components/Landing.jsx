import React, { Component } from 'react';

const background =
  'https://images.pexels.com/photos/1410138/pexels-photo-1410138.jpeg?cs=srgb&dl=blueberries-bunch-close-up-1410138.jpg&fm=jpg';

const row = {
  display: 'flex'
};

const columnOne = {
  display: 'flex',
  width: '50%',
  height: '92vh',
  backgroundImage: `url(${background})`,
  backgroundSize: 'cover',
  justifyContent: 'center',
  alignItems: 'center'
};

const columnTwo = {
  display: '50%',
  width: '50%',
  height: '92vh'
};

class Landing extends Component {
  render() {
    return (
      <div style={row}>
        <div style={columnOne}>
          <h1 style={{ transform: 'rotate(-10deg)' }}>BUY OUR WINE</h1>
        </div>
        <div style={columnTwo}>
          <h1>I AM ON THE RIGHT SIDE AND I WANT TO BE 3 COLUMNS TELLING YOU WHY, WHERE, AND HOW</h1>
        </div>
      </div>
    );
  }
}

export default Landing;
