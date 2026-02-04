
import React, { useState } from "react";
import Footer from "./footer";
import Navbar from "./navbar";
import { Link } from "react-router-dom";


function Cart() {
    const products = JSON.parse(localStorage.getItem('cart')) || [];
    const [quantities, setQuantities] = useState(products.map((p) => p.quantity));

    const handleIncrement = (index) => {
        setQuantities((prev) =>
            prev.map((qty, i) => (i === index ? qty + 1 : qty))
        );
    };

    const handleDecrement = (index) => {
        setQuantities((prev) =>
            prev.map((qty, i) => (i === index && qty > 1 ? qty - 1 : qty))
        );
    };

    const handleChange = (index, event) => {
        const value = Math.max(1, Number(event.target.value));
        setQuantities((prev) => prev.map((qty, i) => (i === index ? value : qty)));
    };
const subtotal = products.reduce((total, p, index) => {
  return total + Number(p.price) * quantities[index];
}, 0);
    return (
        <>
            <Navbar />
            <section class="banner_area">
                <div class="banner_inner d-flex align-items-center">
                    <div class="container">
                        <div
                            class="banner_content d-md-flex justify-content-between align-items-center"
                        >
                            <div class="mb-3 mb-md-0">
                                <h2>Cart</h2>
                                <p>Very us move be blessed multiply night</p>
                            </div>
                            <div class="page_link">
                                <Link to="/">Home</Link>
                                <Link to="/cart">Cart</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="cart_area">
                <div class="container">
                    <div class="cart_inner">
                        <div class="table-responsive">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Product</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products.length === 0 ? (
                                        <center id="emptycart">Product Not Found</center>
                                    ) : (
                                        products.map((p, index) => (
                                            <tr key={index}>
                                                <td>
                                                    <div className="media">
                                                        <div className="d-flex">
                                                            <img src={p.imgSrc} alt="" width={100} />
                                                        </div>
                                                        <div className="media-body">
                                                            <p>{p.name}</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <h5>${Number(p.price).toFixed(2)}</h5>
                                                </td>
                                                <td>
                                                    <div className="product_count">
                                                        <input
                                                            type="number"
                                                            name="qty"
                                                            value={quantities[index]}
                                                            onChange={(e) => handleChange(index, e)}
                                                            className="input-text qty"
                                                        />
                                                        <button
                                                            onClick={() => handleIncrement(index)}
                                                            className="increase items-count"
                                                            type="button"
                                                        >
                                                            <i className="lnr lnr-chevron-up"></i>
                                                        </button>
                                                        <button
                                                            onClick={() => handleDecrement(index)}
                                                            className="reduced items-count"
                                                            type="button"
                                                        >
                                                            <i className="lnr lnr-chevron-down"></i>
                                                        </button>
                                                    </div>
                                                </td>
                                                <td>
                                                    <h5>${(Number(p.price) * quantities[index]).toFixed(2)}</h5>
                                                </td>
                                            </tr>
                                        ))
                                    )}

                                    <tr class="bottom_button">
                                        <td>
                                            <a class="gray_btn" href="#">Update Cart</a>
                                        </td>
                                        <td></td>
                                        <td></td>
                                        <td>
                                            <div class="cupon_text">
                                                <input type="text" placeholder="Coupon Code" />
                                                <a class="main_btn" href="#">Apply</a>
                                                <a class="gray_btn" href="#">Close Coupon</a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td>
                                            <h5>Subtotal</h5>
                                        </td>
                                        <td>
                                            <h5>${subtotal.toFixed(2)}</h5>
                                        </td>
                                    </tr>
                                    <tr class="shipping_area">
                                        <td></td>
                                        <td></td>
                                        <td>
                                            <h5>Shipping</h5>
                                        </td>
                                        <td>
                                            <div class="shipping_box">
                                                <ul class="list">
                                                    <li>
                                                        <a href="#">Flat Rate: $5.00</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Free Shipping</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Flat Rate: $10.00</a>
                                                    </li>
                                                    <li class="active">
                                                        <a href="#">Local Delivery: $2.00</a>
                                                    </li>
                                                </ul>
                                                <h6>
                                                    Calculate Shipping
                                                    <i class="fa fa-caret-down" aria-hidden="true"></i>
                                                </h6>
                                                <select class="shipping_select">
                                                    <option value="1">Bangladesh</option>
                                                    <option value="2">India</option>
                                                    <option value="4">Pakistan</option>
                                                </select>
                                                <select class="shipping_select">
                                                    <option value="1">Select a State</option>
                                                    <option value="2">Select a State</option>
                                                    <option value="4">Select a State</option>
                                                </select>
                                                <input type="text" placeholder="Postcode/Zipcode" />
                                                <a class="gray_btn" href="#">Update Details</a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr class="out_button_area">
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>
                                            <div class="checkout_btn_inner">
                                                <a class="gray_btn" href="#">Continue Shopping</a>
                                                <a class="main_btn" href="#">Proceed to checkout</a>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}

export default Cart;