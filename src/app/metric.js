import {Counter, register} from "prom-client";

export const metric = new Counter({
    name: 'simple_counter',
    help: 'Simple Counter',
    labelNames: ['source'],
    registers: [register]
});