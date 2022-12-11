import React from 'react';

const Skills = () => {
    return (
        <section className='container mx-auto'>
            <div className='my-20'>
                <h1 className='text-3xl text-center font-bold text-primary mb-6'>My Skills</h1>
                <div className='w-5/6 mx-auto grid grid-cols-2 gap-8 mt-20'>

                    <div className='mb-3 border-solid border border-orange-400  bg-slate-700 rounded-md'>
                        <p className='text-2xl font-bold  px-4 py-4 text-white'>HTML5</p>
                        <div class="w-full rounded-full dark:bg-gray-700">

                            <progress className="progress progress-warning h-4 w-full" value="85" max="100"></progress>

                        </div>
                    </div>

                    <div className='mb-3 border-solid border border-orange-400  bg-slate-700 rounded-md'>
                        <p className='text-2xl font-bold  px-4 py-4 text-white'>CSS3</p>
                        <div class="w-full rounded-full dark:bg-gray-700">

                            <progress className="progress progress-warning h-4 w-full" value="80" max="100"></progress>

                        </div>
                    </div>

                    <div className='mb-3 border-solid border border-orange-400  bg-slate-700 rounded-md'>
                        <p className='text-2xl font-bold  px-4 py-4 text-white'>Tailwind CSS</p>
                        <div class="w-full rounded-full dark:bg-gray-700">

                            <progress className="progress progress-warning h-4 w-full" value="80" max="100"></progress>

                        </div>
                    </div>

                    <div className='mb-3 border-solid border border-orange-400  bg-slate-700 rounded-md'>
                        <p className='text-2xl font-bold  px-4 py-4 text-white'>React Js</p>
                        <div class="w-full rounded-full dark:bg-gray-700">

                            <progress className="progress progress-warning h-4 w-full" value="75" max="100"></progress>

                        </div>
                    </div>

                    <div className='mb-3 border-solid border border-orange-400  bg-slate-700 rounded-md'>
                        <p className='text-2xl font-bold  px-4 py-4 text-white'>Javascript</p>
                        <div class="w-full rounded-full dark:bg-gray-700">

                            <progress className="progress progress-warning h-4 w-full" value="80" max="100"></progress>

                        </div>
                    </div>

                    <div className='mb-3 border-solid border border-orange-400  bg-slate-700 rounded-md'>
                        <p className='text-2xl font-bold  px-4 py-4 text-white'>Node Js</p>
                        <div class="w-full rounded-full dark:bg-gray-700">

                            <progress className="progress progress-warning h-4 w-full" value="65" max="100"></progress>

                        </div>
                    </div>

                    <div className='mb-3 border-solid border border-orange-400  bg-slate-700 rounded-md'>
                        <p className='text-2xl font-bold  px-4 py-4 text-white'>Express Js</p>
                        <div class="w-full rounded-full dark:bg-gray-700">
                            <progress className="progress progress-warning h-4 w-full" value="68" max="100"></progress>

                        </div>
                    </div>

                    <div className='mb-3 border-solid border border-orange-400  bg-slate-700 rounded-md'>
                        <p className='text-2xl font-bold  px-4 py-4 text-white'>Firebase</p>
                        <div class="w-full rounded-full dark:bg-gray-700">
                            <progress className="progress progress-warning h-4 w-full" value="75" max="100"></progress>


                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Skills;