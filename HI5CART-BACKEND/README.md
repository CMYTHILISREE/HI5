# HI5CART Backend

Node.js + Express + MongoDB backend for the HI5CART frontend application.

## Setup

1. Copy `.env.example` to `.env`.
2. Set `MONGO_URI` to your MongoDB connection string.
3. Run `npm install`.
4. Run `npm run dev` to start in development mode.

## API Endpoints

- `GET /api/products` - List products
- `GET /api/products/:id` - Get product details
- `POST /api/products` - Create a product
- `PUT /api/products/:id` - Update a product
- `DELETE /api/products/:id` - Delete a product
- `POST /api/orders` - Create an order
- `GET /api/orders` - List all orders
- `GET /api/orders/:id` - Get order details

The backend seeds initial product data on first startup if the database is empty.
