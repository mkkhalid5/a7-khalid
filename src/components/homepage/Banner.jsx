import React from 'react';
import { FaPlus } from 'react-icons/fa';

const Banner = () => {
    return (
        <div className='bg-[#F8FAFC] px-3'>
            <div className='space-y-10 pt-20 pb-10'>
                <div className='text-center space-y-4 '>
                    <h2 className='font-bold text-3xl md:text-5xl'>Friends to keep close in your life</h2>
                    <p className='text-[#64748B]'>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />relationships that matter most.</p>
                    <button className='font-semibold 
                     bg-[rgb(36,77,63)] text-white mt-4 btn'><FaPlus />Add a Friend</button>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 container mx-auto'>
                    <div className='p-8 rounded-md shadow-md bg-white flex flex-col items-center'>
                        <h2 className='text-[#244D3F] font-bold'>10</h2>
                        <p className='text-[#64748B]'>Total Friends</p>
                    </div>
                    <div className='p-8 rounded-md shadow-md bg-white flex flex-col items-center'>
                        <h2 className='text-[#244D3F] font-bold'>3</h2>
                        <p className='text-[#64748B]'>On Track</p>
                    </div>
                    <div className='p-8 rounded-md shadow-md bg-white flex flex-col items-center'>
                        <h2 className='text-[#244D3F] font-bold'>6</h2>
                        <p className='text-[#64748B]'>Need Attention</p>
                    </div>
                    <div className='p-8 rounded-md shadow-md bg-white flex flex-col items-center'>
                        <h2 className='text-[#244D3F] font-bold'>12</h2>
                        <p className='text-[#64748B]'>Intersctions This Month</p>
                    </div>
                </div>
                <hr className='container mx-auto text-gray-300' />
            </div>
        </div>
    );
};

export default Banner;