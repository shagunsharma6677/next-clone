import { AuthContext } from "../Auth-Router/AuthContext"
import React from "react"
import "./Shop.css"

export default function Shop() {
    const [totalPrice, settotalPrize] = React.useState(0)
    const { buyItem } = React.useContext(AuthContext)
    console.log("buyitem", buyItem)
    let total=0

    const handleTotal = () => {
        

        for(let i=0; i<=buyItem.length-1; i++){
            total+= Number(buyItem[i].price)
        }
        console.log(total)
    }

    React.useEffect(() => {
        
        handleTotal()

    }, [])
    console.log(total)

    return <>
        <div className="shop-container container">
            <div className="max-cont shop-cont">
                <div className="shop-heading">
                    <h2>Review your bag</h2>
                    <p>Free delivery and the returns</p>

                </div>

                <div className="shop-list-container">
                    <div className="shop-list">

                        {buyItem?.map((item) => {
                            return (
                                <div className="shop-buy flex">
                                    <div className="flex shop-buy-item">
                                        <div>
                                            <img src={item.image} alt="" />
                                        </div>

                                        <h3>{item.title}</h3>
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
                                        <p>{item.price}</p>
                                        <div>
                                            <a href="">Remove</a>
                                        </div>

                                    </div>
                                </div>
                            )
                        })}

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