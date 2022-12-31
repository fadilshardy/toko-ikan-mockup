import Image from 'next/image';
import * as React from 'react';

interface ITrackingStatusProps {
}

const TrackingStatus: React.FunctionComponent<ITrackingStatusProps> = (props) => {
    return (<section className="container mx-auto">
        <div className="flex pt-64 lg:pt-32 lg:flex-row flex-col pb-64">
            <div className="w-full flex flex-col items-center lg:items-start mb-32 lg:mb-0 lg:order-last lg:pl-44">
                <div className="max-w-xl flex items-center flex-col justify-center h-full">
                    <h2 className="font-bold lg:text-5xl text-4xl  tracking-wide lg:leading-[72px] leading-10 text-center lg:text-start">Lacak status pengiriman anda</h2>
                    <p className="text-netural pt-8 text-justify px-2">
                        A Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's  standard dummy text ever since the 1500s, when an unknown.
                        A Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                </div>
            </div>
            <div className="relative h-full w-full">
                <div className="absolute top-0 lg:right-10 -right-10 h-[396px] lg:min-w-[calc(120%)] min-w-[calc(100vh+10vh)] ">
                    <Image src="/images/group 107.png" alt="background pattern" fill={true} quality="100" />
                </div>
                <div className="absolute right-5 lg:-right-32 top-0 h-96 lg:w-[324px]  w-44 object-contain">
                    <Image src="/images/floating-fish-3.png" alt="background pattern" fill={true} quality="100" className="object-contain" />
                </div>
                <div className="absolute -top-40 right-16 lg:right-28 h-[727px] w-full">
                    <Image src="/images/mobile-1.png" alt="Mobile showcase" fill={true} quality="100" className="object-contain" />
                </div>
            </div>
        </div>
    </section >)
};

export default TrackingStatus;
