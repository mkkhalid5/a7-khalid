import React, { use } from 'react';
import FriendCard from './FriendCard';

const loadData = async () => {
    const res = await fetch("./friends.json");
    return res.json();
}

const dataPromise = loadData();

const AllFriends = () => {
    const friends = use(dataPromise);
    console.log("friends", friends);

    return (
        <div className='bg-[#F8FAFC] px-3 pb-20'>
            <div className='container mx-auto'>
                <h2 className='font-bold text-2xl'>Your Friends</h2>
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-3 mt-4'>
                    {
                        friends.map((friend) => {
                            return (
                                <FriendCard friend={friend} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default AllFriends;