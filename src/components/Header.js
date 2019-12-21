import React from 'react';


const Header = () => (
    <header className="header">
        <div className="content-container">
            <div className = "header-container">
                <div className="header__title">
                    <h1>Alex Pham</h1>
                </div>
                <div className="header__links">
                    <a href="#about" className="header__subtitle">About</a>
                    <a href="#projects" className="header__subtitle">Projects</a>
                </div>
            </div>
        </div>
    </header>
);

export default Header;