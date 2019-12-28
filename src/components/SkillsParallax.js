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
                <li className="layer" data-depth="0.15">
                    <ul className="cloud-position-1">
                        <li className="cloud x1"></li>
                    </ul>
                    
                </li>
                <li className="layer" data-depth="1">
                    <ul className="cloud-position-2">
                        <li className="cloud"></li>
                    </ul>
                    
                </li>
            </ul>
            
        )
    }
}


export default SkillsParallax;