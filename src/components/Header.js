import React from 'react';
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentScrollHeight: 0,
            // displays the warning only in a certain range and ensure that it only gets displayed once in this range
            warning: false,
            // displays the notification only once
            once: false
        }
    }
    componentDidMount () {      
        window.onscroll = () => {
            this.setState({currentScrollHeight: window.scrollY})
            let currHeight = this.state.currentScrollHeight;
            const skillsSection = document.getElementById('skills');
            let belowTop = (currHeight > skillsSection.offsetTop);
            let aboveBot =(currHeight < (skillsSection.offsetHeight + skillsSection.offsetTop)); 
            if (belowTop && aboveBot && !this.state.warning) {
                this.setState({ warning: true})
                if (!this.state.once){
                    store.addNotification({
                        message: 'Move your mouse or tilt your phone (tap instead for iPhones)',
                        type: 'info',                         
                        container: 'bottom-center',              
                        animationIn: ["animated", "flipInX"], 
                        animationOut: ["animated", "flipOutX"],
                        dismiss: {
                          duration: 5000 
                        }
                    })
                    this.setState({ once: true})
                }
                
            }
            else if (this.state.warning && (!belowTop || !aboveBot)) {
                this.setState({ warning: false})
            }
        }
    }

    handleScrollTop = () => {
        window.scrollTo(0, 0);
    };

    handleScrollAbout = () => {
        const aboutHeight = document.getElementById('about').offsetTop;
        const headerHeight = document.getElementById('header').offsetHeight;
        window.scrollTo(0, aboutHeight - headerHeight);
    };

    handleScrollProjects = () => {
        const projectHeight = document.getElementById('projects').offsetTop;
        const headerHeight = document.getElementById('header').offsetHeight;
        window.scrollTo(0, projectHeight - headerHeight);
    };

    render() {
        return (
            <header id="header" className={this.state.currentScrollHeight > 100 ? "header-moving" : "header-top"}>
                <div className="content-container">
                    <div className = "header-container">
                        <button onClick={this.handleScrollTop} className={this.state.currentScrollHeight > 100 ? "button-logo-moving" : "button-logo-top"}>AP</button>
                        <div className="header__links">
                            <button onClick={this.handleScrollAbout} className={this.state.currentScrollHeight > 100 ? "button-subtitle-moving" : "button-subtitle-top"}>About</button>
                            <button onClick={this.handleScrollProjects} className={this.state.currentScrollHeight > 100 ? "button-subtitle-moving" : "button-subtitle-top"}>Projects</button>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
} 

export default Header;