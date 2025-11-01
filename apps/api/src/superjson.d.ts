// types/superjson.d.ts (or src/types/superjson.d.ts)
declare module 'superjson' {
  import type { SuperJSON } from 'superjson/dist/index';

  const superjson: SuperJSON;
  export default superjson;

  // If you use named exports, also re-export them:
  export * from 'superjson/dist/index';
}
