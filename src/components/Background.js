import React from 'react';
import Particles from 'react-particles-js';

const particleParam = {
  particles: {
    line_linked: {
      number: {
        value: 100,
        density: {
          enable: true,
          value_area: 800
        }
      },
      size: {
        value: 20
      },
    }
  },
  interactivity: {
    events: {
        onhover: {
            enable: true,
            mode: 'grab'   
        },
        onclick: {
            enable: true,
            mode: 'repulse'
        }
    }
  }
}

class Background extends React.Component {
  render() {
      return (
      <div className="particle-container">
        <h1 className="particle-title">Alex Pham</h1>
        <Particles
            className="particle-background"
            params={particleParam}
        />  
      </div>)
  } 
}

export default Background;
