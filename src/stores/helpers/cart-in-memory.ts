import { ProductProps } from "@/utils/data/products";
import { ProductCartProps } from "../cart-store";

export function add(products: ProductCartProps[], newProduct: ProductProps) {
  const existingProduct = products.find(({ id }) => id === newProduct.id);

  if (existingProduct) {
    return products.map((product) => {
      if (product.id === existingProduct.id) {
        return {
          ...product,
          quantity: product.quantity + 1,
        };
      }
      return product;
    });
  }

  return [...products, { ...newProduct, quantity: 1 }];
}
