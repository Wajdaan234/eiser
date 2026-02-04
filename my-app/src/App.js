import { Routes, Route } from "react-router-dom";
import Home from "./home";
import Shop from "./component/shop";
import ProductDetails from "./component/productDetails";
import ProductCheckout from "./component/productcheckout";
import Cart from "./component/cart";
import Blog from "./component/blog";
import BlogDetail from "./component/blogDetail";
import Contact from "./component/contact";
import Shopy from "./component/shopy";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop-category" element={<Shop />} />
      <Route path="/product-details/:id" element={<ProductDetails />} />
      <Route path="/product-checkout" element={<ProductCheckout />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog-details" element={<BlogDetail />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/shopy" element={<Shopy />} />
    </Routes>
  );
}

export default App;
