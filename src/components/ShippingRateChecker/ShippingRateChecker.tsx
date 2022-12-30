import * as React from 'react';

interface IShippingRateCheckerProps {
}

const ShippingRateChecker: React.FunctionComponent<IShippingRateCheckerProps> = (props) => {
    return <section>
        <h3>Cek Tarif Pengirman Anda</h3>
        <div className="flex justify-between">
            <input type="text" placeholder='Origin' />
            <input type="text" placeholder='Destination' />
        </div>
        <button>Check</button>
    </section>;
};

export default ShippingRateChecker;
