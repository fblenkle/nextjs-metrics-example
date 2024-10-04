'use server';

import {metric} from "../../metric";

export async function increment() {
    console.log('increment with server action');
    await metric.labels('page').inc();
}