import React from 'react';
import SkillsParallax from './SkillsParallax';

const Skills = (props) => {
    return (
        <div className="skills" id={props.id}>
            <div className="content-container">
                    <div className="section-heading">
                        <h1>Skills</h1>
                    </div>
                    <SkillsParallax />
                    
            </div>
        </div>
    )

}

export default Skills;