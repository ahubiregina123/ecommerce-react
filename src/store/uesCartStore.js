import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCartStore = create(
  persist(
    (set) => ({
      cartInfo: {
        img: "",
        productName: "",
        price: "",
        size: "",
        date: "",
        quantity: "1",
      },
      setCartInfo: (cartInfo) => set({ cartInfo }),
      cartList: [],
      setCartList: (cartList) => set({ cartList }),
    }),
    { name: "cartInfo" }
  )
);

export default useCartStore;
