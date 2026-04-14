// import React, { createContext } from 'react';

// export const FriendContext = createContext();
const FriendProvider = ({children}) => {


    
    const data = {

    }

    return <FriendContext value={data}> {children} </FriendContext>
};

export default FriendProvider;