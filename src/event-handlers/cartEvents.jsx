export function addToCart(setData, id, quantityToAdd) {
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

export function changeProductQuantity(setData, id, newQuantity) {
  setData((prevData) =>
    prevData.map((item) => {
      if (id === item.id) {
        return { ...item, quantity: newQuantity };
      } else {
        return item;
      }
    }),
  );
}

export function removeFromCart(setData, id) {
  setData((prevData) =>
    prevData.map((item) => {
      if (id === item.id) {
        return { ...item, quantity: 0, inCart: false };
      } else {
        return item;
      }
    }),
  );
}
