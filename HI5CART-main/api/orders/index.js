import { NextResponse } from 'next/server';
import { db } from '@vercel/postgres';

export async function GET(request) {
  try {
    const client = await db.connect();
    const result = await client.sql`SELECT * FROM orders ORDER BY created_at DESC`;
    client.release();
    return NextResponse.json(result.rows);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { customer, items, total, paymentMethod, paymentStatus, rewardStars } = body;
    
    const client = await db.connect();
    const result = await client.sql`
      INSERT INTO orders (customer, items, total, payment_method, payment_status, reward_stars)
      VALUES (${JSON.stringify(customer)}, ${JSON.stringify(items)}, ${total}, ${paymentMethod}, ${paymentStatus}, ${rewardStars})
      RETURNING *
    `;
    client.release();
    
    return NextResponse.json(result.rows[0], { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
