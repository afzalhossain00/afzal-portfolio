import React from 'react';
import About from '../../About/About';
import Contact from '../../Contact/Contact';
import Projects from '../../Projects/Projects';
import Skills from '../../Skills/Skills';
import Banner from '../Banner/Banner';
import MyServices from '../MyServices/MyServices';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Projects></Projects>
            <Skills></Skills>
            <MyServices></MyServices>
            <Contact></Contact>
        </div>
    );
};

export default Home;