import ReactNotifications from "react-notifications-component";
import React from "react";
import Header from "./Header";
import About from "./About";
import Projects from "./Projects";
import Background from "./Background";
import Skills from "./Skills";
import Contact from "./Contact";
import Footer from "./Footer";

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
        <Contact id="contact" />
        <Footer />
      </div>
    );
  }
}

export default App;
