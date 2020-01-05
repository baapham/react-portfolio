import React from 'react';
import Changing from './BackgroundChanging.js';
import NameAnimation from './NameAnimation';
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
                <div className="main-info">
                    <div className="main-header">
                        <NameAnimation />
                    </div>
                </div>
                <button className="main-button" onClick={this.workClick}>View my work</button>
                
            </div>
        );
    } 
}

export default Background;
