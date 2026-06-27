const products = JSON.parse(localStorage.getItem("productsData")) || [
  {id:1,name:"Signature Linen Blazer",price:790,category:"Blazer",image:"https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200",description:"Premium linen tailoring."},
  {id:2,name:"Tailored Ivory Blazer",price:850,category:"Blazer",image:"https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200",description:"Elegant ivory blazer."},
  {id:5,name:"Cashmere Wool Coat",price:1240,category:"Coat",image:"https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1200",description:"Luxury cashmere coat."},
  {id:13,name:"Minimal Knitwear",price:420,category:"Knitwear",image:"https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1200",description:"Minimal knitwear."}
];

const params = new URLSearchParams(window.location.search);
const productId = parseInt(params.get("id"));

const product = products.find(p => p.id === productId);

if(product){
  document.getElementById("productImg").src = product.image;
  document.getElementById("productName").textContent = product.name;
  document.getElementById("productCategory").textContent = product.category;
  document.getElementById("productPrice").textContent = "$" + product.price;
  document.getElementById("productDesc").textContent = product.description;
}

document.getElementById("addToCart").addEventListener("click", () => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const size = document.getElementById("size").value;
  const quantity = parseInt(document.getElementById("quantity").value);

  const existing = cart.find(
    item => item.id === product.id && item.size === size
  );

  if(existing){
    existing.quantity += quantity;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size,
      quantity
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart!");
});