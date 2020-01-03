import React from 'react';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import {isMobile} from 'react-device-detect';
// Represents each project in the project section
const Project = (props) => {
    const handleModal = () => {
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
            imageUrl: !isMobile && props.imgSrc,
            showCloseButton: true,
            title: props.title,
            html: props.longDescription,
            position: 'top',
            width: '70rem'
        })
    };
    return (
        <div className="project">
            <div className="project-image">
                <img src={props.imgSrc} alt={props.title}></img>
            </div>
            <div className="project-content">
                <div className="project-title">
                    {props.title}
                </div>
                <div className="project-description">
                    {props.shortDescription}
                </div>
                <div className="project-more">
                    <button className="button-more" onClick={handleModal}>
                        <i className="arrow"></i> Find out more 
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Project;