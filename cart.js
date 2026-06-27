function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function renderCart() {
  const cart = getCart();
  const container = document.getElementById("cartContainer");
  const totalEl = document.getElementById("cartTotal");

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="empty-cart">
        <h2>Your cart is empty</h2>
        <p>Add something beautiful from AURA.</p>
      </div>
    `;
    totalEl.textContent = "$0";
    return;
  }

  let total = 0;

  container.innerHTML = cart.map((item, index) => {
    total += item.price * item.quantity;

    return `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}">
        
        <div class="cart-info">
          <h3>${item.name}</h3>
          <p>Size: ${item.size}</p>
          <p>$${item.price}</p>
        </div>

        <div class="cart-actions">
          <button onclick="changeQty(${index}, -1)">-</button>
          <span>${item.quantity}</span>
          <button onclick="changeQty(${index}, 1)">+</button>
        </div>

        <button class="remove-btn" onclick="removeItem(${index})">
          Remove
        </button>
      </div>
    `;
  }).join("");

  totalEl.textContent = `$${total}`;
}

function changeQty(index, change) {
  let cart = getCart();

  cart[index].quantity += change;

  if (cart[index].quantity <= 0) {
    cart.splice(index, 1);
  }

  saveCart(cart);
  renderCart();
}

function removeItem(index) {
  let cart = getCart();
  cart.splice(index, 1);
  saveCart(cart);
  renderCart();
}

renderCart();