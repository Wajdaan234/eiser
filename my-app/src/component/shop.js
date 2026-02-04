import { useEffect, useState } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import { Link } from "react-router-dom";

function Shop() {

    const storedProducts = JSON.parse(localStorage.getItem("product")) || [];

    // States
    const [activeCategory,  setActiveCategory] = useState("All");

    const [activeBrand,  setActiveBrand] = useState("All");

    const [activeColor,  setActiveColor] = useState("All");
    
    const [allProducts] = useState(Array.isArray(storedProducts) ? storedProducts : []);
    const [filteredProducts, setFilteredProducts] = useState(storedProducts) || [];

    // Unique categories and brands (brands will be filtered dynamically)
    const categories = ["All", ...new Set(storedProducts.map(p => p.category))];

    // Brands depend on selected category
    const availableBrands = activeCategory === "All"
        ? []
        : ["All", ...new Set(storedProducts.filter(p => p.category === activeCategory).map(p => p.brand))];

    const availableColors = activeCategory === "All"
        ? []
        : ["All", ...new Set(storedProducts.filter(p => p.category === activeCategory).map(p => p.color))];

    // Combined filter function
    const filterProducts = (category, brand, color) => {
        let filtered = storedProducts;

        if (category !== "All") filtered = filtered.filter(p => p.category === category);
        if (brand !== "All") filtered = filtered.filter(p => p.brand === brand);
        if (color !== "All") filtered = filtered.filter(p => p.color === color);
        filtered = sortProducts(filtered, sortValue);
        setFilteredProducts(filtered);
    };

    // Handlers
    const handleCategoryClick = (cat) => {
        setActiveCategory(cat);
        setActiveBrand("All");
        setActiveColor("All");
        filterProducts(cat, "All", "All");
    };

    const handleBrandClick = (br) => {
        setActiveBrand(br);
        filterProducts(activeCategory, br, activeColor);
    };

    const handleColorClick = (color) => {
        setActiveColor(color);
        filterProducts(activeCategory, activeBrand, color);
    };

    const [sortValue, setSortValue] = useState("1");

    const handleSorting = (e) => {
        const value = e.target.value; // selected option
        setSortValue(value);

        // Filtered products ke upar apply sorting
        const sorted = sortProducts(filteredProducts, value);
        setFilteredProducts(sorted);
    };
    
    const sortProducts = (list = [], sortValue) => {
            let sorted = [...list]; // safe copy

            if (sortValue === "1") {
                return[...allProducts]
            } 
            else if (sortValue === "2") {
                sorted.sort((a, b) => a.name.localeCompare(b.name));
            } 
            else if (sortValue === "3") {
                sorted.sort((a, b) => Number(a.price) + Number(b.price));
            } 
            else if (sortValue === "4") {
                sorted.sort((a, b) => Number(b.price) - Number(a.price));
            }

            return sorted;
        };


    return (
        <>

            <Navbar />

            <section class="banner_area">
                <div class="banner_inner d-flex align-items-center">
                    <div class="container">
                        <div class="banner_content d-md-flex justify-content-between align-items-center">
                            <div class="mb-3 mb-md-0">
                                <h2>Shop Category</h2>
                                <p>Very us move be blessed multiply night</p>
                            </div>
                            <div class="page_link">
                                <Link to="/">Home</Link>
                                <Link to="/product-category">Shop</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="cat_product_area section_gap">
                <div class="container">
                    <div class="row flex-row-reverse">
                        <div class="col-lg-9">
                            <div class="product_top_bar">
                                <div class="left_dorp">
                                    <select class="sorting" value={sortValue} onChange={handleSorting}>
                                        <option value="1">Default sorting</option>
                                        <option value="2">A To Z</option>
                                        <option value="3">Low price to heigh</option>
                                        <option value="4">Height price to low</option>
                                    </select>
                                    <select class="show">
                                        <option value="1">Show 12</option>
                                        <option value="2">Show 14</option>
                                        <option value="4">Show 16</option>
                                    </select>
                                </div>
                            </div>

                            <div class="latest_product_inner">
                                <div class="row">

                                    {filteredProducts.map((prod) => (
                                        <Link class="col-lg-4 col-md-6" to={`/product-details/${prod.id}`}>
                                            <div  key={prod.id}>
                                            <div class="single-product">
                                                <div class="product-img">
                                                    <img
                                                        class="card-img"
                                                        src={prod.imgSrc}
                                                        alt={prod.name}
                                                    />
                                                    <div class="p_icon">
                                                        <a href="#">
                                                            <i class="ti-eye"></i>
                                                        </a>
                                                        <a href="#">
                                                            <i class="ti-heart"></i>
                                                        </a>
                                                        <a href="#">
                                                            <i class="ti-shopping-cart"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div class="product-btm">
                                                    <a href="#" class="d-block">
                                                        <h4>{prod.name}</h4>
                                                    </a>
                                                    <div class="mt-3">
                                                        <span class="mr-4">{prod.price}</span>
                                                        <del>${prod.oldPrice}</del>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-3">
                            <div class="left_sidebar_area">
                                <aside class="left_widgets p_filter_widgets">
                                    <div class="l_w_title">
                                        <h3>Browse Categories</h3>
                                    </div>
                                    <div class="widgets_inner">

                                        <ul class="list">
                                            {/* <li className={activeCategory === "All" ? "active" : ""} onClick={() => showAll()} style={{ cursor: "pointer" }}><a>All</a></li> */}
                                            {categories.map((cat, index) => (
                                                <li className={activeCategory === cat ? "active" : ""} key={index} onClick={() => handleCategoryClick(cat)} style={{ cursor: "pointer" }}>
                                                    <a>{cat}</a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </aside>

                                <aside class="left_widgets p_filter_widgets">
                                    <div class="l_w_title">
                                        <h3>Product Brand</h3>
                                    </div>
                                    <div class="widgets_inner">
                                        <ul class="list">
                                            {/* <li className={activeBrand === "All" ? "active" : ""} onClick={() => showBrand()} style={{ cursor: "pointer" }}><a>All</a></li> */}
                                            {availableBrands.map((brand, index) => (
                                                <li className={activeBrand === brand ? "active" : ""} key={index} onClick={() => handleBrandClick(brand)} style={{ cursor: "pointer" }}>
                                                    <a>{brand}</a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </aside>

                                <aside class="left_widgets p_filter_widgets">
                                    <div class="l_w_title">
                                        <h3>Color Filter</h3>
                                    </div>
                                    <div class="widgets_inner">
                                        <ul class="list">

                                            {availableColors.map((brand, index) => (
                                                <li
                                                    className={activeColor === brand ? "active" : ""}
                                                    key={index}
                                                    onClick={() => handleColorClick(brand)}
                                                    style={{ cursor: "pointer" }}
                                                >
                                                    <a>{brand}</a>
                                                </li>
                                            ))}

                                        </ul>
                                    </div>
                                </aside>

                                <aside class="left_widgets p_filter_widgets">
                                    <div class="l_w_title">
                                        <h3>Price Filter</h3>
                                    </div>
                                    <div class="widgets_inner">
                                        <div class="range_item">
                                            <div id="slider-range"></div>
                                            <div class="">
                                                <label for="amount">Price : </label>
                                                <input type="text" id="amount" readonly />
                                            </div>
                                        </div>
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}

export default Shop;