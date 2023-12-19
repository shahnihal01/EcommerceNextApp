import Banner from '@/components/banner/Banner';
import ProductCard from '@/components/product/ProductCard';
import { CategoryType } from '@/types/productTypes';
import { getAllProducts } from '@/utils/getAllProducts'

export default async function Home() {
  const allProducts: CategoryType = await getAllProducts();
  const bannerProducts: CategoryType = allProducts.slice(0,4);
  return (
    <main className="w-full min-h-screen flex flex-col gap-5 items-center bg-white py-10 px-5">
      <div className='max-w-7xl w-full flex z-0'>
        <Banner bannerData={bannerProducts}/>
      </div>
      <div className="max-w-7xl w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {allProducts.map((product)=>{
          return(
              <div key={product.id}>
                  <ProductCard productData={product}/>
              </div>
          );
        })}
      </div>
    </main>
  )
}
