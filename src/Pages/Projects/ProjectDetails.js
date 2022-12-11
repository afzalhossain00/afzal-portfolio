import React from 'react';
import { Link } from 'react-router-dom';


const ProjectDetails = ({ card }) => {
    const { name, details, image, live, github, id } = card;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure className='h-60'><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                </h2>
                <p>{details}</p>
                <div className="card-actions justify-end">
                    {/* <Link to=''>
                        <button className='btn btn-primary btn-sm'>Details</button>
                    </Link> */}
                    <a href={live} target='blank' className="btn btn-primary btn-sm">Live</a>

                    <a href={github} className="btn btn-primary btn-sm" target='blank'>Github</a>

                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;