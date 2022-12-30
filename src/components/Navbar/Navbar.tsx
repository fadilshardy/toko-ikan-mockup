import * as React from 'react';

interface INavbarProps {
}

const Navbar: React.FunctionComponent<INavbarProps> = () => {
    return <>
        <h1>Toko Ikan</h1>
        <nav>
            <ul>
                <li>Beranda</li>
                <li>Keunggulan</li>
                <li>Fitur Aplikasi</li>
                <li>Testimonial</li>
            </ul>
        </nav>
        <a>Download</a>
    </>;
};

export default Navbar;
