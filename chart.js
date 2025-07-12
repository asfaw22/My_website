let cartItems = [];

function addToCart(item) {
  cartItems.push(item);
  displayCart();
}

function displayCart() {
  const cartElement = document.getElementById('cart');
  cartElement.innerHTML = '';
  cartItems.forEach((item, index) => {
    const li = document.createElement('li');
    li.textContent = item + " ";
    const removeBtn = document.createElement('button');
    removeBtn.textContent = "Remove";
    removeBtn.onclick = () => removeFromCart(index);
    li.appendChild(removeBtn);
    cartElement.appendChild(li);
  });
}

function removeFromCart(index) {
  cartItems.splice(index, 1);
  displayCart();
}