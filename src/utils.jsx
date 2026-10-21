export function enrichProductData(product) {
  return { ...product, quantity: 0, isInCart: false };
}
