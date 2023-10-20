import React from 'react';
import FindData from '../FindData/FindData';

const Header = () => {
    return (
        <>
        <div className='text-center my-16 space-y-4'>
            <h1 className='text-[#212529] text-4xl font-medium leading-10'>Spaceflight details</h1>
            <p className='text-[#495057] text-base font-normal leading-6'>Find out the elaborate features of all the past big spaceflights.</p>
        </div>
        <FindData></FindData>
        </>

    );
};

export default Header;