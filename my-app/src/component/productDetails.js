import Navbar from "./navbar";
import Footer from "./footer";
import React, { useState } from "react";
import { Tabs, Tab } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

function ProductDetails() {

    const {id} = useParams()

    const getdata = JSON.parse(localStorage.getItem("product")) || [];

    const gp = getdata.find((p) => p.id === Number(id));
    
    // State for input value
    const [key, setKey] = useState('description'); // active tab
    const [value, setValue] = useState(5);

    // Decrement function
    const handleDecrement = () => {
        if (value > 0) {
            setValue(value - 1);
        }
    };

    // Increment function (optional)
    const handleIncrement = () => {
        setValue(value + 1);
    };

    // Input change function (optional)
    const handleChange = (e) => {
        const val = parseInt(e.target.value);
        if (!isNaN(val) && val >= 0) {
            setValue(val);
        }
    };

    const handleCart = () => {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];

        const existingIndex = cart.findIndex((p) => p.id === gp.id);

        if (existingIndex >= 0) {
            cart[existingIndex].quantity += 1;
        } else {
            cart.push({ ...gp, quantity: 1 });
        }

        localStorage.setItem("cart", JSON.stringify(cart));
        alert("Add to cart successfully");
        }

    return (
        <>
            <Navbar />

            <section className="banner_area">
                <div className="banner_inner d-flex align-items-center">
                    <div className="container">
                        <div
                            className="banner_content d-md-flex justify-content-between align-items-center"
                        >
                            <div className="mb-3 mb-md-0">
                                <h2>Product Details</h2>
                                <p>Very us move be blessed multiply night</p>
                            </div>
                            <div className="page_link">
                                <Link to="/">Home</Link>
                                <Link to="/shop-category">Shop</Link>
                                <a>Product Details</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="product_image_area">
                <div className="container">
                    <div className="row s_product_inner">
                        <div className="col-lg-6">
                            <div className="s_product_img">
                                <div
                                    id="carouselExampleIndicators"
                                    className="carousel slide"
                                    data-ride="carousel"
                                >
                                    <ol className="carousel-indicators">
                                        <li
                                            data-target="#carouselExampleIndicators"
                                            data-slide-to="0"
                                            className="active"
                                        >
                                            <img
                                                src={gp.imgSrc}
                                                alt=""
                                                width={60}
                                            />
                                        </li>
                                    </ol>
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img
                                                className="d-block w-100"
                                                src={gp.imgSrc}
                                                alt="First slide"
                                            />
                                        </div>
                                        <div className="carousel-item">
                                            <img
                                                className="d-block w-100"
                                                src="/assets/img/product/single-product/s-product-1.jpg"
                                                alt="Second slide"
                                            />
                                        </div>
                                        <div className="carousel-item">
                                            <img
                                                className="d-block w-100"
                                                src="/assets/img/product/single-product/s-product-1.jpg"
                                                alt="Third slide"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 offset-lg-1">
                            <div className="s_product_text">
                                <h3>{gp.name}</h3>
                                <h2>${gp.price}</h2>
                                <ul className="list">
                                    <li>
                                        <a className="active" href="#">
                                            <span>Category</span> : {gp.category}
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#"> <span>Availibility</span> : {gp.Avalablity}</a>
                                    </li>
                                </ul>
                                <p>
                                    {gp.short_detail}
                                </p>
                                <div className="product_count">
                                    <label htmlFor="qty">Quantity:</label>
                                    <input
                                        type="number"
                                        value={value}
                                        onChange={handleChange}
                                        name="qty"
                                        id="sst"
                                        maxlength="12"
                                        title="Quantity:"
                                        className="input-text qty"
                                    />
                                    <button
                                        onClick={handleIncrement}
                                        className="increase items-count"
                                        type="button"
                                    >
                                        <i className="lnr lnr-chevron-up"></i>
                                    </button>
                                    <button
                                        onClick={handleDecrement}
                                        className="reduced items-count"
                                        type="button"
                                    >
                                        <i className="lnr lnr-chevron-down"></i>
                                    </button>
                                </div>
                                <div className="card_area">
                                    <a className="main_btn" onClick={() => handleCart(gp)} href="#">Add to Cart</a>
                                    <a className="icon_btn" href="#">
                                        <i className="lnr lnr lnr-diamond"></i>
                                    </a>
                                    <a className="icon_btn" href="#">
                                        <i className="lnr lnr lnr-heart"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="product_description_area">
                <div className="container">
                    <Tabs
                        id="product-tabs"
                        activeKey={key}
                        onSelect={(k) => setKey(k)}
                        className="mb-3"

                    >
                        <Tab eventKey="description" title="Description">
                            <div
                                class="tab-pane"

                            >
                                <p>
                                    {gp.detail}
                                </p>
                            </div>
                        </Tab>

                        <Tab eventKey="comments" title="Comments">
                            <div
                                class="tab-pane "
                            >
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="comment_list">
                                            <div class="review_item">
                                                <div class="media">
                                                    <div class="d-flex">
                                                        <img
                                                            src="/assets/img/product/single-product/review-1.png"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div class="media-body">
                                                        <h4>Blake Ruiz</h4>
                                                        <h5>12th Feb, 2017 at 05:56 pm</h5>
                                                        <a class="reply_btn" href="#">Reply</a>
                                                    </div>
                                                </div>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                                    sed do eiusmod tempor incididunt ut labore et dolore magna
                                                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                                    ullamco laboris nisi ut aliquip ex ea commodo
                                                </p>
                                            </div>
                                            <div class="review_item reply">
                                                <div class="media">
                                                    <div class="d-flex">
                                                        <img
                                                            src="/assets/img/product/single-product/review-2.png"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div class="media-body">
                                                        <h4>Blake Ruiz</h4>
                                                        <h5>12th Feb, 2017 at 05:56 pm</h5>
                                                        <a class="reply_btn" href="#">Reply</a>
                                                    </div>
                                                </div>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                                    sed do eiusmod tempor incididunt ut labore et dolore magna
                                                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                                    ullamco laboris nisi ut aliquip ex ea commodo
                                                </p>
                                            </div>
                                            <div class="review_item">
                                                <div class="media">
                                                    <div class="d-flex">
                                                        <img
                                                            src="/assets/img/product/single-product/review-3.png"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div class="media-body">
                                                        <h4>Blake Ruiz</h4>
                                                        <h5>12th Feb, 2017 at 05:56 pm</h5>
                                                        <a class="reply_btn" href="#">Reply</a>
                                                    </div>
                                                </div>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                                    sed do eiusmod tempor incididunt ut labore et dolore magna
                                                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                                    ullamco laboris nisi ut aliquip ex ea commodo
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="review_box">
                                            <h4>Post a comment</h4>
                                            <form
                                                class="row contact_form"
                                                action="contact_process.php"
                                                method="post"
                                                id="contactForm"
                                                novalidate="novalidate"
                                            >
                                                <div class="col-md-12">
                                                    <div class="form-group">
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            id="name"
                                                            name="name"
                                                            placeholder="Your Full name"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="col-md-12">
                                                    <div class="form-group">
                                                        <input
                                                            type="email"
                                                            class="form-control"
                                                            id="email"
                                                            name="email"
                                                            placeholder="Email Address"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="col-md-12">
                                                    <div class="form-group">
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            id="number"
                                                            name="number"
                                                            placeholder="Phone Number"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="col-md-12">
                                                    <div class="form-group">
                                                        <textarea
                                                            class="form-control"
                                                            name="message"
                                                            id="message"
                                                            rows="1"
                                                            placeholder="Message"
                                                        ></textarea>
                                                    </div>
                                                </div>
                                                <div class="col-md-12 text-right">
                                                    <button
                                                        type="submit"
                                                        value="submit"
                                                        class="btn submit_btn"
                                                    >
                                                        Submit Now
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </Tab>

                        <Tab eventKey="reviews" title="Reviews">
                            <div
                                class="tab-pane"
                            >
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="row total_rate">
                                            <div class="col-6">
                                                <div class="box_total">
                                                    <h5>Overall</h5>
                                                    <h4>4.0</h4>
                                                    <h6>(03 Reviews)</h6>
                                                </div>
                                            </div>
                                            <div class="col-6">
                                                <div class="rating_list">
                                                    <h3>Based on 3 Reviews</h3>
                                                    <ul class="list">
                                                        <li>
                                                            <a href="#">5 Star
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i> 01</a>
                                                        </li>
                                                        <li>
                                                            <a href="#"
                                                            >4 Star
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i> 01</a>
                                                        </li>
                                                        <li>
                                                            <a href="#"
                                                            >3 Star
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i> 01</a>
                                                        </li>
                                                        <li>
                                                            <a href="#"
                                                            >2 Star
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i> 01</a>
                                                        </li>
                                                        <li>
                                                            <a href="#"
                                                            >1 Star
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i> 01</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="review_list">
                                            <div class="review_item">
                                                <div class="media">
                                                    <div class="d-flex">
                                                        <img
                                                            src="/assets/img/product/single-product/review-1.png"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div class="media-body">
                                                        <h4>Blake Ruiz</h4>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                    </div>
                                                </div>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                                    sed do eiusmod tempor incididunt ut labore et dolore magna
                                                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                                    ullamco laboris nisi ut aliquip ex ea commodo
                                                </p>
                                            </div>
                                            <div class="review_item">
                                                <div class="media">
                                                    <div class="d-flex">
                                                        <img
                                                            src="/assets/img/product/single-product/review-2.png"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div class="media-body">
                                                        <h4>Blake Ruiz</h4>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                    </div>
                                                </div>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                                    sed do eiusmod tempor incididunt ut labore et dolore magna
                                                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                                    ullamco laboris nisi ut aliquip ex ea commodo
                                                </p>
                                            </div>
                                            <div class="review_item">
                                                <div class="media">
                                                    <div class="d-flex">
                                                        <img
                                                            src="/assets/img/product/single-product/review-3.png"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div class="media-body">
                                                        <h4>Blake Ruiz</h4>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                    </div>
                                                </div>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                                    sed do eiusmod tempor incididunt ut labore et dolore magna
                                                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                                    ullamco laboris nisi ut aliquip ex ea commodo
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="review_box">
                                            <h4>Add a Review</h4>
                                            <p>Your Rating:</p>
                                            <ul class="list">
                                                <li>
                                                    <a href="#">
                                                        <i class="fa fa-star"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i class="fa fa-star"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i class="fa fa-star"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i class="fa fa-star"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i class="fa fa-star"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                            <p>Outstanding</p>
                                            <form
                                                class="row contact_form"
                                                action="contact_process.php"
                                                method="post"
                                                id="contactForm"
                                                novalidate="novalidate"
                                            >
                                                <div class="col-md-12">
                                                    <div class="form-group">
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            id="name"
                                                            name="name"
                                                            placeholder="Your Full name"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="col-md-12">
                                                    <div class="form-group">
                                                        <input
                                                            type="email"
                                                            class="form-control"
                                                            id="email"
                                                            name="email"
                                                            placeholder="Email Address"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="col-md-12">
                                                    <div class="form-group">
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            id="number"
                                                            name="number"
                                                            placeholder="Phone Number"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="col-md-12">
                                                    <div class="form-group">
                                                        <textarea
                                                            class="form-control"
                                                            name="message"
                                                            id="message"
                                                            rows="1"
                                                            placeholder="Review"
                                                        ></textarea>
                                                    </div>
                                                </div>
                                                <div class="col-md-12 text-right">
                                                    <button
                                                        type="submit"
                                                        value="submit"
                                                        class="btn submit_btn"
                                                    >
                                                        Submit Now
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Tab>
                    </Tabs>
                </div>
            </section>

            <Footer />
        </>
    );
}

export default ProductDetails;