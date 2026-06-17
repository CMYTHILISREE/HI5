import express from 'express';
import Order from '../models/Order.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Unable to load orders', error: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) return res.status(404).json({ message: 'Order not found' });
    res.json(order);
  } catch (error) {
    res.status(500).json({ message: 'Unable to load order', error: error.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const { items, customer, totalPrice, totalItems } = req.body;

    if (!Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ message: 'Order items are required' });
    }

    const order = new Order({ items, customer, totalPrice, totalItems });
    const created = await order.save();
    res.status(201).json(created);
  } catch (error) {
    res.status(400).json({ message: 'Unable to create order', error: error.message });
  }
});

export default router;
