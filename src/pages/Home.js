import React, { useState } from 'react';
import { homeObjOne, homeObjThree, homeObjTwo } from '../components/Info/Data';
import Footer from '../components/Footer/Footer';
import Hero from '../components/Hero/Hero';
import Info from '../components/Info/Info';
import Navbar from '../components/Navbar/Navbar';
import Services from '../components/Services/Services';
import Sidebar from '../components/Sidebar/Sidebar';

function Home() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => { // When sidebar icons are clicked this return true or false depend on its own value.
        setIsOpen(!isOpen);
    }

    return (
        <div>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <Hero />
            <Info {...homeObjOne} />
            <Info {...homeObjTwo} />
            <Services />
            <Info {...homeObjThree} />
            <Footer />
        </div>
    )
}

export default Home