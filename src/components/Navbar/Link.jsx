import React from 'react';

const Link = ({route}) => {
    return (
        <li className='mr-10 font-bold '>
            <a href={route.path}>{route.name}</a>
        </li>
    );
};

export default Link;