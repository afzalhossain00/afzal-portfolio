import React from 'react';
import { Link } from 'react-router-dom';
import afzal from '../../assets/personal/afzal.jpg'

const About = () => {
    return (
        <section className='mt-20'>
            <div className="hero bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='w-1/2'>
                        <img alt='' src={afzal} className="max-w-sm rounded-lg shadow-2xl" />
                    </div>
                    <div className='w-4/6'>
                        <h3 className='text-3xl font-bold text-primary'>About Me</h3>
                        <p className="py-6 text-xl">Hi! This is Afzal Hossain, a passionate full-stack developer. I develop websites using React Js as frontend library. Programming is my love and passionate. My core skill is based on JavaScript and I love to do most of the things using JavaScript.
                            <br /> <br />
                            I have graduated at daffodill international university department of CSE. If you have any query just knock me.</p>

                        <Link to='/contact' alt='resume' class="btn btn-sm btn-primary text-black rounded-md py-2 font-bold">Contact</Link>

                    </div>
                </div>
            </div>

        </section>
    );
};

export default About;