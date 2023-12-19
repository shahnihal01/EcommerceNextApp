'use client';
import { ProductType } from '@/types/productTypes';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '../cart/CartContext';
import { toast } from 'react-toastify';

interface ProductCardProps {
  productData: ProductType;
}

export default function ProductCard({ productData }: ProductCardProps) {
  const { addToCart } = useCart();
  return (
    <div className="max-w-xs max-h-[500px] w-full h-full md:px-8 pt-2 pb-5 flex flex-col justify-between rounded-3xl bg-red-500">
      <div className="flex items-center flex-col justify-start gap-2 h-full">
        <Image
          src={productData.image}
          alt="productImage"
          width={1000}
          height={1000}
          className="h-44 w-44 object-cover"
        />
        <h1 className="font-bold text-center text-white text-sm sm:text-base lg:text-lg line-clamp-1">
          {productData.title}
        </h1>
        <h3 className="font-bold text-white text-sm sm:text-base lg:text-lg">
          ${productData.price}
        </h3>
        <p className=" text-white text-sm line-clamp-6">
          {productData.description}
        </p>
      </div>
      <div className="flex justify-center gap-2 mt-5">
        <button className="bg-red-600 text-white font-semibold text-base rounded-full px-5 py-2">
          <Link href={`/product/${productData.id}`}>Explore</Link>
        </button>
        <button
          className="bg-red-600 text-white text-xs rounded-full px-5 py-2"
          onClick={() => {
            addToCart(productData, 1);
            toast.success('Added to Cart', {
              style: {
                backgroundColor: 'red',
                color: 'white',
              },
            });
          }}
        >
          <Image
            src={'/assets/cart.svg'}
            alt="cart"
            height={100}
            width={100}
            className="w-5 h-5 hover:scale-110 duration-300 transform invert"
          />
        </button>
      </div>
    </div>
  );
}
