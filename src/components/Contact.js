import React from "react";
import Particles from 'react-particles-js';
import isMobile from 'react-device-detect';
const particleParam = {
  particles: {
    number: {
      value: 60
    },
    line_linked: {
      number: {
        value: 50,
        density: {
          enable: true,
          value_area: 800
        }
      },
      size: {
        value: 20
      },
    }
  },
  interactivity: {
    events: {
        onhover: {
            enable: true,
            mode: 'grab'   
        },
        onclick: {
            enable: true,
            mode: 'push'
        }
    }
  }
}

export default class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
        this.state = {
            status: ""
        };
    }

    componentDidMount() {
    }
  
    submitForm(ev) {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                    form.reset();
                this.setState({ status: "SUCCESS" });
            } 
            else {
                this.setState({ status: "ERROR" });
            }
        };
        xhr.send(data);
    }

    render() {
        const { status } = this.state;
        return (
            <div className="contact" id={this.props.id}>
                    {!isMobile ? <Particles
                        className="particle-background"
                        params={particleParam}/>
                        :
                        <div className="mobile-particles"></div>
                    }
                    <div className={!isMobile ? "particle-cover" : "mobile-particle-cover"} id="particle-cover">
                        <div className="particles-container">
                                <form
                                    onSubmit={this.submitForm}
                                    action="https://formspree.io/mgeonlgp"
                                    method="POST"
                                    className="contact-form"
                                    >
                                    <div className="section-heading--about">
                                        <h1>Let's talk</h1>
                                    </div>
                                    <div className="contact-form-container">
                                        <div className="contact-input" >
                                            {/* <label>Email:</label> */}
                                            <input type="text" name="name" placeholder=" Your name" />
                                            <input type="email" name="email" placeholder=" Your email" />
                                            {/* <label>Message:</label> */}
                                            <textarea name="message" placeholder=" Your message" className="message"></textarea>
                                            {/* <input type="textarea" name="message" placeholder=" Your message" className="message"/> */}
                                            {status === "SUCCESS" ? <p>Thanks!</p> : <button className="submit-button">Submit</button>}
                                            {status === "ERROR" && <p>Ooops! There was an error.</p>}
                                        </div>
                                        <div className="contact-information">
                                            <p>Want to get in touch? Questions on my projects?
                                            Need someone to talk to? Please <b>do</b> contact me through here.
                                            <br /><br />Have the latest and greatest cryptocurrency? Single ladies in my area?
                                            Nigerian prince? Please <b>do not</b> contact me.</p>
                                        </div>
                                    </div>
                                </form>
                        </div>
                    </div>

                    
            </div>            
        );
    }
}
