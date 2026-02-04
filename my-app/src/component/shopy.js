import { useState } from "react";

function Shop() {
  const product = [
    { id: 1, name: "Lady Bag", price: "$25.00", oldPrice: "$35.00", category: "Women Bag", brand: "Gucci", imgSrc: "/assets/img/product/inspired-product/i1.jpg" },
    { id: 2, name: "Baggy jeans for girls", price: "$20.00", oldPrice: "$15.00", category: "Women Clothes", brand: "Levis", imgSrc: "/assets/img/product/inspired-product/i2.jpg" },
    { id: 3, name: "Watch for girls", price: "$35.00", oldPrice: "$25.00", category: "Watch", brand: "Fossil", imgSrc: "/assets/img/product/inspired-product/i3.jpg" },
    { id: 4, name: "Latest men’s sneaker", price: "$70.00", oldPrice: "$40.00", category: "Sneakers", brand: "Nike", imgSrc: "/assets/img/product/inspired-product/i4.jpg" },
    { id: 5, name: "Branded Watch", price: "$60.00", oldPrice: "$30.00", category:"Watch", brand: "Rolex", imgSrc: "/assets/img/product/inspired-product/i5.jpg" },
    { id: 6, name: "Girls sneaker", price: "$60.00", oldPrice: "$200.00", category:"Sneakers", brand: "Adidas", imgSrc: "/assets/img/product/inspired-product/i6.jpg" },
  ];

  // Unique categories and brands
  const categories = ["All", ...new Set(product.map(p => p.category))];
  const brands = ["All", ...new Set(product.map(p => p.brand))];

  // States
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeBrand, setActiveBrand] = useState("All");
  const [filteredProducts, setFilteredProducts] = useState(product); // All products initially

  // Combined filter function
  const filterProducts = (category, brand) => {
    let filtered = product;

    if (category !== "All") {
      filtered = filtered.filter(p => p.category === category);
    }

    if (brand !== "All") {
      filtered = filtered.filter(p => p.brand === brand);
    }

    setFilteredProducts(filtered);
  };

  // Handlers
  const handleCategoryClick = (cat) => {
    setActiveCategory(cat);
    filterProducts(cat, activeBrand);
  };

  const handleBrandClick = (brand) => {
    setActiveBrand(brand);
    filterProducts(activeCategory, brand);
  };

  return (
    <div style={{ display: "flex", gap: "20px" }}>
      {/* Sidebar */}
      <div style={{ width: "200px" }}>
        <h3>Categories</h3>
        <ul>
          {categories.map((cat, i) => (
            <li 
              key={i} 
              className={activeCategory === cat ? "active" : ""} 
              onClick={() => handleCategoryClick(cat)} 
              style={{ cursor: "pointer" }}
            >
              {cat}
            </li>
          ))}
        </ul>

        <h3>Brands</h3>
        <ul>
          {brands.map((b, i) => (
            <li 
              key={i} 
              className={activeBrand === b ? "active" : ""} 
              onClick={() => handleBrandClick(b)} 
              style={{ cursor: "pointer" }}
            >
              {b}
            </li>
          ))}
        </ul>
      </div>

      {/* Products */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "15px" }}>
        {filteredProducts.length > 0 ? filteredProducts.map(prod => (
          <div key={prod.id} style={{ width: "200px", border: "1px solid #ccc", padding: "10px" }}>
            <img src={prod.imgSrc} alt={prod.name} style={{ width: "100%" }} />
            <h4>{prod.name}</h4>
            <p>{prod.price} <del>{prod.oldPrice}</del></p>
            <p><small>{prod.brand}</small></p>
          </div>
        )) : <p>No products found!</p>}
      </div>

      <style jsx>{`
        .active {
          font-weight: bold;
          color: red;
        }
        ul {
          list-style: none;
          padding: 0;
        }
        li {
          margin-bottom: 8px;
        }
      `}</style>
    </div>
  );
}

export default Shop;