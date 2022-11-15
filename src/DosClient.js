import { createVendiaClient } from "@vendia/client";


export const client = createVendiaClient({
   apiUrl: `https://ur64lo42j6.execute-api.us-west-2.amazonaws.com/graphql/`,
   websocketUrl: `wss://2h2029xx32.execute-api.us-west-2.amazonaws.com/graphql`,
   apiKey: '944VahNf5EmsjVrthz8Nw8p68sXwPvWHUL6YMZD1enqw',
 });

export const { entities } = client;
export const dosUni = entities;