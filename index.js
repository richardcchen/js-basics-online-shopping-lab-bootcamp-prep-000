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
  //console.log(itemPrice);
  var objitem = {itemName: item, itemPrice: itemP};
  cart.push(objitem);
  return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  if (cart.length < 1){
    return "Your shopping cart is empty."
    
  } else{
    
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
