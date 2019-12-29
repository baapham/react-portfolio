import React from 'react';
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';
import {isMobile} from 'react-device-detect';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentScrollHeight: 0,
            warning: false
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
                this.setState({ warning: true});
                let notification;
                if (isMobile) {
                    notification = 'Tilt your device! No tilting for iOS 12+, tap instead.'
                }
                else {
                    notification = 'Move your mouse around!'
                }
                store.addNotification({
                    message: notification,
                    type: 'info',                         
                    container: 'top-center',              
                    animationIn: ["animated", "flipInX"], 
                    animationOut: ["animated", "flipOutX"],
                    dismiss: {
                      duration: 5000 
                    }
                  })
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