import { createSlice } from "@reduxjs/toolkit";
import data from "./data";
import { toast } from "react-toastify";
const sliceChart = createSlice({
  name: "cart",
  initialState: {
    items: data,
    Cartitems: [],
    totalCount: 0,
    totalPrice: 0,
  },
  reducers: {
    addToCart(state, action) {
      const existingIndex = state.Cartitems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingIndex >= 0) {
        toast.info(`Increased ${action.payload.title} quantity`, {
          position: "bottom-left",
        });
      } else {
        state.Cartitems = [...state.Cartitems, { ...action.payload }];
        toast.success(`${action.payload.title} added to cart`, {
          position: "bottom-left",
        });
      }
    },
    remove: (state, action) => {
      state.Cartitems = state.Cartitems.filter(
        (item) => item.id !== action.payload.id
      );
      toast.error(` ${action.payload.title} removed Fromcart`,{
        position: "bottom-left"
      })
    },
    Quantity: (state, action) => {
      state.Cartitems = state.Cartitems.map((item) => {
        return item.id === action.payload.id
          ? { ...item, amount: item.amount + 1 }
          : item;
      });
      toast.success(` ${action.payload.title} Quantity cart`,{
        position: "bottom-left"
      })
    },
    decreaseCart: (state, action) => {
      state.Cartitems = state.Cartitems.map((item) => {
        return item.id === action.payload.id
          ? { ...item, amount: item.amount - 1 }
          : item;
      }).filter((item) => item.amount !== 0);
      if(action.payload.amount <= 1)
      {
        toast.error(` ${action.payload.title} removed Fromcart`,{
          position: "bottom-left"
        })
      }else
      {
        toast.info(`Decrease ${action.payload.title} quantity`, {
          position: "bottom-left",
        });
      }
    },
    getCartTotal: (state, action) => {
      let { totalAmount, totalCount } = state.Cartitems.reduce(
        (cartTotal, cartItem) => {
          const { price, amount } = cartItem;
          const itemTotal = price * amount;

          cartTotal.totalAmount += itemTotal;
          cartTotal.totalCount += amount;
          return cartTotal;
        },
        {
          totalAmount: 0,
          totalCount: 0,
        }
      );
      state.totalCount = totalCount;
      state.totalPrice = totalAmount;
    },
    clear: (state) => {
      state.Cartitems = [];
      toast.error(`Clear All`,{
        position: "bottom-left"
      })
    },
  },
});
export const {
  addToCart,
  remove,
  Quantity,
  decreaseCart,
  getCartTotal,
  clear,
} = sliceChart.actions;
export default sliceChart.reducer;
