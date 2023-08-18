"use strict";

const countProducts = document.getElementById('count_products');
const cartCount = document.getElementById('cart_not_empty');

let currentCountProd = 12;

countProducts.textContent = currentCountProd;

if (currentCountProd <= 0) {
    cartCount.classList.remove('cart_not_empty');
    cartCount.classList.add('cart_empty');
}