var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  const itemP = Math.floor(Math.random() * Math.floor(100));
  var objitem = {itemName: item, itemPrice: itemP};
  cart.push(objitem);
  return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  if (cart.length < 1){
    return "Your shopping cart is empty."
  } else if (cart.length === 1){
  return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`;
  } else if (cart.length === 2){
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`
  } else {
    var cartstring = "In your cart, you have ";
    cartstring;
    console.log(cartstring);
  }
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
