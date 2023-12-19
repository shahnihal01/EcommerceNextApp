import ProductDetails from '@/components/product/ProductDetails';
import { ProductType } from '@/types/productTypes';
import { getProductDetails } from '@/utils/getProductDetails';

export default async function Product({ params }: { params: { id: string } }) {
  const productDetails: ProductType = await getProductDetails(params.id);

  return (
    <div className="w-full min-h-screen flex justify-center bg-white py-10 px-5">
      <ProductDetails product={productDetails} />
    </div>
  );
}
