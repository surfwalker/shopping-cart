/* global Cart */
'use strict';

var tbody = document.getElementsByTagName('tbody')[0];

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
var cart;

function loadCart() {
  var cartItems = JSON.parse(localStorage.getItem('cartStorage')) || [];
  cart = new Cart(cartItems);
  }

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  tbody.innerHTML = '';
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body
  for (var i=0; i<cart.items.length; i++){
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textcontent = cart.items[i].product;
  trEl.appendChild(tdEl);

  tdEl = document.createElement('td');
  tdEl.textcontent = cart.items[i].quantity;
  trEl.appendChild(tdEl);

  tbody.appendChild(trEl);
  }

  

  // TODO: Iterate over the items in the cart
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

}

function removeItemFromCart(event) {
  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  var indexNumber = event.target.id;
  cart.removeItem(indexNumber);
  // TODO: Save the cart back to local storage
  cart.saveToLocalStorage();
  // TODO: Re-draw the cart table
  cart.renderCart();

}

// This will initialize the page and draw the cart on screen
renderCart();
