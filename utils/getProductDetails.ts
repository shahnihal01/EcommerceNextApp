import { allProducts } from './dummyData';

export const getProductDetails = async (id: string) => {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
      cache: 'no-store',
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    }
    return allProducts.find((prod) => prod.id.toString() === id);
  } catch (error) {
    console.log(error);
    return allProducts.find((prod) => prod.id.toString() === id);
  }
};
