import React from 'react';
import { Link } from 'react-router';

const FriendCard = ({friend}) => {
    return (
        <Link to={`/friendDetails/${friend.id}`} className='p-6 bg-white rounded-lg space-y-3 shadow-md'>
                            <div className='flex justify-center'>
                                <img src={friend.picture} alt={friend.name} className='h-20 w-20 rounded-full' />
                            </div>
                            <div className='space-y-3 text-center'>
                                <h2 className='text-[20px] font-semibold'>{friend.name}</h2>
                                <p className='text-[#64748B]'>{friend.days_since_contact}d ago</p>
                                <div className='space-x-2'>
                                    {
                                        friend.tags.map(tag =>
                                            <span className='text-[#244D3F] bg-[#CBFADB] rounded-full font-semibold px-3'>{tag}</span>
                                        )
                                    }
                                </div>

                                <div>
                                    {
                                        friend.status === "on-track" ? <span className='text-white bg-[#244D3F] px-2  rounded-full font-semibold'>{friend.status}</span> : friend.status === "almost due" ? <span className='text-white bg-[#EFAD44] px-2 rounded-full font-semibold'>{friend.status}</span> : <span className='text-white bg-[#EF4444] px-2 rounded-full font-semibold'>{friend.status}</span>
                                    }
                                </div>

                            </div>

                        </Link>
    );
};

export default FriendCard;