import * as React from 'react';

interface IShippingRateCheckerProps {
}

const ShippingRateChecker: React.FunctionComponent<IShippingRateCheckerProps> = (props) => {
    return (<div className="h-full lg:h-80 bg-cover bg-center text-white w-full bg-[url('https://i.imgur.com/r1WNInE.png')]">
        <div className="flex flex-col items-center py-6 h-full">
            <div className="h-full w-10/12 rounded-lg pb-6">
                <h3 className="pb-8 text-center lg:text-4xl text-3xl font-semibold leading-10 tracking-wide">Cek Tarif Pengirman Anda</h3>
                <div className="flex justify-between lg:gap-x-8">
                    <input className="mr-2 h-16 w-full rounded-lg px-4 py-2 pl-4 lg:text-lg font-medium tracking-wide placeholder:text-zinc-400 text-gray-900 focus:outline-none text-sm" type="text" placeholder="Origin" />
                    <input className="mr-2 h-16 w-full rounded-lg px-4 py-2 pl-4 lg:text-lg font-medium tracking-wide placeholder:text-zinc-400 text-gray-900 focus:outline-none text-sm" type="text" placeholder="Destination" />

                </div>
            </div>
            <div className="flex h-full w-10/12 items-center justify-between">
                <button className="h-16 w-full rounded-lg bg-[#F2572E] text-xl tracking-wide">Check</button>
            </div>
        </div>
    </div>);
};

export default ShippingRateChecker;
