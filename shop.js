const products = [
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

let currentCategory = "all";
let searchValue = "";
let sortValue = "default";

function renderProducts() {
  let filtered = [...products];

  if (currentCategory !== "all") {
    filtered = filtered.filter(p => p.category === currentCategory);
  }

  if (searchValue) {
    filtered = filtered.filter(p =>
      p.name.toLowerCase().includes(searchValue.toLowerCase())
    );
  }

  if (sortValue === "low") {
    filtered.sort((a,b)=>a.price-b.price);
  } else if (sortValue === "high") {
    filtered.sort((a,b)=>b.price-a.price);
  }

  const grid = document.getElementById("productsGrid");

  grid.innerHTML = filtered.map(product => `
    <a href="product.html?id=${product.id}" class="product-card">
      <img src="${product.image}">
      <div class="product-info">
        <h3>${product.name}</h3>
        <p>$${product.price}</p>
      </div>
    </a>
  `).join("");
}

document.querySelectorAll(".filters button").forEach(btn=>{
  btn.addEventListener("click", ()=>{
    document.querySelectorAll(".filters button").forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");

    currentCategory = btn.dataset.category;
    renderProducts();
  });
});

document.getElementById("searchInput").addEventListener("input", function(){
  searchValue = this.value;
  renderProducts();
});

document.getElementById("sortSelect").addEventListener("change", function(){
  sortValue = this.value;
  renderProducts();
});

renderProducts();