import React from 'react';
import Changing from './BackgroundChanging.js';

// represents the initial background component
class Background extends React.Component {
  // This is to set it so that the header doesn't ccover part of the about section
    workClick = () => {
        const aboutHeight = document.getElementById('about').offsetTop;
        const headerHeight = document.getElementById('header').offsetHeight;
        window.scrollTo(0, aboutHeight - headerHeight);
    };

    componentDidMount = () => {
        Changing();
    }
    render() {
        return (
            <div className="main-container">
                <canvas id="main-canvas"></canvas>
                <h1 className="main-title">Alex Pham</h1>
                <button className="main-button" onClick={this.workClick}>View my work</button>
            </div>
        );
    } 
}

export default Background;
