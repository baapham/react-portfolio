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

// represents the initial background component
class Background extends React.Component {
  // This is to set it so that the header doesn't ccover part of the about section
    workClick = () => {
        const aboutHeight = document.getElementById('about').offsetTop;
        const headerHeight = document.getElementById('header').offsetHeight;
        window.scrollTo(0, aboutHeight - headerHeight);
    };

    render() {
        return (
            <div className="particle-container">
               <h1 className="particle-title">Alex Pham</h1>
               <button className="particle-button" onClick={this.workClick}>View my work</button>
            <Particles
                className="particle-background"
                params={particleParam}
            />  
          </div>
        );
    } 
}

export default Background;
