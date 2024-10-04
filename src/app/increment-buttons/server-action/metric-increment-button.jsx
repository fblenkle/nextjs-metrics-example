'use client';

import {increment} from "./metric-increment.server-action";

export function IncrementWithServerAction(){
    return <button style={{display: 'block'}} onClick={() => increment()}>increment with server action (does not work!)</button>
}