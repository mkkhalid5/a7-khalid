import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';

// eslint-disable-next-line react-refresh/only-export-components
export const FriendContext = createContext();
const FriendProvider = ({children}) => {
    const [friendContact, setFriendContact] = useState([]);

    const handleFriendContact = (friend, actionType) => {
        const newContact = {
            friend,
            actionType,
            time: new Date()
        };

        setFriendContact((prev) => [...prev, newContact]);

        toast.success(`${actionType} with ${friend.name}`);
    };

    const data = {
        friendContact,
        handleFriendContact
    };

    return <FriendContext value={data}> {children} </FriendContext>
};

export default FriendProvider;