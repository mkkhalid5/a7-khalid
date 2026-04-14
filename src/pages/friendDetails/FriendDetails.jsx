import React, { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router';
import call from '../../assets/call.png';
import text from '../../assets/text.png';
import video from '../../assets/video.png';
import { MdDelete } from 'react-icons/md';
import { FaArchive } from 'react-icons/fa';
import { RiNotificationSnoozeLine } from 'react-icons/ri';
import { FriendContext } from '../../context/FriendContext';
import Spinner from '../../components/shared/loadingSpinner/Spinner';


const FriendDetails = () => {
    const { id } = useParams();
    const friendsData = useLoaderData();
    const expectedFriend = friendsData.find((friend) => friend.id === Number(id));

    const {
        name,
        picture,
        tags,
        status,
        bio,
        email,
        days_since_contact,
        goal,
        next_due_date
    } = expectedFriend;

    const {handleFriendContact} = useContext(FriendContext);
    console.log("friendata", friendsData);
    console.log("expected", expectedFriend);
    console.log("handle", handleFriendContact);

    return (
        <div className='flex flex-col lg:flex-row container mx-auto text-center py-20 px-3 gap-4'>
            <div className='space-y-3'>
                <div className='space-y-3 bg-white rounded-md p-6 shadow'>
                    <div className='flex justify-center'>
                        <img src={picture} alt={name} className='h-20 w-20 rounded-full' />
                    </div>
                    <h2>{name}</h2>
                    <div className=''>
                        {
                            status === "on-track" ? <span className='text-white bg-[#244D3F] px-2  rounded-full font-semibold'>{status}</span> : status === "almost due" ? <span className='text-white bg-[#EFAD44] px-2 rounded-full font-semibold'>{status}</span> : <span className='text-white bg-[#EF4444] px-2 rounded-full font-semibold'>{status}</span>
                        }
                    </div>
                    <div className='space-x-2'>
                        {
                            tags.map(tag =>
                                <span className='text-[#244D3F] bg-[#CBFADB] rounded-full font-semibold px-3'>{tag}</span>
                            )
                        }
                    </div>
                    <p className='text-[#64748B]'>{bio}</p>
                    <p className='text-[#64748B]'>{email}</p>
                </div>
                <div className='flex justify-center rounded-sm shadow items-center bg-white py-3.5 gap-2'><RiNotificationSnoozeLine /> Snooze 2 Weeks</div>
                <div className='flex justify-center rounded-sm shadow items-center bg-white py-3.5 gap-2'><FaArchive /> Archive</div>
                <div className='flex justify-center rounded-sm shadow items-center bg-white py-3.5 text-red-500 gap-2'><MdDelete /> Delete</div>
            </div>
            <div className='space-y-6'>
                <div className='grid grid-cols-2 md:grid-cols-3 gap-3'>
                    <div className='px-4 py-8 bg-white rounded-md shadow'>
                        <h2 className='text-[#244D3F] text-[30px] font-bold'>{days_since_contact}</h2>
                        <p className='text-[#64748B]'>Days Since Contact</p>
                    </div>
                    <div className='px-4 py-8 bg-white rounded-md shadow'>
                        <h2 className='text-[#244D3F] text-[30px] font-bold'>{goal}</h2>
                        <p className='text-[#64748B]'>Goal(Days)</p>
                    </div>
                    <div className='px-4 py-8 bg-white rounded-md shadow'>
                        <h2 className='text-[#244D3F] text-[30px] font-bold'>{new Date(next_due_date).toDateString()}</h2>
                        <p className='text-[#64748B]'>Next Due</p>
                    </div>
                </div>

                <div className='text-left p-6 space-y-4 bg-white rounded-md shadow'>
                    <div className='flex justify-between'>
                        <h2 className='text-[#244D3F]  font-bold'>Relationship Goal</h2>
                        <button className='btn'>Edit</button>
                    </div>
                    <p className='text-[#64748B]'>Connect every <span className='text-black font-bold'>{goal} Days</span></p>
                </div>

                <div className='text-left p-6 space-y-4 bg-white rounded-md shadow'>
                    <h2 className='text-[#244D3F]  font-bold'>Quick Check-In</h2>
                    <div className='grid grid-cols-3 gap-3'>
                        <div onClick={() => handleFriendContact(expectedFriend, "call")} className='py-4 bg-[#E9E9E9]  rounded-md border border-gray-300 flex flex-col text-center items-center justify-center '>
                            <img src={call} alt="" />
                            <p className='font-bold'>Call</p>
                        </div>
                        <div onClick={() => handleFriendContact(expectedFriend, "text")} className='py-4 bg-[#E9E9E9] rounded-md border border-gray-300 flex flex-col text-center items-center justify-center '>
                            <img src={text} alt="" />
                            <p className='font-bold'>Text</p>
                        </div>
                        <div onClick={() => handleFriendContact(expectedFriend, "video")} className='py-4 bg-[#E9E9E9]  rounded-md border border-gray-300 flex flex-col text-center items-center justify-center '>
                            <img src={video} alt="" />
                            <p className='font-bold'>Video</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FriendDetails;