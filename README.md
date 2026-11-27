# KICKVERSE

Next.js storefront backed by MultiStore Commerce.

## Run locally

1. In the MultiStore Supabase project, apply `backend/supabase/003_storefront_origin.sql` after the existing migrations. Start the updated MultiStore API and dashboard.
2. Set the values from `.env.example` in `.env.local`. Use the API base URL, this storefront's homepage URL, and the Cloudinary cloud name used by MultiStore.
3. Run `npm install` and `npm run dev -- --port 3001`. The default storefront URL is `http://localhost:3001`.
4. Sign in to MultiStore, create or select a store, and paste the storefront homepage URL into **Connect storefront** on the Overview tab. Save it and publish products there.

Store owners and admins save the URL through `PATCH /stores/:id/storefront` with `{"url":"https://shop.example.com"}`. The storefront reads `GET /public/storefront/products?url=...` on each page request. Set `COMMERCE_STOREFRONT_URL` to the deployed homepage origin. If you prefer to connect by slug, remove that setting and set `COMMERCE_STORE_SLUG` instead.

The catalog serves up to 100 published products with names, descriptions, prices in INR minor units, stock, and Cloudinary image IDs. Manage those fields in MultiStore. Shoppers can browse and filter at `/shop`, open individual products at `/products/:id`, manage their browser-persisted bag at `/cart`, and review their subtotal at `/checkout`. Order submission and payment require a customer-facing backend.
