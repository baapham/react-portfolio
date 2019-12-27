import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Parallax } from 'react-scroll-parallax';

class SkillsParallax extends React.Component {
    render() {
        return (
            <ParallaxProvider>
                <Parallax y={[-20, 20]} tagOuter="figure">
                    <img src="../images/github.svg" />
                </Parallax>
            </ParallaxProvider>
        )
    }
}

export default SkillsParallax;