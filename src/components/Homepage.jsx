import React from 'react';
import Slider from '../pages/Slider';
import FeaturedGames from '../pages/FeaturedGames';
import DiscussionBoard from '../pages/DiscussionBoard';
import HighestRated from '../pages/HighestRated';

const Homepage = () => {
    return (
        <div>
            <main className='w-11/12 mx-auto pt-5'>
                <Slider></Slider>
                <HighestRated></HighestRated>
                <FeaturedGames></FeaturedGames>
                <DiscussionBoard></DiscussionBoard>
            </main>
            
        </div>
    );
};

export default Homepage;