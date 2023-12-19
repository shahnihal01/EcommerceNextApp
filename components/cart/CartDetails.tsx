'use client';

import Image from 'next/image';
import { CartItem, useCart } from './CartContext';

export default function CartDetails() {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    getTotalCartValue,
  } = useCart();
  return (
    <div className="w-full max-w-7xl flex justify-center">
      <div className="w-full flex flex-col md:flex-row gap-5">
        <div className="w-full md:w-2/3 flex flex-col gap-2">
          {cart.length === 0 ? (
            <div className="text-center text-red-500 text-3xl font-bold">
              {' '}
              Cart is Empty
            </div>
          ) : (
            <></>
          )}
          {cart.map((product: CartItem) => {
            return (
              <div
                className="w-full flex justify-between items-center gap-4 bg-red-100 rounded-xl shadow-md p-3"
                key={product.product.id}
              >
                <button
                  className="w-20 h-full flex items-center p-2 bg-red-400 text-white text-xs rounded-lg"
                  onClick={() => removeFromCart(product.product.id)}
                >
                  Remove From Cart
                </button>
                <Image
                  src={product.product.image}
                  alt="prodImage"
                  width={400}
                  height={400}
                  className=" w-20 h-20 object-contain"
                />
                <p className="w-36 text-base text-red-500 line-clamp-3">
                  {product.product.title}
                </p>
                <div className="flex items-center h-full">
                  <button
                    className="h-full text-4xl bg-white text-red-500 pb-2 px-2 rounded-l-2xl"
                    onClick={() => increaseQuantity(product.product.id)}
                  >
                    +
                  </button>
                  <input
                    type="number"
                    className="w-14 h-full bg-white text-red-500 px-3 text-center"
                    value={product.quantity}
                  />
                  <button
                    className="h-full text-4xl bg-white text-red-500 px-2 rounded-r-2xl"
                    onClick={() => decreaseQuantity(product.product.id)}
                  >
                    -
                  </button>
                </div>
                <div className="h-full flex flex-col gap-2">
                  <p className="text-sm text-red-500">Total Price</p>
                  <p className="text-sm md:text-lg font-semibold text-red-500">
                    ${(product.product.price * product.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col flex-grow">
          <p className="text-2xl font-bold text-red-500">Total</p>
          <p className="text-2xl font-bold text-red-500">
            ${getTotalCartValue().toFixed(2)}
          </p>
          <button
            disabled={cart.length === 0}
            className={`md:mt-12 bg-red-500 text-white font-semibold px-3 py-2 rounded-xl disabled:cursor-not-allowed`}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
