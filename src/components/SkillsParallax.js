import React from 'react';
import Parallax from 'parallax-js';
class SkillsParallax extends React.Component {
    componentDidMount() {
        const scene = document.getElementById('scene');
        new Parallax(scene);
    }
    render() {
        return(
            <div id="scene" className="parallax-scene" data-calibrate-x="true" data-calibrate-y="true">
                <div className="layer" data-depth="0.1">
                    <div className="sun-position">
                        <img src={require('../images/sun.svg')} className="cloud x1 cloud-shadow" alt="frontend"></img> 
                    </div>
                </div>
                <div className="layer" data-depth="0.8">
                    <div className="cloud-position-1">
                        <img src={require('../images/cloud-backend.svg')} className="cloud x1 cloud-shadow" alt="frontend"></img>
                    </div>
                </div>
                
                <div className="layer" data-depth="0.2">
                    <div className="cloud-position-3">
                        <img src={require('../images/cloud-services.svg')} className="cloud x3 cloud-shadow" alt="databases"></img>
                    </div>
                    
                </div>
                <div className="layer" data-depth="0.6">
                    <div className="cloud-position-4">
                        <img src={require('../images/cloud-databases.svg')} className="cloud x2 cloud-shadow" alt="backend"></img>
                    </div>
                </div>
                <div className="layer" data-depth="0.9">
                    <div className="cloud-position-2">
                        <img src={require('../images/cloud-frontend.svg')} className="cloud cloud-shadow" alt="services"></img>
                    </div>
                </div>
                <div className="layer" data-depth="1.5">
                    <div className="bird-position">
                        <img src={require('../images/hummingbird.svg')} className="cloud x1 cloud-shadow" alt="frontend"></img> 
                    </div>
                </div>
            </div>
            
        )
    }
}


export default SkillsParallax;