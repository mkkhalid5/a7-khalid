import React, { useContext } from 'react';
import { FriendContext } from '../../context/FriendContext';
import call from '../../assets/call.png';
import text from '../../assets/text.png'
import video from '../../assets/video.png'


const TimeLine = () => {
    const { friendContact } = useContext(FriendContext);

    console.log("friendContact",friendContact);

    return (
        <div eclassNam='py-20 container mx-auto px-3 space-y-6'>
            <h2 className='text-5xl font-bold'>Timeline</h2>

            <div className='space-y-3'>
                {
                    friendContact.map((data, ind) => (
                        <div key={ind} className='p-4 flex items-center gap-3 bg-white rounded-md shadow'>

                            <div>
                                <img
                                    src={
                                        data.actionType === "call" ? call :
                                            data.actionType === "text" ? text :
                                                video
                                    }
                                    alt=""
                                    className='rounded-full h-4 w-4'
                                />
                            </div>

                            <div>
                                <h2 className='text-[#244D3F] font-bold'>
                                    {data.actionType}
                                    <span className='text-[#64748B] font-normal'>
                                      {" "}  with {data.friend.name}
                                    </span>
                                </h2>

                                <p className='text-[#64748B]'>
                                    {new Date(data.time).toDateString()}
                                </p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default TimeLine;