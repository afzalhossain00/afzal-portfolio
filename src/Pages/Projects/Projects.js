import React from 'react';
import PrimeMotors from '../../assets/projects/PrimeMotors.png'
import InfinitySnaps from '../../assets/projects/InfinitySnaps.png'
// import DoctorsPortals from '../../assets/projects/DoctorsPortal.png'
import EducationalHour from '../../assets/projects/EducationalHour.png'

const Projects = () => {
    return (
        <section>
            <div className='mt-16'>
                <h1 className='text-3xl text-center font-bold text-primary mb-6'>My Projects</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6 p-4'>
                    <div>
                        <div className="card bg-base-100 shadow-xl">
                            <figure className='h-60'><img src={PrimeMotors} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    Prime Motors

                                </h2>
                                <p> It is a photography services website, which provides some services.
                                    Users can place orders, see their order list, and give a review of a service.</p>
                                <div className="card-actions justify-end">
                                    <a href="https://prime-motors-ad8ec.web.app/" target='blank' className="btn btn-primary btn-sm">Live</a>

                                    <a href='https://github.com/afzalhossain00/prime-motors-client' className="btn btn-primary btn-sm" target='blank'>Github</a>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card bg-base-100 shadow-xl">
                            <figure className='h-60'><img src={InfinitySnaps} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    Infinite Snaps
                                </h2>
                                <p>This project contain to booking appointment to getting treatmen. Here also a Dashboard, where the interface divided by admin panel and user panel. </p>
                                <div className="card-actions justify-end">
                                    <a href="https://infinite-snaps.web.app" target='blank' className="btn btn-primary btn-sm">Live</a>
                                    <a href='https://github.com/afzalhossain00/Infinite-snaps-client' className="btn btn-primary btn-sm" target='blank'>Github</a>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card bg-base-100 shadow-xl">
                            <figure className='h-60'><img src={EducationalHour} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    Educational Hour
                                </h2>
                                <p>This project contain to booking appointment to getting treatmen. Here also a Dashboard, where the interface divided by admin panel and user panel.</p>
                                <div className="card-actions justify-end">
                                    <a href="https://educational-hour.web.app" target='blank' className="btn btn-primary btn-sm">Live</a>
                                    <a href='https://github.com/afzalhossain00/educational-hour-client' className="btn btn-primary btn-sm" target='blank'>Github</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;