import {
  FETCHING_ITEMS_REQUEST,
  FETCHING_ITEMS_SUCCESS,
  FETCHING_ITEMS_FAILURE
} from "../actions/action-types/cart-actions";

const initState = {
  isFetching: false,
  errorMessage: "",
  items: []
};

const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCHING_ITEMS_REQUEST:
      return { ...state, isFetching: true };
    case FETCHING_ITEMS_FAILURE:
      return { ...state, isFetching: false, errorMessage: action.payload };
    case FETCHING_ITEMS_SUCCESS:
      return { ...state, isFetching: false, items: action.payload };
    default:
      return state;
  }
};

export default cartReducer;
