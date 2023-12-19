'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from './CartContext';

export default function NavCartComponent() {
  const { cart } = useCart();

  return (
    <Link href={'/cart'} className="relative cursor-pointer">
      <Image
        src={'/assets/cart.svg'}
        alt="cart"
        height={100}
        width={100}
        className="w-8 h-8 hover:scale-110 duration-300 transform"
      />
      <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-red-600 text-xs text-center text-white">
        {cart.length}
      </span>
    </Link>
  );
}
