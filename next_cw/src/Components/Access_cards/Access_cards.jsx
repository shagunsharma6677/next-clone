import './Access_cards.css'
import Button from '../Button/Button'
export default function Access_cards() {
    return <>
        <div className="Acc-Cards-cont flex">
            <div className="Acc-cards-content">
                <div className="Acc-cards-img-div">
                    <img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MMMQ3?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1645138486301" alt="" />
                </div>
                <div>
                    <p>From $1299/month </p>
                    <Button />
                </div>
            </div>
        </div>


    </>
}