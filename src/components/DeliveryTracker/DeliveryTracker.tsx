import * as React from 'react';

interface IDeliveryTrackerProps {
}

const DeliveryTracker: React.FunctionComponent<IDeliveryTrackerProps> = (props) => {
    return (
        <div className="h-full lg:h-80  bg-cover bg-center text-white w-full bg-[url('https://i.imgur.com/msS6T0b.png')]">
            <div className=" flex flex-col items-center py-6 h-full">
                <div className="h-full w-10/12 rounded-lg pb-6">
                    <h3 className="pb-8 text-center lg:text-4xl text-3xl font-semibold leading-10 tracking-wide">Lacak Pengiriman Anda</h3>
                    <p className="mb-2 leading-7 md:text-lg text-sm text-justify">A Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
                </div>

                <div className="flex h-full w-10/12 items-center justify-between gap-x-6">
                    <input className="mr-2 h-16 w-full rounded-lg px-4 py-2 pl-4 lg:text-lg font-medium tracking-wide placeholder:text-zinc-400 text-gray-900 focus:outline-none text-sm" type="text" placeholder="Lacak Pengiriman" />
                    <button className="h-16 w-44 rounded-lg bg-[#F2572E] lg:text-xl tracking-wide">Lacak</button>
                </div>
            </div>
        </div>)
};

export default DeliveryTracker;
