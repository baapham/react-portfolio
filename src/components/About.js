import React from 'react';

const About = (props) => (
    <div id={props.id}>
        <div className="about-main">
            <div className="content-container">
            <h2>About Me</h2>
            <h3><i>Hey, I'm Alex</i></h3>
            <p>I am currently a 3rd year UNSW student studying a double degree of Computer Science and Commerce (Finance).
                In real life, I like to fiddle a lot, from shaking my leg to tapping my fingers - you name it, I do it. Does that make me annoying?
                <b>Maybe.</b> I tried to make the most out of this habit by crafting an interactive portfolio website that you can fiddle with - play with the background, swing your mouse around,
                do whatever your heart desires!
            </p>
            <h3><i>My Origin Story</i></h3>
            <p>I was born in <strike>Gotham City</strike> <b>Sydney</b> and was first exposed to computers at an early age. My love of programming only really started
            at the age 12 when <b>Minecraft</b> was released. From here it only grew stronger when I went on to play <b>Call of Duty: Modern Warfare</b> - I was able to 
            help host one of the biggest Australian servers at that time (to be fair there was only about 5 Aussie servers) and form my own gaming clans with their own websites.
            </p>

            <p>After this, in Year 10 I competed in a <b>Python Coding Competition</b> and enjoyed it so much I decided to put my self a few thousand in debt
            and get a Computer Science degree.</p>

        </div>
        </div>
    </div>
);

export default About;