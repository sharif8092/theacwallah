import axios from 'axios';
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

// WooCommerce REST API Configuration
const WC_URL = "https://cns.theacwallah.com";
const WC_CK = "ck_ea8510453f4169d91e57adfd1cdb63cb6599e8b9";
const WC_CS = "cs_79327554c8d9bc9cfd603f5bc632ef45eb81d2e6";

export const wooApi = new WooCommerceRestApi({
  url: WC_URL,
  consumerKey: WC_CK,
  consumerSecret: WC_CS,
  version: "wc/v3",
  queryStringAuth: true // Use true for standard HTTPS (needed for some servers)
});

// WordPress REST API (Blog)
export const WP_API_URL = `${WC_URL}/wp-json/wp/v2`;

// JWT Auth Endpoint (Requires JWT Auth plugin)
export const AUTH_URL = `${WC_URL}/wp-json/jwt-auth/v1/token`;

// API helper functions
export const api = {
  // Blog
  getPosts: async (page = 1, perPage = 10) => {
    const response = await axios.get(`${WP_API_URL}/posts`, {
      params: {
        page,
        per_page: perPage,
        _embed: true,
      },
    });
    return response.data;
  },

  getPostBySlug: async (slug: string) => {
    const response = await axios.get(`${WP_API_URL}/posts`, {
      params: {
        slug,
        _embed: true,
      },
    });
    return response.data[0];
  },

  // Authentication (JWT)
  login: async (username: string, password: string) => {
    const response = await axios.post(AUTH_URL, {
      username,
      password,
    });
    return response.data;
  },

  // Signup (WC Customer)
  signup: async (customerData: any) => {
    const response = await wooApi.post("customers", customerData);
    return response.data;
  },

  // WooCommerce Orders (Replacement for CoCart Checkout)
  createOrder: async (orderData: any) => {
    const response = await wooApi.post("orders", orderData);
    return response.data;
  },
};

export default api;
