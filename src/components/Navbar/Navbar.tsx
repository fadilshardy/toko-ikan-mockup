import Link from 'next/link';
import * as React from 'react';

interface INavbarProps {
}

const Navbar: React.FunctionComponent<INavbarProps> = () => {
    return <div className="flex w-full py-11 items-center px-">
        <h1 className="text-[#F2572E] text-2xl whitespace-nowrap font-medium "><Link href="#">Toko Ikan</Link></h1>
        <nav className="w-full">
            <ul className="gap-14 justify-center font-medium text-lg hidden lg:flex">
                <li className="text-[#F05830] transition hover:opacity-75"><Link href="#">Beranda</Link></li>
                <li className="hover:text-[#F05830] transition hover:opacity-75"><Link href="#">Keunggulan</Link></li>
                <li className="hover:text-[#F05830] transition hover:opacity-75"><Link href="#">Fitur Aplikasi</Link></li>
                <li className="hover:text-[#F05830] transition hover:opacity-75"><Link href="#">Testimonial</Link></li>
            </ul>
        </nav>
        <Link href="#">
            <div className="inline-flex items-center justify-center  w-40  h-16 px-9 py-6 bg-primary rounded-lg transition hover:opacity-75">
                <button className="text-lg tracking-wide leading-relaxed text-white">Download</button>
            </div>
        </Link>
    </div>;
};

export default Navbar;
