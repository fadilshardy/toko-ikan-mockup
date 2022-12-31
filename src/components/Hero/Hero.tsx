import Image from 'next/image';
import * as React from 'react';

interface IHeroProps {
}

const Hero: React.FunctionComponent<IHeroProps> = (props) => {
    return <section>
        <div className="flex lg:justify-between pt-32 lg:flex-row flex-col pb-40">
            <div className="w-full flex flex-col items-center lg:items-start mb-32 lg:mb-0">
                <div className="w-5/6">
                    <h1 className="font-bold text-5xl">Kirim berbagi jenis ikan dengan mudah</h1>
                    <p className="text-[#807D7D] pt-8 ">A Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                </div>
                <div className="flex pt-16 gap-6">
                    <div className="relative w-52 h-16">
                        <Image src="/images/googleplay-button.svg" alt="Google Playstore Button" loading="lazy" fill={true} />
                    </div>
                    <div className="relative w-52 h-16">
                        <Image src="/images/applestore-button.svg" alt="Applestore Button" loading="lazy" fill={true} />
                    </div>
                </div>
                <div className="flex gap-12 pt-14">
                    <div className="flex flex-col">
                        <span className="text-primary font-bold text-4xl">1.9k+</span>
                        <span className="text-neutral-500 font-medium text-lg">Active Users</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-primary font-bold text-4xl">20+</span>
                        <span className="text-neutral-500 font-medium text-lg">New Features</span>
                    </div>
                </div>
            </div>
            <div className="w-full">
                <div className="relative h-full w-full">
                    <div className=" relative top-0 -right-44 h-4/5 min-w-[calc(120%)]">
                        <Image src="/images/group 108.png" alt="background pattern" fill={true} quality="100" />
                    </div>
                    <div className="absolute -left-2 top-0 h-96 w-[327px] object-contain">
                        <Image src="/images/floating-fish.png" alt="background pattern" fill={true} quality="100" />
                    </div>
                    <div className="absolute -bottom-40 left-28 h-[887px] w-full z-10">
                        <Image src="/images/mobileapp-hero.png" alt="background pattern" fill={true} quality="100" className="object-contain" />
                    </div>
                </div>
            </div>
        </div >
    </section >
};

export default Hero;
