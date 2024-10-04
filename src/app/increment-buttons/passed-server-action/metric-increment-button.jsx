'use client';

export function IncrementWithPassedServerAction({increment}){
    return <button style={{display: 'block'}} onClick={() => increment()}>increment with passed server action (works!)</button>
}