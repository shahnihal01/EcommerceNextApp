export const getCategories = async () => {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/categories`,
        {
          cache: 'no-store',
        }
      );
      if (response.ok) {
        const data = await response.json();
        return data;
      }
      return ["electronics","jewellery","men's clothing","women's clothing"];
    } catch (error) {
      console.log(error);
      return ["electronics","jewellery","men's clothing","women's clothing"];
    }
  };
  