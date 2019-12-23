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
    
    render() {
        return (
            <header className={this.state.currentScrollHeight > 100 ? "header-moving" : "header-top"}>
                <div className="content-container">
                    <div className = "header-container">
                        <div className={this.state.currentScrollHeight > 100 ? "header-title-moving" : "header-title-top"}>
                            <h1><a href="#">AP</a></h1>
                        </div>
                        <div className="header__links">
                            <a href="#about" className={this.state.currentScrollHeight > 100 ? "header-subtitle-moving" : "header-subtitle-top"}>About</a>
                            <a href="#projects" className={this.state.currentScrollHeight > 100 ? "header-subtitle-moving" : "header-subtitle-top"}>Projects</a>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
} 

export default Header;