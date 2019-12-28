import React from 'react';
import Header from './Header';
import About from './About';
import Projects from './Projects';
import Background from './Background';
import Skills from './Skills';

class App extends React.Component {
  render() {
      return (
            <div>
                <Header />
                <Background />
                <About id="about" />
                <Skills />
                <Projects id="projects" />
            </div>
      )
  } 
}

export default App;
