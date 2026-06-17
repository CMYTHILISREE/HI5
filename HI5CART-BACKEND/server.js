import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
import connectDB from './config/db.js';
import productRoutes from './routes/products.js';
import orderRoutes from './routes/orders.js';
import seedInitialProducts from './utils/seedProducts.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

const categoriesDir = path.resolve(process.cwd(), '../HI5CART-main/src/assets/categories');
const assetsRootDir = path.resolve(process.cwd(), '../HI5CART-main/src/assets');
app.use('/images', express.static(categoriesDir));
app.use('/images', express.static(assetsRootDir));

app.get('/', (req, res) => {
  res.json({ message: 'HI5CART Backend is running' });
});

app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);

const PORT = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB();
    await seedInitialProducts();
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Startup error:', error);
    process.exit(1);
  }
};

start();
