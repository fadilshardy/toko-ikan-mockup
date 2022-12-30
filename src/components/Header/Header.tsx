import * as React from 'react';
import Hero from '../Hero/Hero';
import Navbar from '../Navbar/Navbar';

interface IHeaderProps {
}

const Header: React.FunctionComponent<IHeaderProps> = () => {
    return (<header>
        <div className="mx-auto container">
            <Navbar />
            <Hero />
        </div>
    </header>);
};

export default Header;
