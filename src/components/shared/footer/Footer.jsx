import React from 'react';

const Footer = () => {
    return (
        <div className='bg-[#244D3F] pt-20 pb-7.5'>
            <div className='text-center space-y-4 container mx-auto px-3'>
                <h2 className='text-5xl font-bold text-white'>KeenKeeper</h2>
                <p className='text-white'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                <h4 className='text-white font-bold'>Social Links</h4>
                <div className='flex gap-3 justify-center items-center'>
                    <img src="./instagram.png" alt="" />
                    <img src="./facebook.png" alt="" />
                    <img src="./twitter.png" alt="" />
                </div>
                <hr className='text-gray-300 mt-3' />
                <div className='flex flex-col md:flex-row justify-center items-center md:justify-between text-[#FAFAFA]/40'>
                    <h2>© 2026 KeenKeeper. All rights reserved.</h2>
                    <ul className='flex gap-4'>
                        <li>Privacy Policy</li>
                        <li>Terms of Service</li>
                        <li>Cookies</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;