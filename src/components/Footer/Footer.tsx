import Image from 'next/image';
import * as React from 'react';

interface IFooterProps {
}

const Footer: React.FunctionComponent<IFooterProps> = () => {
    return <footer className="bg-white">
        <div
            className="container px-4 py-16 mx-auto space-y-8 sm:px-6 lg:space-y-16 lg:px-8"
        >
            <div className="flex justify-center items-center flex-col lg:flex-row">
                <div className="flex flex-col items-center lg:items-start px-2">
                    <div className="relative w-36 h-16">
                        <Image src="/images/JBG Logo.png" layout="fill" alt="JBG Logo" className="object-contain" />
                    </div>

                    <p className="max-w-xl mt-4 text-netural text-justify ">
                        A Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s  standard.
                    </p>
                    <ul className="flex gap-5 mt-8">
                        <li>
                            <a
                                className="text-gray-700 transition hover:opacity-75"
                            >
                                <div className="relative w-12 h-12">
                                    <Image src="/images/fb-icon.png" layout="fill" alt="Facebook Logo" className="object-contain" />
                                </div>
                            </a>
                        </li>
                        <li>
                            <a
                                className="text-gray-700 transition hover:opacity-75"
                            >
                                <div className="relative w-12 h-12">
                                    <Image src="/images/twitter-icon.png" layout="fill" alt="Twitter Logo" className="object-contain" />
                                </div>
                            </a>
                        </li>

                        <li>
                            <a
                                className="text-gray-700 transition hover:opacity-75"
                            >
                                <div className="relative w-12 h-12">
                                    <Image src="/images/instagram-icon.png" layout="fill" alt="Instagram Logo" className="object-contain" />
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>

                <div
                    className="flex justify-evenly w-full flex-col pt-4 lg:pt-0 lg:flex-row"
                >
                    <div>
                        <p className="font-bold text-2xl">Menu Bantuan</p>
                        <nav className="mt-4 text-netural">
                            <ul className="space-y-4 text-lg">
                                <li>
                                    <a href="#" className=" transition hover:opacity-75">
                                        Keunggulan
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className="transition hover:opacity-75">
                                        Fitur Aplikasi
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className="transition hover:opacity-75">
                                        Testimoni
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div>
                        <p className="font-bold text-2xl">Informasi kontak</p>
                        <nav className="mt-4 text-netural">
                            <ul className="space-y-4 text-lg">
                                <li>
                                    <a href="#" className=" transition hover:opacity-75">
                                        0812-9797-1227
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className="transition hover:opacity-75">
                                        0812-9797-1227
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className="transition hover:opacity-75">
                                        Jbgtranshipping@gmail.com
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>

                </div>
            </div>

            <p className="text-lg text-netural text-center ">
                All rights reserved@2022
            </p>
        </div>
    </footer>

};

export default Footer;
