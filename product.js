const products = JSON.parse(localStorage.getItem("productsData")) || [
  {id:1,name:"Signature Linen Blazer",price:790,category:"blazer",image:"https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200",description:"Premium linen tailoring."},
  {id:2,name:"Tailored Ivory Blazer",price:850,category:"blazer",image:"https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200",description:"Elegant ivory blazer."},
  {id:3,name:"Modern Sand Blazer",price:920,category:"blazer",image:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1200",description:"Modern minimalist blazer."},
  {id:4,name:"Classic Wool Blazer",price:880,category:"blazer",image:"https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1200",description:"Luxury wool blazer."},

  {id:5,name:"Cashmere Wool Coat",price:1240,category:"coat",image:"https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1200",description:"Luxury cashmere coat."},
  {id:6,name:"Longline Camel Coat",price:1390,category:"coat",image:"https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1200",description:"Elegant camel coat."},
  {id:7,name:"Minimal Trench Coat",price:1180,category:"coat",image:"https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200",description:"Minimal trench."},
  {id:8,name:"Luxury Overcoat",price:1490,category:"coat",image:"https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200",description:"Luxury overcoat."},

  {id:9,name:"Tailored Essentials",price:620,category:"essential",image:"https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200",description:"Tailored essentials."},
  {id:10,name:"Minimal White Shirt",price:320,category:"essential",image:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1200",description:"Minimal white shirt."},
  {id:11,name:"Relaxed Trousers",price:440,category:"essential",image:"https://images.unsplash.com/photo-1506629905607-d405b7a1e0c6?q=80&w=1200",description:"Relaxed fit trousers."},
  {id:12,name:"Classic Cotton Set",price:390,category:"essential",image:"https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?q=80&w=1200",description:"Cotton essentials."},

  {id:13,name:"Minimal Knitwear",price:420,category:"knitwear",image:"https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1200",description:"Minimal knitwear."},
  {id:14,name:"Luxury Cashmere Knit",price:520,category:"knitwear",image:"https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200",description:"Cashmere knit."},
  {id:15,name:"Soft Merino Layer",price:460,category:"knitwear",image:"https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200",description:"Merino comfort."},
  {id:16,name:"Premium Knit Set",price:540,category:"knitwear",image:"https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200",description:"Premium knit set."}
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