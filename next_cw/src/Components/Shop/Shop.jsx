import "./Shop.css"

export default function Shop() {
    return <>
        <div className="shop-container container">
            <div className="max-cont shop-cont">
                <div className="shop-heading">
                    <h2>Review your bag</h2>
                    <p>Free delivery and the returns</p>

                </div>

                <div className="shop-list-container">
                    <div className="shop-list">
                        <div className="shop-buy flex">
                            <div className="flex shop-buy-item">
                                <div>
                                    <img src="https://www.apple.com/v/mac/home/bs/images/overview/compare/compare_mba__fchj615oz0yi_large.png" alt="" />
                                </div>

                                <h3>Macbook Air with M1 vhip</h3>
                            </div>
                            <div>
                                <select className="quantity-select">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="more">more</option>
                                </select>
                            </div>
                            <div className="shop-price">
                                <p> 1000</p>
                                <div>
                                    <a href="">Remove</a>
                                </div>

                            </div>
                        </div>

                        <div className="shop-buy flex">
                            <div className="flex shop-buy-item">
                                <div>
                                    <img src="https://www.apple.com/v/mac/home/bs/images/overview/compare/compare_mba__fchj615oz0yi_large.png" alt="" />
                                </div>

                                <h3>Macbook Air with M1 vhip</h3>
                            </div>
                            <div>
                                <select className="quantity-select">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="more">more</option>
                                </select>
                            </div>
                            <div className="shop-price">
                                <p> 1000</p>
                                <div>
                                    <a href="">Remove</a>
                                </div>

                            </div>
                        </div>

                        <div className="shop-buy flex">
                            <div className="flex shop-buy-item">
                                <div>
                                    <img src="https://www.apple.com/v/mac/home/bs/images/overview/compare/compare_mba__fchj615oz0yi_large.png" alt="" />
                                </div>

                                <h3>Macbook Air with M1 vhip</h3>
                            </div>
                            <div>
                                <select className="quantity-select">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="more">more</option>
                                </select>
                            </div>
                            <div className="shop-price">
                                <p> 1000</p>
                                <div>
                                    <a href="">Remove</a>
                                </div>

                            </div>
                        </div>

                        <div className="shop-total">
                            <div className="">
                                <div className="Flex">
                                    <h4>Subtotal</h4>
                                    <h4>100</h4>
                                </div>
                                <div className="Flex">
                                    <h4>Shipping</h4>
                                    <h4>Free</h4>
                                </div>


                                <div className="Flex">
                                    <h4>Total</h4>
                                    <h4>1000</h4>
                                </div>
                            </div>

                            <div className="shop-button flex">
                                <div className="checkout-btn">
                                    <a> Shop More</a>
                                </div>
                                <div className="checkout-btn">
                                    <a> Checkout</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}