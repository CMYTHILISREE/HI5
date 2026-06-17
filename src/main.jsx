import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from 'react-redux';
import { store } from './store';

store.subscribe(() => {
  const authState = store.getState().auth;
  localStorage.setItem('hi5cart-auth', JSON.stringify(authState));
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
