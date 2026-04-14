import React, { Suspense } from 'react';
import Banner from '../../components/homepage/Banner';
import AllFriends from '../../components/homepage/AllFriends';
import Spinner from '../../components/shared/loadingSpinner/Spinner';

const HomePage = () => {
    return (
        <div>
            <Banner />
            <Suspense fallback={<Spinner />}>
                <AllFriends />
            </Suspense>
        </div>
    );
};

export default HomePage;