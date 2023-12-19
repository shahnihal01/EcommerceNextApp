'use client'
// CartContext.js
import { createContext, useContext, useState, ReactNode, useMemo } from 'react';
import { ProductType } from '@/types/productTypes';

type QuantityMap = { [productId: number]: number };

export type CartItem = {
  product: ProductType;
  quantity: number;
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (product: ProductType, quantity: number) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
  increaseQuantity: (productId: number) => void;
  decreaseQuantity: (productId: number) => void;
  getTotalCartValue: () => number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

type CartProviderProps = {
  children: ReactNode;
};

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: ProductType, quantity: number) => {
    setCart((prevCart) => {
      const existingCartItem = prevCart.find((item) => item.product.id === product.id);

      if (existingCartItem) {
        return prevCart.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prevCart, { product, quantity }];
      }
    });
  };

  const removeFromCart = (productId: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.product.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const increaseQuantity = (productId: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.product.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (productId: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.product.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const getTotalCartValue = (): number => {
    return cart.reduce((total, item) => total + item.product.price * item.quantity, 0);
  };

  const memoizedValue = useMemo(
    () => ({
      cart,
      addToCart,
      removeFromCart,
      clearCart,
      increaseQuantity,
      decreaseQuantity,
      getTotalCartValue,
    }),
    [cart]
  );

  return (
    <CartContext.Provider value={memoizedValue}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
