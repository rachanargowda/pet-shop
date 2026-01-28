let cart = [];
let total = 0;

function addToCart(name, price) {
  cart.push({name, price});
  total += price;
  alert(name + " added to cart");
}

function openCart() {
  document.getElementById("cart").style.display = "block";
  renderCart();
}

function closeCart() {
  document.getElementById("cart").style.display = "none";
}

function renderCart() {
  let list = document.getElementById("cartItems");
  list.innerHTML = "";
  cart.forEach(item => {
    let li = document.createElement("li");
    li.textContent = item.name + " - ₹" + item.price;
    list.appendChild(li);
  });
  document.getElementById("total").innerText = total;
}

function checkoutWhatsApp() {
  let msg = "Order Details:%0A";
  cart.forEach(i => msg += i.name + " - ₹" + i.price + "%0A");
  msg += "Total: ₹" + total;
  window.open("https://wa.me/919876543210?text=" + msg);
}

function razorpay() {
  alert("Razorpay integration ready.\nConnect backend to activate.");
}

function filterProducts(type) {
  document.querySelectorAll(".product").forEach(p => {
    p.style.display =
      type === "all" || p.classList.contains(type) ? "block" : "none";
  });
}
