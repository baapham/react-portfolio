import React from "react";
import Particles from 'react-particles-js';

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
                    <Particles
                        className="particle-background"
                        params={particleParam}
                    />
                    
                    <div className="particles-container">
                            <div className="section-heading--contact">
                                <h1>Contact</h1>
                            </div>
                            <form
                                onSubmit={this.submitForm}
                                action="https://formspree.io/mgeonlgp"
                                method="POST"
                                className="contact-form"
                            >
                                <div className="contact-input">
                                    <label>Email:</label>
                                    <input type="email" name="email" />
                                    <label>Message:</label>
                                    <input type="text" name="message" />
                                    {status === "SUCCESS" ? <p>Thanks!</p> : <button>Submit</button>}
                                    {status === "ERROR" && <p>Ooops! There was an error.</p>}
                                </div>
                                <div className="contact-information">
                                    <p>Some information</p>
                                </div>
                            </form>
                    </div>
                    
            </div>            
        );
    }
}
