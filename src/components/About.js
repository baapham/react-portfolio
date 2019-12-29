import React from 'react';

const About = (props) => (
    <div  className="about">
        <div className="about-main" id={props.id}>
            <div className="content-container">
                <div className="about-all">
                    <div className="section-heading--about" >
                        <h1>About Me</h1>
                    </div>
                    <h3><i>Hi, I'm Alex</i></h3>
                    <p>I currently am in my 3rd year of university (UNSW) studying a double degree of Computer Science and Commerce (Finance).
                        In real life, I like to fiddle a lot, from shaking my leg to tapping my fingers - you name it, I do it. Does that make me annoying?
                        <b> Maybe.</b> I tried to make the most out of this habit by crafting an interactive portfolio website that you (and I) can fiddle with - play with the background, swing your mouse around,
                        do whatever your heart desires!
                    </p>
                    <h3><i>Where I'm From</i></h3>
                    <p>I am a Vietnamese Australian born in <b>Sydney</b> and was first exposed to computers at an early age through flash games. My love of programming only really started
                    at the age 12 when <b>Minecraft</b> was released, it introduced me to the basics of server hosting and Java. From here it only grew stronger when I went on to play <b>Call of Duty: Modern Warfare</b> - I was able to 
                    help host one of the biggest Australian servers at that time (to be fair there were only about 5 Aussie servers) and develop websites for my gaming clans.
                    After this, in Year 10 I competed in a <b>Python Coding Competition</b> and enjoyed it so much I decided to put my self a few thousand in debt and get a Computer Science degree.
                    </p>
                    <h3><i>Where I'm Headed</i></h3>
                    <p>I am at an early stage in my career so I'm keen on gaining experience in <b>all</b> fields of software engineering, however, I've grown to love <b>front end development</b>.
                    There's something satisfying about being able to make changes to code and instantly seeing it reflected on a web page for everyone to see.
                    </p> 
                    <h3><i>Work Experience</i></h3>
                    <div className="experience-container">
                        <div className="experience-item">
                            <a rel="noopener noreferrer" href="https://www.mastercard.com.au/" target="_blank"><img src={require("../images/mastercard.svg")} alt="mastercard" /></a>
                        </div>
                        <div className="experience-item">
                            <a rel="noopener noreferrer" href="https://www.unsw.edu.au/" target="_blank"><img src={require("../images/unsw.svg")} alt="UNSW" /></a>
                        </div>
                        <div className="experience-item">
                            <a rel="noopener noreferrer" href="https://www.menith.com/" target="_blank"><img src={require("../images/menith.svg")} alt="menith" /></a>
                        </div>
                        <div className="experience-item">
                            <a rel="noopener noreferrer" href="https://yabonza.com/" target="_blank"><img src={require("../images/yabonza.svg")} alt="yabonza" /></a>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
        
    </div>
);

export default About;