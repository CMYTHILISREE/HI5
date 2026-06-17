import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import PriceDisplay from '../components/PriceDisplay';
import { selectIsAuthenticated, selectOrders, selectUser } from '../store/slices/authSlice';

export default function Orders() {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const orders = useSelector(selectOrders);
  const user = useSelector(selectUser);

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,_#ffffff_0%,_#fffaf0_42%,_#f8fbff_100%)]">
      <Header />
      <div className="max-w-6xl mx-auto p-6">
        <div className="bg-white p-8 rounded-3xl shadow-[0_12px_34px_rgba(15,23,42,0.08)] border border-orange-100">
          <h1 className="mb-4 bg-[linear-gradient(90deg,_#ef4444_0%,_#f59e0b_34%,_#22c55e_68%,_#2563eb_100%)] bg-clip-text text-3xl font-black text-transparent">My Orders</h1>
          {!isAuthenticated ? (
            <div className="space-y-4 text-gray-600">
              <p>You must be logged in to view your saved orders.</p>
              <Link
                to="/login"
                className="inline-flex items-center rounded-xl bg-red-500 px-4 py-3 text-white hover:bg-red-600"
              >
                Go to Login
              </Link>
            </div>
          ) : (
            <>
              <p className="text-sm text-gray-600 mb-6">Welcome back, <span className="font-semibold">{user?.name}</span>. Your recent orders appear below.</p>
              {orders.length === 0 ? (
                <div className="rounded-3xl border border-dashed border-orange-200 bg-orange-50/40 p-8 text-center text-gray-600">
                  <p className="text-lg font-medium mb-2">No orders yet</p>
                  <p>Place an order from your cart to see it here.</p>
                  <Link
                    to="/products"
                    className="mt-4 inline-flex items-center rounded-xl bg-red-500 px-4 py-3 text-white hover:bg-red-600"
                  >
                    Shop Products
                  </Link>
                </div>
              ) : (
                <div className="space-y-6">
                  {orders.map((order) => (
                    <div key={order.id} className="rounded-3xl border border-orange-100 bg-white p-6 shadow-sm">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                        <div>
                          <p className="text-sm text-gray-500">Order ID: {order.id}</p>
                          <p className="text-lg font-semibold">{order.date}</p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <p className="rounded-full bg-green-100 px-4 py-2 text-sm font-bold text-green-700">
                            {order.paymentMethod || 'Cash on Delivery'}
                          </p>
                          <p className="rounded-full bg-[linear-gradient(90deg,_#ef4444_0%,_#f59e0b_45%,_#22c55e_100%)] px-4 py-2 text-sm font-bold text-white">
                            ₹{order.total}
                          </p>
                        </div>
                      </div>
                      {order.customer && (
                        <div className="mt-5 rounded-2xl border border-blue-100 bg-blue-50/40 p-4">
                          <h3 className="mb-2 text-sm font-black uppercase tracking-wide text-blue-700">Customer Details</h3>
                          <div className="grid gap-2 text-sm text-slate-700 sm:grid-cols-2">
                            <p><span className="font-bold">Name:</span> {order.customer.name}</p>
                            <p><span className="font-bold">Phone:</span> {order.customer.phone}</p>
                            <p><span className="font-bold">Email:</span> {order.customer.email || 'Not provided'}</p>
                            <p><span className="font-bold">Payment Status:</span> {order.paymentStatus || 'Pending'}</p>
                            <p className="sm:col-span-2"><span className="font-bold">Address:</span> {order.customer.address}</p>
                          </div>
                        </div>
                      )}
                      <div className="mt-6 grid gap-4 sm:grid-cols-2">
                        {order.items.map((item) => (
                          <div key={item.id} className="rounded-3xl bg-orange-50/40 p-4">
                            <p className="font-semibold">{item.name}</p>
                            <p className="text-sm text-gray-600">Qty: {item.qty}</p>
                            <PriceDisplay product={item} size="sm" />
                            <p className="text-sm font-bold text-slate-900">Subtotal: ₹{item.price * item.qty}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
