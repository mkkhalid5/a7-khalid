import { GoDotFill } from 'react-icons/go';

const Stats = () => {
    
    return (
        <div className='py-20 container mx-auto px-3 space-y-6'>
            <h2 className='text-5xl font-bold'>Friendship Analytics</h2>

            <div className='p-8 space-y-6 bg-white rounded-md'>
                <h2 className='text-[#244D3F]'>By Interaction Type</h2>
                
                <div className='flex justify-center gap-2'>
                    <p className='flex items-center'><span className='text-[#7E35E1]'><GoDotFill /></span> Text</p>
                    <p className='flex items-center'><span className='text-[#244D3F]'><GoDotFill /></span> Call</p>
                    <p className='flex items-center'><span className='text-[#37A163]'><GoDotFill /></span> Video</p>
                </div>
            </div>
        </div>
    );
};

export default Stats;