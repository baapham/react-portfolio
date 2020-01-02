import React from 'react';
import Particles from 'react-particles-js';
import { TriangleBG } from './Triangles.js';
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

    componentDidMount = () => {
      const canvas = document.getElementById("triangle-canvas");
        const altBG = document.getElementById("altBG");
        new TriangleBG({
            canvas : canvas,
            alternateElem : altBG,
            cellHeight : 120,
            cellWidth : 100,
            mouseLight : true,
            mouseLightRadius : 200,
            mouseLightIncrement : 40,
            resizeAdjustment : true,
            variance : 0.9,
            pattern : "y",
            baseColor1 : {
                baseHue : 210,
                baseSaturation : 74.8,
                baseLightness : 58
            },
            baseColor2 : {
                baseHue : 210,
                baseSaturation : 74.8,
                baseLightness : 56
            },
            colorDelta : {
                hue : 2,
                lightness : 0,
                saturation : 0
            }
       });
    }
    render() {
        return (
            <div className="particle-container">
               
            {/* <Particles
                className="particle-background"
                params={particleParam}
            />   */}
                <canvas id="triangle-canvas">
                </canvas>
                <div id="altBG"></div>
                <h1 className="particle-title">Alex Pham</h1>
                <button className="particle-button" onClick={this.workClick}>View my work</button>
            </div>
        );
    } 
}

export default Background;
