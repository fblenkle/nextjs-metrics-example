import {register} from 'prom-client';
import {NextResponse} from "next/server";
import {metric} from "../../metric";

export const GET = async () => {
    return new NextResponse(await register.metrics(), {
        headers: {
            'Content-Type': register.contentType
        }
    });
}

export const POST = async () => {
    await metric.labels('api').inc();
}