'use client';
import { ProductType } from '@/types/productTypes';
import Image from 'next/image';
import StarRating from '../ui/StarRating';
import { CartItem, useCart } from '../cart/CartContext';
import { useState } from 'react';
import { toast } from 'react-toastify';

interface ProductDetailsProps {
  product: ProductType;
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  const { addToCart, cart } = useCart();

  const [formData, setFormData] = useState<CartItem>({
    product: product,
    quantity: 1,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addToCart(formData.product, formData.quantity);
    // Optionally, you can redirect the user or show a success message here
    console.log(cart);
  };
  return (
    <div className="w-full max-w-7xl flex flex-col md:flex-row justify-center">
      <div className="max-w-7xl flex md:w-1/2 justify-center">
        <Image
          src={product.image}
          alt="productImage"
          height={1000}
          width={1000}
          className="w-52 h-52 md:w-full max-w-[600px] md:h-[500px] object-contain"
        />
      </div>
      <div className="flex flex-grow flex-col gap-2 max-w-[600px]">
        <p className="text-lg font-medium text-red-300">{product.category}</p>
        <p className="text-4xl font-bold text-red-500">{product.title}</p>
        <p className="text-4xl font-extrabold text-red-500">${product.price}</p>
        <div className="flex gap-3 items-center">
          <StarRating rating={product.rating.rate} />
          <p className="text-sm text-red-500">({product.rating.count})</p>
        </div>
        <p className="pt-10 text-base text-red-700">{product.description}</p>
        <form onSubmit={handleSubmit} className="flex gap-3 items-center mt-5">
          <div className="flex flex-col">
            <p className="text-xs text-red-500">Quantity</p>
            <input
              name="quantity"
              type="number"
              min={1}
              placeholder="Quantity"
              value={formData.quantity}
              onChange={handleChange}
              className="max-w-[100px] px-3 py-2 text-red-500 text-lg rounded-2xl border border-red-400"
            />
          </div>
          <button
            type="submit"
            className="bg-red-500 text-xl font-semibold px-3 py-2 mt-4 rounded-2xl text-white"
            onClick={() => {
              toast.success('Added to Cart', {
                style: {
                  backgroundColor: 'red',
                  color: 'white',
                },
              });
            }}
          >
            Add To Cart
          </button>
        </form>
      </div>
    </div>
  );
}
