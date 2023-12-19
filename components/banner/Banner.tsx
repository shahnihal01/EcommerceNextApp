'use client';
import { CategoryType, ProductType } from '@/types/productTypes';
import Image from 'next/image';
import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Link from 'next/link';

interface BannerProps {
  bannerData: CategoryType;
}

export default function Banner({ bannerData }: BannerProps) {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={10}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      className="swiper_class "
    >
      {bannerData.map((product: ProductType) => (
        <SwiperSlide
          key={product.id}
          className="border-2 border-red-500 rounded-3xl z-0"
        >
          <div className="w-full flex justify-center gap-5 p-5">
            <Image
              src={product.image}
              alt={product.title}
              width={500}
              height={500}
              className="w-72 h-72 object-contain"
            />
            <div className="flex flex-col gap-2 justify-evenly items-start max-w-[40vw]">
              <p className="text-3xl text-red-500 font-bold line-clamp-2">
                {product.title}
              </p>
              <p className="text-xl font-semiboold text-red-500">
                ${product.price}
              </p>
              <p className="text-sm text-red-500 line-clamp-3">
                {product.description}
              </p>
              <Link
                href={`/product/${product.id}`}
                className="bg-red-500 rounded-xl px-3 py-2 text-white"
              >
                Explore
              </Link>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
