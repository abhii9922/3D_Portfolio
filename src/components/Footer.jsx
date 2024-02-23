// Footer.jsx
import React from 'react';
import { FaInstagram, FaSnapchatGhost, FaLinkedinIn, FaGithub, FaFacebookF, FaEnvelope } from 'react-icons/fa';
import { SectionWrapper } from "../hoc";

const Footer = () => {
    return (
        <footer className="text-white p-1 text-center text-3xl flex justify-center items-center flex-col gap-4">
            <div className="social-icons flex justify-center gap-4">
                <a href="https://snapchat.com/add/abhiishek33" target="_blank" rel="noopener noreferrer"><FaSnapchatGhost /></a>
                <a href="https://instagram.com/abhii.shinde09" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                <a href="https://linkedin.com/in/abhishekshinde813/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
                <a href="https://github.com/abhii9922" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                <a href="https://facebook.com/abhishek.shinde.10485" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                <a href="mailto:abhius@gmail.com"><FaEnvelope /></a>
            </div>
            <p className="text-sm">&copy; {new Date().getFullYear()} Abhishek Shinde. All rights reserved.</p>
        </footer>
    );
};

export default SectionWrapper(Footer, "Footer");
