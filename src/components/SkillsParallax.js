import React from 'react';
import Parallax from 'parallax-js';
class SkillsParallax extends React.Component {
    componentDidMount() {
        const scene = document.getElementById('scene');
        const parallaxInstance = new Parallax(scene);
        // const scene2 = document.getElementById('scene2');
        // const parallaxInstance2 = new Parallax(scene2);
    }
    render() {
        return(
            <ul id="scene" className="parallax-scene">
                <li className="layer" data-depth="1">
                    <ul className="cloud-position-1">
                        <img src={require('../images/cloud-frontend.svg')} className="cloud"></img>
                    </ul>
                    
                </li>
                <li className="layer" data-depth="0.4">
                    <ul className="cloud-position-2">
                        <img src={require('../images/cloud-services.svg')} className="cloud x2"></img>
                    </ul>
                </li>
                <li className="layer" data-depth="0.4">
                    <ul className="cloud-position-3">
                        <img src={require('../images/cloud-databases.svg')} className="cloud x3"></img>
                    </ul>
                    
                </li>
                <li className="layer" data-depth="0.8">
                    <ul className="cloud-position-4">
                        <img src={require('../images/cloud-backend.svg')} className="cloud x2"></img>
                    </ul>
                </li>
            </ul>
            
        )
    }
}


export default SkillsParallax;