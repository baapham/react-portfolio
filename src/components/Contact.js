import React from "react";
import { TriangleBG } from './Triangles.js';
export default class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
        this.state = {
            status: ""
        };
    }

    componentDidMount() {
        // const script = document.createElement("script");
        // script.async = true;
        // script.src = './Triangles.js';
        // document.body.appendChild(script);
        const canvas = document.getElementById("triangle-canvas");
        const altBG = document.getElementById("altBG");
        new TriangleBG({
            canvas : canvas,
            alternateElem : altBG,
            cellHeight : 120,
            cellWidth : 100,
            mouseLight : true,
            mouseLightRadius : 200,
            mouseLightIncrement : 40,
            resizeAdjustment : true,
            variance : 0.9,
            pattern : "y",
            baseColor1 : {
            baseHue : 210,
            baseSaturation : 100,
            baseLightness : 35
            },
            baseColor2 : {
            baseHue : 210,
            baseSaturation : 100,
            baseLightness : 35
            },
            colorDelta : {
            hue : 0,
            lightness : 0,
            saturation : 0
            }
       });
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
            <div className="contact">
                <div className="triangle-container">
                <form
                            onSubmit={this.submitForm}
                            action="https://formspree.io/mgeonlgp"
                            method="POST"
                        >
                            <label>Email:</label>
                            <input type="email" name="email" />
                            <label>Message:</label>
                            <input type="text" name="message" />
                            {status === "SUCCESS" ? <p>Thanks!</p> : <button>Submit</button>}
                            {status === "ERROR" && <p>Ooops! There was an error.</p>}
                        </form>
                    <canvas className="contact" id="triangle-canvas">
                    </canvas>
                    <div id="altBG"></div>
                    
                </div>
            </div>            
        );
    }
}
