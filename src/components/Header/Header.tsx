import * as React from 'react';
import Hero from '../Hero/Hero';
import Navbar from '../Navbar/Navbar';

interface IHeaderProps {
}

const Header: React.FunctionComponent<IHeaderProps> = () => {
    return (<header>
        <Navbar />
        <Hero />
    </header>);
};

export default Header;
