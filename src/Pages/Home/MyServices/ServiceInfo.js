import React from 'react';

const ServiceInfo = ({ card }) => {
    const { name, details } = card;
    return (
        <div className='card h-5/6 shadow-xl p-6 mt-14 text-center group hover:bg-slate-100'>
            <figure>
                {/* <img style={{ width: '60px' }} src={icon} alt="Movie" /> */}
            </figure>
            <div className="card-body group-hover:text-black">
                <h2 className="text-3xl mb-3 font-bold">{name}</h2>
                <p className="">{details}</p>
            </div>
        </div>
    );
};

export default ServiceInfo;