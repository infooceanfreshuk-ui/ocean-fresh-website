require('dotenv').config({ path: '.env.local' });
const fetch = require('node-fetch'); // Assuming node 18+ global fetch or we can use Node's fetch

async function run() {
  const domain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN;
  const token = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN;
  
  const endpoint = `https://${domain}/api/2023-10/graphql.json`;
  const query = `
    query {
      products(first: 3) {
        edges {
          node {
            title
          }
        }
      }
    }
  `;
  
  const res = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': token,
    },
    body: JSON.stringify({ query })
  });
  
  const data = await res.json();
  console.log(JSON.stringify(data, null, 2));
}

run().catch(console.error);
