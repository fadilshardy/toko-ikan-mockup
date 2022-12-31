import Image from 'next/image';
import * as React from 'react';

interface IDownloadMobileAppProps {
}

const DownloadMobileApp: React.FunctionComponent<IDownloadMobileAppProps> = (props) => {
  return <section className=" relative bg-[url('https://i.imgur.com/23XfrmQ.png')] h-full w-full py-24">
    <div className="container mx-auto text-white tracking-[0.016em] ">
      <div className="lg:w-1/2 w-full flex flex-col items-center lg:items-start lg:mb-0 text-center lg:text-start">
        <h2 className="font-bold  text-5xl leading-[70px]">Available and Download Anytime!</h2>
        <p className=" pt-8 leading-7 font-medium ">A Lorem Ipsum is simply dummy text of the printing and </p>
        <div className="flex pt-16 gap-6 ">
          <div className="relative lg:w-52 lg:h-16 w-36 h-12">
            <Image src="/images/googleplay-button.svg" alt="Google Playstore Button" loading="lazy" fill={true} />
          </div>
          <div className="relative lg:w-52 lg:h-16 w-36 h-12">
            <Image src="/images/applestore-button.svg" alt="Applestore Button" loading="lazy" fill={true} />
          </div>
        </div>

      </div>
    </div>
    <div className="hidden lg:block absolute bottom-0 left-96 min-h-[calc(120%)] w-full">
      <Image src="/images/courier.png" alt="background pattern" fill={true} quality="100" className="object-contain" />
    </div>
  </section >;
};

export default DownloadMobileApp;
