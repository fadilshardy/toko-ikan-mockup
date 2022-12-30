import * as React from 'react';
import Advantage from './Advantage';

interface IAdvantagesProps {
}

const advantages = [
    { icon: "images/box.svg", title: "Kirim Ke Berbagai Negara", description: "A Lorem Ipsum is simply dummy text of the printing and typesetting industry" },
    { icon: "images/user-click.svg", title: "Kirim Ke Berbagai Negara", description: "A Lorem Ipsum is simply dummy text of the printing and typesetting industry" },
    { icon: "images/guard.svg", title: "Kirim Ke Berbagai Negara", description: "A Lorem Ipsum is simply dummy text of the printing and typesetting industry" }
]

const Advantages: React.FunctionComponent<IAdvantagesProps> = (props) => {
    return <section>
        <div>
            <h2>Keunggulan kami</h2>
            <p>A Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's  standard dummy text ever since the 1500s.</p>
        </div>
        <ul>
            {advantages.map(advantage => (
                <Advantage key={advantage.icon} icon={advantage.icon} title={advantage.title} description={advantage.description} />
            ))}
        </ul>
    </section>;
};

export default Advantages;
