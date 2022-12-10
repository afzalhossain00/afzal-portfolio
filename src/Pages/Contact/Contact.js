import React from 'react';

const Contact = () => {
    return (
        <div style={{ background: `url(${''})` }} className='text-center px-5 py-10 mt-10'>
            <h4 className='text-2xl font-bold text-primary'>Contact Me</h4>
            <form className='lg:w-1/3 mx-auto mt-8'>
                <input name='name' type="text" placeholder="Your name" className="input mb-5 input-bordered w-full" required />
                <input name='email' type="email" placeholder="Email Address" className="input mb-5 input-bordered w-full" required />
                <textarea name='message' className="textarea h-32 textarea-bordered w-full" placeholder="Your message" required></textarea>
                <input className='mt-8 btn btn-primary bg-gradient-to-r from-primary to-accent border-none text-white' type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Contact;