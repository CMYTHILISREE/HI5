import { createSlice } from '@reduxjs/toolkit';

const loadAuthState = () => {
  try {
    const raw = localStorage.getItem('hi5cart-auth');
    if (!raw) return { user: null, orders: [], rewardStars: 0 };
    return JSON.parse(raw);
  } catch {
    return { user: null, orders: [], rewardStars: 0 };
  }
};

const initialState = loadAuthState();
initialState.rewardStars = initialState.rewardStars || 0;

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
    addOrder: (state, action) => {
      state.orders.unshift(action.payload);
      state.rewardStars = (state.rewardStars || 0) + (action.payload.rewardStars || 1);
    },
  },
});

export const { login, logout, addOrder } = authSlice.actions;
export const selectUser = (state) => state.auth.user;
export const selectIsAuthenticated = (state) => Boolean(state.auth.user);
export const selectOrders = (state) => state.auth.orders;
export const selectRewardStars = (state) => state.auth.rewardStars || 0;

export default authSlice.reducer;
