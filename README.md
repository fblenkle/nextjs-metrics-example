This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Valid URLs

### http://localhost:3000

Shows content of simple counter metric with buttons to increment
* one uses server action from client component
* one uses server action passed from RSC to client component

### http://localhost:3000/api/metrics
GET endpoint to read metrics for prometheus
POST endpoint to allow increment