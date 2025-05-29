import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className='footer-divider'></div>
            <div className='footer-column'>
                <h2 className="footer-heading">Industries</h2>
                <p>Food Delivery</p>
                <p>E- Commerce Delivery</p>
                <p>Education</p>
                <p>Real Estate</p>
            </div>

            <div className='footer-column'>
                <h2 className="footer-heading">Services</h2>
                <p>Blockchain Development</p>
                <p>Web Development</p>
                <p>Growth & Marketing</p>
                <p>E-mart</p>
                <p>Spectacles store</p>
                <p>Liquor store</p>
            </div>

            <div className='footer-column'>
                <h2 className="footer-heading">Quicklinks</h2>
                <p>Why Choose Us</p>
                <p>How We Work</p>
                <p>CRM</p>
                <p>Sales CRM</p>
                <p>ParternerShip</p>
            </div>
            
            <div className='footer-column1'>
                <h2 className="footer-heading1">WhatsApp Update</h2>
                <h3>Phone</h3>
                <input type="text" placeholder="Enter your mobile number" />
                <button>Submit</button>
                <h3>Follow us on</h3>
                <div className="footer-icons">
                    <img src="https://img.icons8.com/ios-filled/50/facebook--v1.png" alt="Facebook" />
                    <img src="https://img.icons8.com/ios-filled/50/instagram-new.png" alt="Instagram" />
                    <img src="https://img.icons8.com/ios-filled/50/linkedin.png" alt="LinkedIn" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;