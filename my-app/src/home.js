import Navbar from "./component/navbar";
import Footer from "./component/footer";
import getproduct from "../src/component/products.json";
import { useEffect, useState } from "react";

function Home() {

    const [fProducts, setFproducts] = useState([]);
    const [products, setProducts] = useState([]);
    const [insProducts, setInsProducts] = useState([]);
    const [collectionProducts, setCollectionProducts] = useState([]);
    const [currectIndex, setCurrectIndex] = useState(0);

    const feautureProducts = [
        { id: 1, name: "Latest men’s sneaker", price: "$25.00", oldPrice: "$35.00", imgSrc: "/assets/img/product/feature-product/f-p-1.jpg" },
        { id: 2, name: "Red women purses", price: "$20.00", oldPrice: "$30.00", imgSrc: "/assets/img/product/feature-product/f-p-2.jpg" },
        { id: 3, name: "Men stylist Smart Watch", price: "$15.00", oldPrice: "$25.00", imgSrc: "/assets/img/product/feature-product/f-p-3.jpg" },
        { id: 4, name: "Home Decor", price: "$15.00", oldPrice: "$25.00", imgSrc: "/assets/img/product/feature-product/f-p-4.webp" },
        { id: 5, name: "Home Decor", price: "$30.00", oldPrice: "$55.00", imgSrc: "/assets/img/product/feature-product/f-p-5.jpg" },
        { id: 6, name: "Home Decor", price: "$100.00", oldPrice: "$50.00", imgSrc: "/assets/img/product/feature-product/f-p-6.jpg" },
    ];

    const collectionProduct = [
        {
            id: 1,
            name: "Men’s Summer Collection",
            imgSrc: "/assets/img/product/new-product/new-product1.png"
        },
        {
            id: 2,
            name: "Women's Summer Collection",
            imgSrc: "/assets/img/product/new-product/new-product2.png"
        },
        {
            id: 3,
            name: "Kids Summer Collection",
            imgSrc: "/assets/img/product/new-product/new-product3.png"
        },
    ];

    
    useEffect(() => {
        localStorage.setItem("feautureProducts", JSON.stringify(feautureProducts));
        localStorage.setItem("collectionProduct", JSON.stringify(collectionProduct));
        localStorage.setItem("product", JSON.stringify(getproduct));

        window.addEventListener('load', () => {
            const storedProducts = JSON.parse(localStorage.getItem("feautureProducts")) || [];
            setFproducts(storedProducts.sort(() => 0.5 - Math.random()).slice(0, 3));
            

            const Products = JSON.parse(localStorage.getItem("product")) || [];
            setProducts(Products.sort(() => 0.5 - Math.random()).slice(0, 4));
            setInsProducts(Products);
        });

        const data = JSON.parse(localStorage.getItem("collectionProduct")) || [];
        setCollectionProducts(data);

        const interval = setInterval(() => {
            setCurrectIndex(prev => {
                if (data.length === 0) return 0;
                return (prev + 1) % data.length;
            });
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    if (collectionProducts.length === 0) return null; // no products yet

    const currentProduct = collectionProducts[currectIndex];

    return (
        <>
            <Navbar />

            <section class="home_banner_area mb-40">
                <div class="banner_inner d-flex align-items-center">
                    <div class="container">
                        <div class="banner_content row">
                            <div class="col-lg-12">
                                <p class="sub text-uppercase">men Collection</p>
                                <h3><span>Show</span> Your <br />Personal <span>Style</span></h3>
                                <h4>Fowl saw dry which a above together place.</h4>
                                <a class="main_btn mt-40" href="#">View Collection</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="feature-area section_gap_bottom_custom">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 col-md-6">
                            <div class="single-feature">
                                <a href="#" class="title">
                                    <i class="flaticon-money"></i>
                                    <h3>Money back gurantee</h3>
                                </a>
                                <p>Shall open divide a one</p>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6">
                            <div class="single-feature">
                                <a href="#" class="title">
                                    <i class="flaticon-truck"></i>
                                    <h3>Free Delivery</h3>
                                </a>
                                <p>Shall open divide a one</p>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6">
                            <div class="single-feature">
                                <a href="#" class="title">
                                    <i class="flaticon-support"></i>
                                    <h3>Alway support</h3>
                                </a>
                                <p>Shall open divide a one</p>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6">
                            <div class="single-feature">
                                <a href="#" class="title">
                                    <i class="flaticon-blockchain"></i>
                                    <h3>Secure payment</h3>
                                </a>
                                <p>Shall open divide a one</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="feature_product_area section_gap_bottom_custom">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-12">
                            <div class="main_title">
                                <h2><span>Featured product</span></h2>
                                <p>Bring called seed first of third give itself now ment</p>
                            </div>
                        </div>
                    </div>

                    <div class="row">

                        {
                            fProducts.map((product) => {
                                return (
                                    <div class="col-lg-4 col-md-6 cards" key={product.id}>
                                        <div class="single-product">
                                            <div class="product-img">
                                                <img class="img-fluid w-100" src={product.imgSrc} alt="" />
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
                                                    <h4>{product.name}</h4>
                                                </a>
                                                <div class="mt-3">
                                                    <span class="mr-4">{product.price}</span>
                                                    <del>{product.oldPrice}</del>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </section>

            <section class="offer_area">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="offset-lg-4 col-lg-6 text-center">
                            <div class="offer_content">
                                <h3 class="text-uppercase mb-40">all men’s collection</h3>
                                <h2 class="text-uppercase">50% off</h2>
                                <a href="#" class="main_btn mb-20 mt-5">Discover Now</a>
                                <p>Limited Time Offer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="new_product_area section_gap_top section_gap_bottom_custom">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-12">
                            <div class="main_title">
                                <h2><span>new products</span></h2>
                                <p>Bring called seed first of third give itself now ment</p>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-lg-6">
                            <div class="new_product">
                                <h5 class="text-uppercase">collection of 2026</h5>
                                <h3 class="text-uppercase" id="productName">{currentProduct.name}</h3>
                                <div class="product-img">
                                    <img class="img-fluid" id="productImage" src={currentProduct.imgSrc} alt="" />
                                </div>
                                <a href="#" class="main_btn">Add to cart</a>
                            </div>
                        </div>

                        <div class="col-lg-6 mt-5 mt-lg-0">
                            <div class="row">

                                {
                                    products.map((prod) => {
                                        return (
                                            <div class="col-lg-6 col-md-6" key={prod.id}>
                                                <div class="single-product">
                                                    <div class="product-img">
                                                        <img class="img-fluid w-100" src={prod.imgSrc} alt={prod.name} />
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
                                                            <del>{prod.oldPrice}</del>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }   

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="inspired_product_area section_gap_bottom_custom">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-12">
                            <div class="main_title">
                                <h2><span>Inspired products</span></h2>
                                <p>Bring called seed first of third give itself now ment</p>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        
                    {
                        insProducts.map((inspiredprod) => {
                            return (
                                <div class="col-lg-3 col-md-6">
                                    <div class="single-product">
                                        <div class="product-img">
                                            <img class="img-fluid w-100" src={inspiredprod.imgSrc} alt="" />
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
                                                <h4>{inspiredprod.name}</h4>
                                            </a>
                                            <div class="mt-3">
                                                <span class="mr-4">{inspiredprod.price}</span>
                                                <del>{inspiredprod.oldPrice}</del>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }   
                    </div>
                </div>
            </section>

            <section class="blog-area section-gap">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-12">
                            <div class="main_title">
                                <h2><span>latest blog</span></h2>
                                <p>Bring called seed first of third give itself now ment</p>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-lg-4 col-md-6">
                            <div class="single-blog">
                                <div class="thumb">
                                    <img class="img-fluid" src="/assets/img/b1.jpg" alt="" />
                                </div>
                                <div class="short_details">
                                    <div class="meta-top d-flex">
                                        <a href="#">By Admin</a>
                                        <a href="#"><i class="ti-comments-smiley"></i>2 Comments</a>
                                    </div>
                                    <a class="d-block" href="single-blog.html">
                                        <h4>Ford clever bed stops your sleeping
                                            partner hogging the whole</h4>
                                    </a>
                                    <div class="text-wrap">
                                        <p>
                                            Let one fifth i bring fly to divided face for bearing the divide unto seed winged divided light
                                            Forth.
                                        </p>
                                    </div>
                                    <a href="#" class="blog_btn">Learn More <span class="ml-2 ti-arrow-right"></span></a>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6">
                            <div class="single-blog">
                                <div class="thumb">
                                    <img class="img-fluid" src="/assets/img/b2.jpg" alt="" />
                                </div>
                                <div class="short_details">
                                    <div class="meta-top d-flex">
                                        <a href="#">By Admin</a>
                                        <a href="#"><i class="ti-comments-smiley"></i>2 Comments</a>
                                    </div>
                                    <a class="d-block" href="single-blog.html">
                                        <h4>Ford clever bed stops your sleeping
                                            partner hogging the whole</h4>
                                    </a>
                                    <div class="text-wrap">
                                        <p>
                                            Let one fifth i bring fly to divided face for bearing the divide unto seed winged divided light
                                            Forth.
                                        </p>
                                    </div>
                                    <a href="#" class="blog_btn">Learn More <span class="ml-2 ti-arrow-right"></span></a>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6">
                            <div class="single-blog">
                                <div class="thumb">
                                    <img class="img-fluid" src="/assets/img/b3.jpg" alt="" />
                                </div>
                                <div class="short_details">
                                    <div class="meta-top d-flex">
                                        <a href="#">By Admin</a>
                                        <a href="#"><i class="ti-comments-smiley"></i>2 Comments</a>
                                    </div>
                                    <a class="d-block" href="single-blog.html">
                                        <h4>Ford clever bed stops your sleeping
                                            partner hogging the whole</h4>
                                    </a>
                                    <div class="text-wrap">
                                        <p>
                                            Let one fifth i bring fly to divided face for bearing the divide unto seed winged divided light
                                            Forth.
                                        </p>
                                    </div>
                                    <a href="#" class="blog_btn">Learn More <span class="ml-2 ti-arrow-right"></span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}

export default Home;
