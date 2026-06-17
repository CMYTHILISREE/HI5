import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import Header from '../components/Header';
import { login, selectIsAuthenticated } from '../store/slices/authSlice';

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }

    dispatch(
      login({
        name: email.split('@')[0] || email,
        email,
      })
    );
    navigate('/orders');
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <div className="max-w-xl mx-auto p-6">
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-200">
          <h1 className="text-3xl font-bold mb-4">Login to Your Account</h1>
          <p className="text-sm text-gray-600 mb-6">
            {isAuthenticated
              ? 'You are already logged in. Go to your orders or logout when ready.'
              : 'Enter your email and password to sign in and view your account orders.'}
          </p>
          {error && <div className="mb-4 text-sm text-red-600">{error}</div>}

          <form onSubmit={handleSubmit} className="space-y-4">
            <label className="block">
              <span className="text-sm font-medium text-gray-700">Email</span>
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-400"
                placeholder="you@example.com"
              />
            </label>
            <label className="block">
              <span className="text-sm font-medium text-gray-700">Password</span>
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-400"
                placeholder="Enter your password"
              />
            </label>
            <button
              type="submit"
              className="w-full rounded-xl bg-red-500 px-4 py-3 text-white font-semibold hover:bg-red-600"
            >
              Sign In
            </button>
          </form>

          <p className="mt-6 text-sm text-gray-600">
            Don&apos;t have an account? You can still place orders as a guest and then
            login to save future order history.
          </p>
          <Link to="/" className="mt-4 inline-block text-sm text-red-600 hover:underline">
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
