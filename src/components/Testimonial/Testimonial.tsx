import Image from 'next/image';
import * as React from 'react';

interface ITestimonialProps {
    avatar: string;
    name: string;
    content: string;
    star: string | null;
}

const Testimonial: React.FunctionComponent<ITestimonialProps> = ({ avatar, name, content, star }) => {
    return (<div className="border border-gray-200 p-8 flex flex-col  rounded-2xl lg:w-1/4 w-full flex-shrink-0 overflow-hidden">
        <div className="flex w-full">
            <div className="flex  justify-between w-full items-center gap-4">
                <div className="relative w-14 h-14">
                    <Image src={avatar} alt={name} fill={true} className="object-cover" />
                </div>
                {star && <div className="relative w-32 h-6">
                    <Image src={star} alt="rating" fill={true} className="object-contain" />
                </div>}
            </div>
        </div>
        <h4 className="text-2xl py-4  font-semibold">{name}</h4>
        <div className="max-h-52 ">
            <p className="text-lg text-neutral-500 leading tracking-wide text-justify line-clamp-6" >{content}</p>
        </div>
    </div>);
};

export default Testimonial;
