import React from 'react';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <section>
            <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
                <div className='mb-4 flex'>
                    <a className='text-4xl text-blue-500 mr-3' href='https://www.linkedin.com/in/afzalhossain00' target='blank' alt=''><FaLinkedin></FaLinkedin> </a>
                    <a className='text-4xl text-blue-500' href='https://github.com/afzalhossain00' target='blank' alt=''><FaGithubSquare></FaGithubSquare></a>
                </div>
                <div>
                    <p>Copyright © 2022 - All right reserved by Afzal Hossain</p>
                </div>
            </footer>
        </section>
    );
};

export default Footer;