import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL);

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const orders = await sql`SELECT * FROM orders ORDER BY created_at DESC`;
      res.status(200).json(orders);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else if (req.method === 'POST') {
    try {
      const { customer, items, total, paymentMethod, paymentStatus, rewardStars } = req.body;
      const result = await sql`
        INSERT INTO orders (customer, items, total, payment_method, payment_status, reward_stars)
        VALUES (${JSON.stringify(customer)}, ${JSON.stringify(items)}, ${total}, ${paymentMethod}, ${paymentStatus}, ${rewardStars})
        RETURNING *
      `;
      res.status(201).json(result[0]);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
