import Image from 'next/image';
import * as React from 'react';

interface IAdvantageProps {
    icon: string;
    title: string;
    description: string;
}

const Advantage: React.FunctionComponent<IAdvantageProps> = ({ icon, title, description }) => {
    return <div>
        <div className="relative">
            <Image src={icon} alt={title} fill={true}></Image>
        </div>
        <h4>{title}</h4>
        <p>{description}</p>
    </div>;
};

export default Advantage;
