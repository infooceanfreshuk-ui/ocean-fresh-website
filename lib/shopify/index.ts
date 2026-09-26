import { getProductQuery, getProductsQuery } from './queries';
import { addToCartMutation, createCartMutation, getCartQuery, removeFromCartMutation } from './mutations';

const domain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN;
const storefrontAccessToken = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN;

async function shopifyFetch<T>({
  query,
  variables,
}: {
  query: string;
  variables?: any;
}): Promise<{ status: number; body: T } | never> {
  const endpoint = `https://${domain}/api/2024-04/graphql.json`;

  try {
    const result = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': storefrontAccessToken!,
      },
      body: JSON.stringify({
        ...(query && { query }),
        ...(variables && { variables }),
      }),
      cache: 'no-store', // Disable caching for now to avoid stale data
    });

    const body = await result.json();

    if (body.errors) {
      throw body.errors[0];
    }

    return {
      status: result.status,
      body,
    };
  } catch (error) {
    console.error('Error fetching from Shopify API:', error);
    throw error;
  }
}

export async function getProducts() {
  const res = await shopifyFetch<any>({
    query: getProductsQuery,
    variables: { first: 10 },
  });

  return res.body?.data?.products?.edges.map((edge: any) => edge.node) || [];
}

export async function getProduct(handle: string) {
  const res = await shopifyFetch<any>({
    query: getProductQuery,
    variables: { handle },
  });

  return res.body?.data?.product;
}

export async function createCart() {
  const res = await shopifyFetch<any>({
    query: createCartMutation,
  });

  return res.body?.data?.cartCreate?.cart;
}

export async function addToCart(cartId: string, lines: { merchandiseId: string; quantity: number }[]) {
  const res = await shopifyFetch<any>({
    query: addToCartMutation,
    variables: {
      cartId,
      lines,
    },
  });

  return res.body?.data?.cartLinesAdd?.cart;
}

export async function getCart(cartId: string) {
  const res = await shopifyFetch<any>({
    query: getCartQuery,
    variables: { cartId },
  });

  return res.body?.data?.cart;
}
