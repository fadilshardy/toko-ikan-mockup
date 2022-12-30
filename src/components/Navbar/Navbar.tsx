import * as React from 'react';

interface INavbarProps {
}

const Navbar: React.FunctionComponent<INavbarProps> = () => {
    return <div className="flex w-full py-11 items-center">
        <h1 className="text-[#F2572E] text-2xl whitespace-nowrap font-medium">Toko Ikan</h1>
        <nav className="w-full ">
            <ul className="flex gap-14  justify-center font-medium text-lg">
                <li className="text-[#F05830]">Beranda</li>
                <li>Keunggulan</li>
                <li>Fitur Aplikasi</li>
                <li>Testimonial</li>
            </ul>
        </nav>
        <div className="inline-flex items-center justify-center w-[153px] h-[54px] px-9 py-6 bg-primary rounded-lg">
            <a className="text-lg tracking-wide leading-relaxed text-white">Download</a>
        </div>
    </div>;
};

export default Navbar;
