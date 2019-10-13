import {
  ADD_TO_CART,
  REMOVE_ITEM,
  SUB_QUANTITY,
  ADD_QUANTITY,
  ADD_URBAN_SHIPPING,
  SUB_URBAN_SHIPPING,
  ADD_RURAL_SHIPPING,
  SUB_RURAL_SHIPPING,
  ADD_OUTSIDE_SHIPPING,
  SUB_OUTSIDE_SHIPPING
} from "./action-types/cart-actions";

//add cart action
export const addToCart = id => {
  return {
    type: ADD_TO_CART,
    id
  };
};
//remove item action
export const removeItem = id => {
  return {
    type: REMOVE_ITEM,
    id
  };
};
//subtract qt action
export const subtractQuantity = id => {
  return {
    type: SUB_QUANTITY,
    id
  };
};
//add qt action
export const addQuantity = id => {
  return {
    type: ADD_QUANTITY,
    id
  };
};
//add shipping
export const addUrbanShipping = () => {
  return {
    type: ADD_URBAN_SHIPPING
  };
};
//sub shipping
export const substractUrbanShipping = () => {
  return {
    type: SUB_URBAN_SHIPPING
  };
};
//add shipping
export const addRuralShipping = () => {
  return {
    type: ADD_RURAL_SHIPPING
  };
};
//sub shipping
export const substractRuralShipping = () => {
  return {
    type: SUB_RURAL_SHIPPING
  };
};
//add shipping
export const addOutsideShipping = () => {
  return {
    type: ADD_OUTSIDE_SHIPPING
  };
};
//sub shipping
export const substractOutsideShipping = () => {
  return {
    type: SUB_OUTSIDE_SHIPPING
  };
};
