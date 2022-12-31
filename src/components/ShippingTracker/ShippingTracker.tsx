import * as React from 'react';
import DeliveryTracker from '../DeliveryTracker/DeliveryTracker';
import ShippingRateChecker from '../ShippingRateChecker/ShippingRateChecker';

interface IShippingTrackerProps {
}

const ShippingTracker: React.FunctionComponent<IShippingTrackerProps> = (props) => {
    return <section className="flex h-full flex-col lg:flex-row lg:justify-between">
        <DeliveryTracker />
        <ShippingRateChecker />
    </section>;
};

export default ShippingTracker;
