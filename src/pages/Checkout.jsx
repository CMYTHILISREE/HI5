import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCartItems, selectTotalPrice, clearCart, updateQty } from '../store/slices/cartSlice';
import { addOrder, selectRewardStars, selectUser } from '../store/slices/authSlice';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import PriceDisplay from '../components/PriceDisplay';
import { Gift, Minus, Plus, Star } from 'lucide-react';

const SHOP_OWNER_WHATSAPP_NUMBER = '918884695310';

export default function Checkout() {
  const cartItems = useSelector(selectCartItems);
  const totalPrice = useSelector(selectTotalPrice);
  const user = useSelector(selectUser);
  const rewardStars = useSelector(selectRewardStars);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showReward, setShowReward] = useState(false);
  const [earnedStars, setEarnedStars] = useState(0);
  const [customer, setCustomer] = useState({
    name: user?.name || '',
    address: '',
    phone: '',
    email: user?.email || '',
  });

  const handleCustomerChange = (field, value) => {
    setCustomer((prev) => ({ ...prev, [field]: value }));
  };

  const handlePlaceOrder = (event) => {
    event.preventDefault();

    if (!customer.name.trim() || !customer.address.trim() || !customer.phone.trim()) {
      alert('Please enter name, address, and phone number.');
      return;
    }

    const order = {
      id: Date.now(),
      date: new Date().toLocaleString(),
      items: cartItems,
      total: totalPrice,
      customer,
      paymentMethod: 'Cash on Delivery',
      paymentStatus: 'Pending',
      rewardStars: 1,
    };

    const productLines = cartItems
      .map((item, index) => `${index + 1}. ${item.name}%0AQty: ${item.qty}%0AMRP: ₹${item.mrp}%0ASelling Price: ₹${item.price}%0ADiscount: ${item.discountPercentage}% OFF%0ASubtotal: ₹${item.price * item.qty}`)
      .join('%0A%0A');

    const whatsappMessage = `New Hi5Cart Order%0A%0AOrder ID: ${order.id}%0ADate: ${order.date}%0A%0ACustomer Details:%0AName: ${customer.name}%0APhone: ${customer.phone}%0AEmail: ${customer.email || 'Not provided'}%0AAddress: ${customer.address}%0A%0AProducts:%0A${productLines}%0A%0ATotal: ₹${totalPrice}%0APayment: Cash on Delivery%0APayment Status: Pending`;

    if (user) {
      dispatch(addOrder(order));
      setEarnedStars(rewardStars + 1);
    }

    window.open(`https://wa.me/${SHOP_OWNER_WHATSAPP_NUMBER}?text=${whatsappMessage}`, '_blank', 'noopener,noreferrer');
    dispatch(clearCart());
    setShowReward(true);
    setTimeout(() => {
      navigate('/');
    }, 3200);
  };

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,_#ffffff_0%,_#fffaf0_42%,_#f8fbff_100%)]">
      <Header />
      {showReward && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/60 px-4 backdrop-blur-sm">
          <div className="relative w-full max-w-md overflow-hidden rounded-[32px] border border-yellow-200 bg-white p-7 text-center shadow-[0_24px_80px_rgba(15,23,42,0.28)]">
            <div className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-yellow-300/30 blur-2xl" />
            <div className="absolute -right-10 -bottom-10 h-32 w-32 rounded-full bg-blue-300/30 blur-2xl" />
            <div className="relative mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-[linear-gradient(135deg,_#fef3c7_0%,_#fde68a_42%,_#fbbf24_100%)] shadow-2xl shadow-yellow-400/30">
              <Star className="order-reward-star h-14 w-14 fill-yellow-500 text-yellow-600" />
            </div>
            <h2 className="relative text-3xl font-black text-slate-900">Order Reward Added!</h2>
            <p className="relative mt-2 text-sm font-semibold text-slate-600">
              Your order was sent successfully on WhatsApp.
            </p>
            {user ? (
              <div className="relative mt-5 rounded-2xl bg-[linear-gradient(90deg,_#fff7ed_0%,_#fef9c3_55%,_#eff6ff_100%)] p-4">
                <p className="text-sm font-black text-slate-800">Reward Progress</p>
                <p className="mt-1 text-2xl font-black text-yellow-600">{earnedStars}/5 Orders</p>
                {earnedStars >= 5 ? (
                  <p className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-green-100 px-3 py-2 text-sm font-black text-green-700">
                    <Gift size={18} />
                    Surprise gift unlocked after 5 orders! We will send it to you.
                  </p>
                ) : (
                  <p className="mt-2 text-sm font-semibold text-slate-600">
                    Complete 5 orders and get a surprise gift.
                  </p>
                )}
              </div>
            ) : (
              <p className="relative mt-5 rounded-2xl bg-orange-50 p-4 text-sm font-bold text-orange-700">
                Login to save order rewards and unlock your surprise gift.
              </p>
            )}
          </div>
        </div>
      )}
      <div className="container mx-auto p-4 md:p-6">
      <h1 className="mb-6 bg-[linear-gradient(90deg,_#ef4444_0%,_#f59e0b_34%,_#22c55e_68%,_#2563eb_100%)] bg-clip-text text-3xl font-black text-transparent">Checkout</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-orange-100 bg-white p-5 shadow-[0_12px_34px_rgba(15,23,42,0.08)]">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Order Summary</h2>
          {cartItems.map((item) => (
            <div key={item.id} className="my-3 flex items-center justify-between rounded-2xl border border-orange-100 bg-orange-50/30 p-3">
              <div>
                <p className="font-semibold text-slate-900">{item.name}</p>
                <PriceDisplay product={item} size="sm" />
                <div className="mt-2 flex items-center gap-2">
                  <button
                    onClick={() => dispatch(updateQty({ id: item.id, qty: item.qty - 1 }))}
                    className="p-1 bg-red-100 hover:bg-red-200 rounded text-red-600"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="px-3 py-1 bg-gray-100 rounded">{item.qty}</span>
                  <button
                    onClick={() => dispatch(updateQty({ id: item.id, qty: item.qty + 1 }))}
                    className="p-1 bg-green-100 hover:bg-green-200 rounded text-green-600"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>
              <p className="font-bold text-slate-900">₹{item.price * item.qty}</p>
            </div>
          ))}
          <div className="mt-4 flex items-center justify-between rounded-2xl bg-[linear-gradient(90deg,_#fff7ed_0%,_#fef9c3_55%,_#eff6ff_100%)] p-4 text-xl font-black">
            <p>Total:</p>
            <p>₹{totalPrice}</p>
          </div>
        </div>
        <div className="rounded-3xl border border-orange-100 bg-white p-5 shadow-[0_12px_34px_rgba(15,23,42,0.08)]">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Shipping & Payment</h2>
          <form className="space-y-4" onSubmit={handlePlaceOrder}>
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input type="text" value={customer.name} onChange={(event) => handleCustomerChange('name', event.target.value)} className="w-full rounded-xl border border-orange-100 p-3 outline-none focus:border-orange-300 focus:ring-2 focus:ring-orange-100" placeholder="Your Name" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Address</label>
              <textarea value={customer.address} onChange={(event) => handleCustomerChange('address', event.target.value)} className="w-full rounded-xl border border-orange-100 p-3 outline-none focus:border-orange-300 focus:ring-2 focus:ring-orange-100" placeholder="Your Address"></textarea>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Phone</label>
              <input type="tel" value={customer.phone} onChange={(event) => handleCustomerChange('phone', event.target.value)} className="w-full rounded-xl border border-orange-100 p-3 outline-none focus:border-orange-300 focus:ring-2 focus:ring-orange-100" placeholder="Your Phone" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input type="email" value={customer.email} onChange={(event) => handleCustomerChange('email', event.target.value)} className="w-full rounded-xl border border-orange-100 p-3 outline-none focus:border-orange-300 focus:ring-2 focus:ring-orange-100" placeholder="Your Email" />
            </div>
            <div className="rounded-2xl border border-green-100 bg-green-50 p-4">
              <p className="text-sm font-bold text-green-700">Payment Option</p>
              <p className="mt-1 text-lg font-black text-slate-900">Cash on Delivery</p>
              <p className="text-sm text-slate-600">Pay after receiving your order.</p>
            </div>
            <button
              type="submit"
              className="mt-2 w-full rounded-xl bg-[linear-gradient(90deg,_#22c55e_0%,_#16a34a_48%,_#2563eb_100%)] px-4 py-3 font-black text-white shadow-lg shadow-green-500/25 transition hover:brightness-110"
            >
              Place Order on WhatsApp
            </button>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
}