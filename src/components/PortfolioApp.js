import ReactNotifications from 'react-notifications-component';
import React from 'react';
import Header from './Header';
import About from './About';
import Projects from './Projects';
import Background from './Background';
import Skills from './Skills';
import MyForm from './Contact';


class App extends React.Component {
  render() {
      return (
            <div>
                <ReactNotifications />
                <Header />
                <Background />
                <About id="about" />
                <Skills id="skills" />
                <Projects id="projects" />
                <MyForm />
            </div>
      )
  } 
}

export default App;
