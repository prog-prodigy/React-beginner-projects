import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import Notification from "./components/Notification";
import { fetchData, sendCartData } from "./store/fetch-actions";
let isFirstRender = true;

function App() {
  const isLoggedin = useSelector((state) => state.auth.isLoggedin);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  useEffect(() => {
    if (isFirstRender) {
      isFirstRender = false;
      return;
    }
    if(cart.changed){
      dispatch(sendCartData(cart));
    }

    
  }, [cart, dispatch]);
  const notification = useSelector((state) => state.ui.notification);
  return (
    <div className="App">
      {notification && (
        <Notification type={notification.type} message={notification.message} />
      )}
      <div className="App">{!isLoggedin ? <Auth /> : <Layout />}</div>;
    </div>
  );
}

export default App;
