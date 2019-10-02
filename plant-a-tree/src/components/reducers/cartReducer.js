import {
  ADD_TO_CART,
  REMOVE_ITEM,
  SUB_QUANTITY,
  ADD_QUANTITY,
  ADD_SHIPPING
} from "../actions/action-types/cart-actions";

const initState = {
  isFetching: false,
  errorMessage: "",
  items: [
    { product_id: 1, product_name: "New Zealand Kauri", product_price: 45 },
    { product_id: 2, product_name: "Pōhutukawa", product_price: 32 },
    { product_id: 3, product_name: "Kōwhai​", product_price: 25 },
    {
      product_id: 4,
      product_name: "New Zealand Cabbage Tree",
      product_price: 10
    },
    { product_id: 5, product_name: "Gala Apple Tree", product_price: 12 },
    { product_id: 6, product_name: "Feijoa​ Tree", product_price: 12 },
    { product_id: 7, product_name: "Lemon Tree", product_price: 10 },
    { product_id: 8, product_name: "Olive Tree", product_price: 13 },
    { product_id: 9, product_name: "Baby Blue Tree", product_price: 18 },
    {
      product_id: 10,
      product_name: "Swamp Peppermint Tree",
      product_price: 13
    },
    { product_id: 11, product_name: "Manna Gum Tree", product_price: 12 },
    { product_id: 12, product_name: "Red Stringybark Tree", product_price: 14 },
    { product_id: 13, product_name: "Umbrella Palm", product_price: 12 },
    { product_id: 14, product_name: "Pitt Island Nikau", product_price: 13 },
    { product_id: 15, product_name: "Bamboo Tree", product_price: 11 },
    { product_id: 16, product_name: "Portuguese Laurel", product_price: 8 },
    { product_id: 17, product_name: "Olearia ", product_price: 9 },
    { product_id: 18, product_name: "Silver Birch Tree", product_price: 50 },
    { product_id: 19, product_name: "Mt Fuji Cherry Tree", product_price: 67 },
    { product_id: 20, product_name: "English Oak", product_price: 55 },
    { product_id: 21, product_name: "Shovel", product_price: 20 },
    { product_id: 22, product_name: "Rake", product_price: 25 },
    { product_id: 23, product_name: "Hoe", product_price: 30 },
    { product_id: 30, product_name: "Fertilizer", product_price: 40 },
    { product_id: 31, product_name: "Water bucket", product_price: 40 }
  ],
  addedItems: []
};

const cartReducer = (state = initState, action) => {
  if (action.type === ADD_TO_CART) {
    let addedItem = state.items.find(item => item.product_id === action.id);
    //check if the action id exists in the addedItems
    let existed_item = state.addedItems.find(
      item => action.id === item.product_id
    );
    if (existed_item) {
      addedItem.quantity += 1;
      return {
        ...state,
        total: state.total + addedItem.price
      };
    } else {
      addedItem.quantity = 1;
      //calculating the total
      let newTotal = state.total + addedItem.price;

      return {
        ...state,
        addedItems: [...state.addedItems, addedItem],
        total: newTotal
      };
    }
  }
  if (action.type === REMOVE_ITEM) {
    let itemToRemove = state.addedItems.find(item => action.id === item.id);
    let new_items = state.addedItems.filter(item => action.id !== item.id);

    //calculating the total
    let newTotal = state.total - itemToRemove.price * itemToRemove.quantity;
    console.log(itemToRemove);
    return {
      ...state,
      addedItems: new_items,
      total: newTotal
    };
  }
  //INSIDE CART COMPONENT
  if (action.type === ADD_QUANTITY) {
    let addedItem = state.items.find(item => item.id === action.id);
    addedItem.quantity += 1;
    let newTotal = state.total + addedItem.price;
    return {
      ...state,
      total: newTotal
    };
  }
  if (action.type === SUB_QUANTITY) {
    let addedItem = state.items.find(item => item.id === action.id);
    //if the qt == 0 then it should be removed
    if (addedItem.quantity === 1) {
      let new_items = state.addedItems.filter(item => item.id !== action.id);
      let newTotal = state.total - addedItem.price;
      return {
        ...state,
        addedItems: new_items,
        total: newTotal
      };
    } else {
      addedItem.quantity -= 1;
      let newTotal = state.total - addedItem.price;
      return {
        ...state,
        total: newTotal
      };
    }
  }

  if (action.type === ADD_SHIPPING) {
    return {
      ...state,
      total: state.total + 6
    };
  }

  if (action.type === "SUB_SHIPPING") {
    return {
      ...state,
      total: state.total - 6
    };
  } else {
    return state;
  }

  /* switch (action.type) {
    case FETCHING_ITEMS_REQUEST:
      return { ...state, isFetching: true };
    case FETCHING_ITEMS_FAILURE:
      return { ...state, isFetching: false, errorMessage: action.payload };
    case FETCHING_ITEMS_SUCCESS:
      return { ...state, isFetching: false, items: action.payload };
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload]
      };
    default:
      return state;
  }*/
};

export default cartReducer;
