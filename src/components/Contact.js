import React from "react";
import Particles from 'react-particles-js';
import {isMobile} from 'react-device-detect';
const particleParam = {
    "particles": {
        "number": {
          "value": 101,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#fff"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          }
        },
        "opacity": {
          "value": 0.5,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 10,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": false,
          "distance": 500,
          "color": "#ffffff",
          "opacity": 0.4,
          "width": 2
        },
        "move": {
          "enable": true,
          "speed": 1,
          "direction": "top",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "window",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "bubble"
          },
          "onclick": {
            "enable": true,
            "mode": "repulse"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 400,
            "line_linked": {
              "opacity": 0.5
            }
          },
          "bubble": {
            "distance": 400,
            "size": 4,
            "duration": 0.3,
            "opacity": 1,
            "speed": 3
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
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
                                            <input type="text" name="name" placeholder=" Your name" />
                                            <input type="email" name="email" placeholder=" Your email" />
                                            <textarea name="message" placeholder=" Your message" className="message"></textarea>
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
