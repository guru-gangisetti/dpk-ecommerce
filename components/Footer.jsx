import React from 'react';
import { AiFillInstagram, AiOutlineTwitter, AiOutlineFacebook, AiOutlineYoutube, AiOutlineWhatsApp } from 'react-icons/ai';

const Footer = () => {
    return (
        <div className="footer-container">
            <p>
                2022 DPK Collections All rights reserved.
            </p>
            <p className="icons">
                <AiOutlineWhatsApp />
                <AiFillInstagram />
                <AiOutlineTwitter />
                <AiOutlineFacebook />
                <AiOutlineYoutube />
            </p>
        </div>
    )
}

export default Footer
