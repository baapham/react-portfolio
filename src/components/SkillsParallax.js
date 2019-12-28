import React from 'react';
import Parallax from 'parallax-js';
class SkillsParallax extends React.Component {
    componentDidMount() {
        const scene = document.getElementById('scene');
        const parallaxInstance = new Parallax(scene);
    }
    render() {
        return(
            <div id="scene" data-relative-input="true" data-clip-relative-input="false">
                <div data-depth="0.2">My first Layer!</div>
                <div data-depth="1">My second Layer!</div>
            </div>
        )
    }
}


export default SkillsParallax;