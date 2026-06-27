function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

function renderSummary() {
  const cart = getCart();
  const orderItems = document.getElementById("orderItems");
  const orderTotal = document.getElementById("orderTotal");

  if(cart.length === 0){
    orderItems.innerHTML = "<p>Your cart is empty.</p>";
    orderTotal.textContent = "$0";
    return;
  }

  let total = 0;

  orderItems.innerHTML = cart.map(item => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;

    return `
      <div class="summary-item">
        <span>${item.name} × ${item.quantity}</span>
        <span>$${itemTotal}</span>
      </div>
    `;
  }).join("");

  orderTotal.textContent = `$${total}`;
}

document.getElementById("checkoutForm").addEventListener("submit", function(e){
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const address = document.getElementById("address").value.trim();
  const city = document.getElementById("city").value.trim();
  const zip = document.getElementById("zip").value.trim();

  if(!name || !email || !address || !city || !zip){
    alert("Please fill all fields.");
    return;
  }

  alert("Order placed successfully!");

  localStorage.removeItem("cart");

  window.location.href = "home.html";
});

renderSummary();