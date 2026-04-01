import React from 'react';
import Link from './Link';





const navigationData = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Services", path: "/services" },
    { id: 4, name: "Portfolio", path: "/portfolio" },
    { id: 5, name: "Blog", path: "/blog" },
    { id: 6, name: "Contact", path: "/contact" }
];


const Navbar = () => {
    return (
        <nav>

            <ul className='flex'>
                {
                    navigationData.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>



            {/* <ul className='flex'>
                {
                    navigationData.map(route => <li className='mr-10 font-bold'>
                        <a href={route.path}>{route.name}</a>
                    </li>)
                }
            </ul> */}



            {/* <ul className='flex '>
                <li className='mr-10 font-bold'><a href="">Anchor - 1</a></li>
                <li className='mr-10 font-bold'><a href="">Anchor - 2</a></li>
                <li className='mr-10 font-bold'><a href="">Anchor - 3</a></li>
            </ul> */}
        </nav>
    );
};

export default Navbar;