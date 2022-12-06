import { createVendiaClient } from "@vendia/client";


export const client = createVendiaClient({
  apiUrl: `https://3sby81ep8k.execute-api.us-west-2.amazonaws.com/graphql/`,
  websocketUrl: `wss://63m1q9fn5f.execute-api.us-west-2.amazonaws.com/graphql`,
  apiKey: '4WCKjpwzEMk2u1s1uGGDBoSvg89vC243ew5RNgvz4kmc',
 });

export const { entities } = client;

// export entities to be used in Vendia.js search
export const ssUni = entities;