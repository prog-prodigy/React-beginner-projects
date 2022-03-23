import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";

export const fetchData = () => {
  return async (dispatch) => {
    const fetchHandler = async () => {
      const response = await fetch(
        "https://react-http-561b5-default-rtdb.firebaseio.com/cart.json"
      );
      const data = await response.json();
      return data;
    };
    try {
      const cartData = await fetchHandler();
      dispatch(cartActions.replaceData(cartData));
    } catch (err) {
      dispatch(
        uiActions.showNotification({
          open: true,
          type: "success",
          message: "Something went wrong",
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        type: "warning",
        message: "Sending Request",
        open: true,
      })
    );
    const sendReq = async () => {
      // send state as sending request
      dispatch(
        uiActions.showNotification({
          type: "warning",
          message: "Sending Request",
          open: true,
        })
      );
      const response = await fetch(
        "https://react-http-561b5-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      // send state as request sent
      const data = await response.json();
      dispatch(
        uiActions.showNotification({
          open: true,
          type: "success",
          message: "Request sent",
        })
      );
    };
    try {
      sendReq();
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          open: true,
          type: "success",
          message: "Something went wrong",
        })
      );
    }
  };
};
