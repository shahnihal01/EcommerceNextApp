import ProductCard from '@/components/product/ProductCard';
import { CategoryType } from '@/types/productTypes';
import { getAllProducts } from '@/utils/getAllProducts'

export default async function Home() {
  const allProducts: CategoryType = await getAllProducts();
  return (
    <main className="w-full min-h-screen flex justify-center bg-white py-10 px-5">
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
