import React from 'react';
import Header from './Header';
import About from './About';
import Projects from './Projects';

function App() {
  return (
    <div>
        <Header />
        <About id="about" />
        <Projects id="projects" />
    </div>
  );
}

export default App;
