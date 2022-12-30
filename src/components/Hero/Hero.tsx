import Image from 'next/image';
import * as React from 'react';

interface IHeroProps {
}

const Hero: React.FunctionComponent<IHeroProps> = (props) => {
    return <section>
        <div className="flex justify-between pt-32">
            <div className="w-full">
                <h1 className="font-bold text-5xl">Kirim berbagi jenis ikan dengan mudah</h1>
                <p className="text-[#807D7D] pt-8">A Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                <div className="flex pt-16 gap-6">
                    <div className="relative w-52 h-16">
                        <Image src="/images/googleplay-button.svg" alt="Google Playstore Button" loading="lazy" fill={true} />
                    </div>
                    <div className="relative w-52  h-16">
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
            <div className=" w-full">
                <div className="relative h-[920px] w-full items-start justify-start">
                    <img src="/images/group 108.png" className="absolute top-0 -right-44 h-[414px] w-full object-fill  overflow-hidden" alt="Background image" />
                    <img src="/images/floating-fish.png" className="absolute -left-2 top-0 h-[461px] w-[327px] object-contain" alt="Foreground image" />
                    <img src="/images/mobileapp-hero.png" className="absolute bottom-64 left-36 h-[887px] w-[980px] object-contain" alt="Foreground image" />
                </div>
            </div>
        </div >
    </section >;
};

export default Hero;
