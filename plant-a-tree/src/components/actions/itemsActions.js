import {
  FETCHING_ITEMS_REQUEST,
  FETCHING_ITEMS_SUCCESS,
  FETCHING_ITEMS_FAILURE,
  ADD_TO_CART
} from "./action-types/cart-actions";

export const fetchingItemsRequest = () => ({ type: FETCHING_ITEMS_REQUEST });

export const fetchingItemsSuccess = json => ({
  type: FETCHING_ITEMS_SUCCESS,
  payload: json
});

export const fetchingItemsFailure = error => ({
  type: FETCHING_ITEMS_FAILURE,
  payload: error
});

export const addToCart = id => {
  return {
    type: ADD_TO_CART,
    id
  };
};

export const fetchItems = () => {
  return async dispatch => {
    dispatch(fetchingItemsRequest());
    try {
      let response = await fetch("/items");
      let json = await response.json();
      dispatch(fetchingItemsSuccess(json.data));
    } catch (error) {
      dispatch(fetchingItemsFailure(error));
    }
  };
};
