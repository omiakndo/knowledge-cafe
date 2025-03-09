import React from 'react';
import './Body.css'
import Card from '../Card/Card';
import Bookmark from '../Bookmark/Bookmark';
const Body = () => {
    return (
        <div>
            <div className='body'>
                <div className='card'><h1><Card></Card></h1></div>
                <div className='bookmarked'><h1><Bookmark></Bookmark></h1></div>
            </div>
        </div>
    );
};

export default Body;