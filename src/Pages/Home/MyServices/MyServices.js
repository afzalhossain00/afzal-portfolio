import React from 'react';
import ServiceInfo from './ServiceInfo';

const MyServices = () => {

    const cardData = [
        {
            id: 1,
            name: 'Web Design',
            details: "Web Design is the main part for an website It's satisfy user experience and attract user.",
            // icon: customer,
        },
        {
            id: 2,
            name: 'Web Development',
            details: "A MERN Stack web application I provide. Every kind of website I can create",
            // icon: payment,
        },
        {
            id: 3,
            name: 'Responsive Layout',
            details: "Responsive web development is most import cause user visit site PC,Mobile or Tab",
            // icon: creditCard,
        },

    ]

    return (
        <section>
            <div className='mt-20'>
                <div className='text-center mb-8'>
                    <h2 className='text-3xl font-bold text-primary'>My Services</h2>
                    <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-6 text-center'>
                        {
                            cardData.map(card => <ServiceInfo
                                key={card.id}
                                card={card}
                            ></ServiceInfo>)
                        }
                    </div>
                </div>


            </div>
        </section>
    );
};

export default MyServices;