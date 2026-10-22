export function productDataExtraction(productDataArr) {
  return productDataArr.map((product) => {
    return {
      id: product.id,
      title: product.title,
      description: product.description,
      thumbnail: product.thumbnail,
      images: structuredClone(product.images),
      price: product.price,
      rating: product.rating,
      reviews: structuredClone(product.reviews),
      isInCart: false,
      quantity: 0,
    };
  });
}

export async function nativeFetch(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error: Status ${response.status}`);
  }
  return await response.json();
}
