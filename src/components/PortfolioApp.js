import React from 'react';
import Header from './Header';
import About from './About';
import Projects from './Projects';
import Animation from './Animation';

function App() {
  return (
    <div>
        <Animation />
        <Header />
        <About id="about" />
        <Projects id="projects" />
    </div>
  );
}

export default App;
