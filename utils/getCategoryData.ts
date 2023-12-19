import { categoryData } from './dummyData';

export const getCategoryData = async (category: string) => {
  try {
    const response = await fetch(
      `https://fakestoreapi.com/products/category/${category}`,
      {
        cache: 'no-store',
      }
    );
    if (response.ok) {
      const data = await response.json();
      return data;
    }
    return categoryData;
  } catch (error) {
    console.log(error);
    return categoryData;
  }
};
