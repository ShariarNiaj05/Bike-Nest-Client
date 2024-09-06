import { IProduct } from "@/types/products";
import { createSlice } from "@reduxjs/toolkit";

export interface ICartProduct extends IProduct {
  quantity: number;
  totalPrice: number;
}
const cartInitialState: ICartProduct[] = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState: cartInitialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existingProduct = state.find((item) => item._id === product._id);

      if (existingProduct) {
        if (existingProduct.quantity < product.stockQuantity) {
          existingProduct.quantity += 1;
          existingProduct.totalPrice = existingProduct.quantity * product.price;
        }
      } else {
        state.push({ ...product, quantity: 1, totalPrice: product.price });
      }
    },
    clearCart: () => {
      return []; // reset cart to empty array
    },
    decrementFromCart: (state, action) => {
      const product = action.payload;
      const existingProduct = state.find((item) => item._id === product._id);
      if (existingProduct) {
        if (existingProduct.quantity > 1) {
          existingProduct.quantity -= 1;
          existingProduct.totalPrice = existingProduct.quantity * product.price;
        }
      }
    },
    deleteFromCart: (state, action) => {
      const productId = action.payload;
      return state.filter((item) => item._id !== productId);
    },
  },
});

export const { addToCart, decrementFromCart, deleteFromCart, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
