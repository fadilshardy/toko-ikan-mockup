import Image from 'next/image';
import * as React from 'react';

interface IAdvantageProps {
    icon: string;
    title: string;
    description: string;
}

const Advantage: React.FunctionComponent<IAdvantageProps> = ({ icon, title, description }) => {
    return <div className="border border-gray-200 p-20 flex flex-col items-center rounded-2xl">
        <div className="relative w-24 h-24">
            <Image src={icon} alt={title} layout="fill"></Image>
        </div>
        <h4 className="text-2xl py-4 text-center font-semibold">{title}</h4>
        <p className="text-lg text-neutral-500 leading tracking-wide text-center">{description}</p>
    </div>;
};

export default Advantage;
