import * as React from 'react';
import Advantage from './Advantage';

interface IAdvantagesProps {
}

const advantages = [
    { icon: "images/box.svg", title: "Kirim Ke Berbagai Negara", description: "A Lorem Ipsum is simply dummy text of the printing and typesetting industry" },
    { icon: "images/user-click.svg", title: "Mudah Di Gunakan", description: "A Lorem Ipsum is simply dummy text of the printing and typesetting industry" },
    { icon: "images/guard.svg", title: "Pengiriman Aman", description: "A Lorem Ipsum is simply dummy text of the printing and typesetting industry" }
]

const Advantages: React.FunctionComponent<IAdvantagesProps> = (props) => {
    return <section className="py-28 container mx-auto">
        <div className="flex flex-col items-center pb-28">
            <h2 className="font-bold text-4xl lg:text-5xl pb-8">Keunggulan kami</h2>
            <p className="font-medium text-neutral-400 max-w-xl mx-auto text-center">A Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's  standard dummy text ever since the 1500s.</p>
        </div>
        <div className="flex gap-8 flex-col lg:flex-row px-2">
            {advantages.map(advantage => (
                <Advantage key={advantage.icon} icon={advantage.icon} title={advantage.title} description={advantage.description} />
            ))}
        </div>
    </section>;
};

export default Advantages;
