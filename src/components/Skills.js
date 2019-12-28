import React from 'react';
import SkillsParallax from './SkillsParallax';

class Skills extends React.Component {
    render() {
        return (
            <div className="skills">
                <div className="content-container">
                    {/* <div className="skills-content"> */}
                        <div className="section-heading">
                            <h1>Skills</h1>
                        </div>
                        <SkillsParallax />
                        
                    {/* </div> */}
                </div>
            </div>
        )
    }
}

export default Skills;