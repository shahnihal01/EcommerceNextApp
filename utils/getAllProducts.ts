import { allProducts } from './dummyData';

export const getAllProducts = async () => {
  try {
    const response = await fetch(`https://fakestoreapi.com/products`, {
      cache: 'no-store',
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    }
    return allProducts;
  } catch (error) {
    console.log(error);
    return allProducts;
  }
};
