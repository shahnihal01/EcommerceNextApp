import ProductCard from "@/components/product/ProductCard";
import { CategoryType } from "@/types/productTypes";
import { getCategoryData } from "@/utils/getCategoryData";

export default async function Category({
    params
}:{
    params: {category: string}
}) {
    const categoryData: CategoryType = await getCategoryData(params.category);
    return(
        <div className="w-full min-h-screen flex justify-center bg-white py-10 px-5">
            <div className="max-w-7xl w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {categoryData.map((product)=>{
                    return(
                        <div key={product.id}>
                            <ProductCard productData={product}/>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}