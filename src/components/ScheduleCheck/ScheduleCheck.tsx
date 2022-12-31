import Image from 'next/image';
import * as React from 'react';

interface IScheduleCheckProps {
}

const ScheduleCheck: React.FunctionComponent<IScheduleCheckProps> = (props) => {
    return (<section className="container mx-auto py-32">
        <div className="flex lg:justify-between pt-32 lg:flex-row flex-col pb-40">
            <div className="w-full flex flex-col items-center lg:items-start mb-32 lg:mb-0">
                <div className="max-w-lg flex items-center flex-col justify-center h-full">
                    <h2 className="font-bold lg:text-5xl text-4xl tracking-wide lg:leading-[72px] leading-10 text-center lg:text-start">Cek schedule pengiriman anda</h2>
                    <p className="text-netural pt-8 text-justify px-2">A Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s  standard.</p>
                </div>
            </div>
            <div className="w-full">
                <div className="relative h-full w-full">
                    <div className="absolute top-0 lg:left-10 -left-10 h-[396px] lg:min-w-[calc(120%)] min-w-[calc(100vh+10vh)] ">
                        <Image src="/images/pattern-right.png" alt="background pattern" layout="fill" quality="100" />
                    </div>
                    <div className="absolute left-5 lg:-left-28 top-0 h-96 w-44 lg:w-[372px]">
                        <Image src="/images/floating-fish-4.png" alt="background pattern" layout="fill" quality="100" className="object-contain" />
                    </div>
                    <div className="absolute -top-40 lg:left-28 -right-16 h-[727px] w-full">
                        <Image src="/images/mobile-3.png" alt="Mobile showcase" layout="fill" quality="100" className="object-contain" />
                    </div>
                </div>
            </div>
        </div>
    </section>);
};

export default ScheduleCheck;
