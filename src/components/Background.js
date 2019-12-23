import React from 'react';
import Particles from 'react-particles-js';

const particleParam = {
  particles: {
    number: {
      value: 60
    },
    line_linked: {
      number: {
        value: 50,
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
            mode: 'push'
        }
    }
  }
}

class Background extends React.Component {
    render() {
        return (
        <div className="particle-container">
          <div className="particle-content">
              <h1 className="particle-title">Alex Pham</h1>
          </div>
          <Particles
              className="particle-background"
              params={particleParam}
          />  
        </div>)
    } 
}

export default Background;
