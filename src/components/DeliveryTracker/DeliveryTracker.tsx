import * as React from 'react';

interface IDeliveryTrackerProps {
}

const DeliveryTracker: React.FunctionComponent<IDeliveryTrackerProps> = (props) => {
    return <section>
        <h3>Lacak Pengiriman anda</h3>
        <p>A Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's  standard dummy text </p>
        <div className="flex justify-between">
            <input type="text" placeholder='Lacak Pengiriman' />
            <button>Lacak</button>
        </div>
    </section>;
};

export default DeliveryTracker;
