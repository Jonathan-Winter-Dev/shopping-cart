export function enrichProductData(product) {
  return { ...product, cartQuantity: 0 };
}
