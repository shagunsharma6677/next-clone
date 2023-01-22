import "./Cards.css"
import Button from "../Button/Button"
// import Pulse from "react-reveal"
export default function Cards() {
    return <>
            <div className="Cards-cont flex">
                <div className="cards-content">
                    <h3>RODUCT DETAILS</h3>
                    <div className="cards-img-div">
                        <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-40-macbook-pro-13-202206?wid=600&hei=500&fmt=p-jpg&qlt=95&.v=1665082744007" alt="" />
                    </div>
                    <div>
                        <p>From $1299/month </p>
                        <Button />
                    </div>
                </div>
            </div>
    </>
}