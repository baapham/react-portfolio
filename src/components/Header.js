import React from 'react';


class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentScrollHeight: 0
        }
    }
    componentDidMount () {      
        window.onscroll = () => {
            this.setState({currentScrollHeight: window.scrollY})
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