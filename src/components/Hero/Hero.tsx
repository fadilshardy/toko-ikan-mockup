import Image from 'next/image';
import * as React from 'react';

interface IHeroProps {
}

const Hero: React.FunctionComponent<IHeroProps> = (props) => {
    return <section>
        <div className="flex justify-between">
            <div>
                <h1>Kirim berbagi jenis ikan dengan mudah</h1>
                <p>A Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
            </div>
            <div className="relative">
                <Image src="/images/mobileapp-hero.png" alt="mobile app hero" loading="lazy" fill={true} />
            </div>
        </div>
    </section>;
};

export default Hero;
