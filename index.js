var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  itemPrice = Math.floor(Math.random() * Math.floor(100));
  let objitem = {"itemName:": item, "itemPrice:": itemPrice};
  cart.push(objitem)
  return "$"
}

function viewCart() {
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
