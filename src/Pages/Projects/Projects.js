import React from 'react';
import ProjectDetails from './ProjectDetails';
import InfinitySnaps from '../../assets/projects/InfinitySnaps.png'
import EducationalHour from '../../assets/projects/EducationalHour.png'
import PrimeMotors from '../../assets/projects/PrimeMotors.png'

const Projects = () => {

    const cardData = [
        {
            id: 1,
            name: 'Prime Motors',
            details: "It is a photography services website, which provides some services Users can place orders, see their order list, and give a review of a service.",
            image: PrimeMotors,
            live: 'https://prime-motors-ad8ec.web.app',
            github: 'https://github.com/afzalhossain00/prime-motors-client',
        },
        {
            id: 2,
            name: 'Infinite Snaps',
            details: "This project contain to booking appointment to getting treatmen. Here also a Dashboard, where the interface divided by admin panel and user panel.",
            image: InfinitySnaps,
            live: 'https://infinite-snaps.web.app',
            github: 'https://github.com/afzalhossain00/Infinite-snaps-client',
        },
        {
            id: 3,
            name: '  Educational Hour',
            details: "This project contain to booking appointment to getting treatmen. Here also a Dashboard, where the interface divided by admin panel and user panel.",
            image: EducationalHour,
            live: 'https://educational-hour.web.app',
            github: 'https://github.com/afzalhossain00/educational-hour-client',
        },

    ]

    return (
        <section className='mt-16 container mx-auto'>
            <h1 className='text-3xl text-center font-bold text-primary mb-6'>My Projects</h1>
            <div className='grid gap-6 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-6 text-center'>
                {
                    cardData.map(card => <ProjectDetails
                        key={card.id}
                        card={card}
                    ></ProjectDetails>)
                }
            </div>
        </section>
    );
};

export default Projects;