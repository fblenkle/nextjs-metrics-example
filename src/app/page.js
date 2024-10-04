import {metric} from "./metric";

import {IncrementWithServerAction} from "./increment-buttons/server-action/metric-increment-button";
import {IncrementWithPassedServerAction} from "./increment-buttons/passed-server-action/metric-increment-button";

export default async function Home() {
    const content = await metric.get();

    async function increment(){
        'use server';
        console.log('increment with passed server action');
        await metric.labels('page').inc();
    }

    return (
        <>
            <div>
                {JSON.stringify(content, null, 4)}
            </div>
            <IncrementWithServerAction/>
            <IncrementWithPassedServerAction increment={increment} />
        </>
    );
}
