import React from 'react';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import {isMobile} from 'react-device-detect';


class Footer extends React.Component {
    Footer() {

    }
    handleCredits = () => {
      Swal.fire({
        buttonsStyling: false,
        confirmButtonText: 'OK',
        customClass: {
            background: '#f7f7f7',
            closeButton: 'modal-close',
            confirmButton: 'modal-button',
            content: 'modal-content',
            image: 'modal-image',
            title: 'modal-title'
        },
        showCloseButton: true,
        title: "Credits",
        html: `<ul>
        <li><div>Icons (smiling sun, hummingbird) made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div></li>
        <li><div>Modals made by <a href="https://sweetalert2.github.io/">Sweet Alert</a></div></li>
        <li><div>Top name animation created with <a href="https://www.react-spring.io/">React Spring</a></div></li>
        <li><div>Top background made by <a href="https://codepen.io/alexzaworski/pen/mEkvAG">Alex Zaworski</a></div></li>
        <li><div>Bottom background from <a href="https://github.com/Wufe/react-particles-js#readme">react-particles-js</a></div></li>
        <li><div>Notification from <a href="https://github.com/minhtranite/react-notifications">react-notifications</a></div></li>
        <li><div>Cloud Parallax effect from <a href="https://matthew.wagerfield.com/parallax/">parallax.js</a></div></li>
        <li><div>Contact form created from <a href="https://formspree.io/">Formspree</a></div></li>
        <li><div>Last but not least, React from <a href="https://reactjs.org/">Facebook</a></div></li>
        </ul>
        `,
        position: 'top',
        width: '70rem'
    })
    }

    render() {
        return (
            <div className={isMobile ? "footer-mobile" : "footer"}>
                Built with ReactJS, made with <span role="img" aria-label="love">❤️</span> by Alex Pham
                <div>
                    <button className={isMobile ? "button-credit-mobile" : "button-credit"} onClick={this.handleCredits}>Credits</button>
                </div>
                
            </div>
        )
    } 
}

export default Footer;
