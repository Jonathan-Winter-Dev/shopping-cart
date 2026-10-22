export function addToCart(setData, id, quantityToAdd) {
  console.log(typeof setData);
  setData((prevData) =>
    prevData.map((item) => {
      if (id === item.id) {
        const newQuantity = quantityToAdd + item.quantity;
        return { ...item, inCart: true, quantity: newQuantity };
      } else {
        return item;
      }
    }),
  );
}
