import React from 'react';
import { Link } from 'react-router-dom';
import development from '../../../assets/web-development.jpg';

const Banner = () => {
    return (
        <section className=''>
            <div className="hero bg-base-200  rounded-md">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='p-6'>
                        <h3 className='text-3xl font-bold'>Hello, This is</h3>
                        <h3 className='text-3xl font-bold text-primary'>Afzal Hossain</h3>
                        <h3 className='text-3xl font-semibold text-primary'>MERN Stack Web Developer</h3>
                        <p className="py-6 text-xl">I am a professional web developer. I develop websites that are functional and and eye catching to users.</p>

                        <Link to='/contact' alt='resume' class="btn btn-sm btn-primary mr-4 text-black rounded-md py-2 font-bold">Hire me</Link>

                        <a href='https://drive.google.com/file/d/1tddW9kEy0CCEEq7mxXqdtHgin-QBa0AT/view' target='blank' alt='resume' class="btn btn-sm btn-primary text-black rounded-md py-2 font-bold">Resume</a>
                    </div>

                    <div className=''>
                        <img alt='h-90' src={development} className="max-w-sm rounded-lg shadow-2xl" />
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Banner;