import Banner from "../Bannner/Banner"
import Carousels from "../Carousels/Carousels";
import Footer from "../Footer/Footer";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Home.css"
export default function Home() {
    return <>
        <Banner img="https://www.apple.com/v/home/aw/images/heroes/iphone-14-pro/hero_iphone14pro__e5xbgo5ffhg2_large.jpg" />
        <Banner img="https://www.apple.com/in/home/heroes/iphone-14/images/hero_iphone14_preorder__c4g2wjzuugqe_large.jpg" />
        <Banner img="https://www.apple.com/v/home/aw/images/heroes/apple-watch-series-8/hero_apple_watch_series_8__bjc1ok5mkjua_large.jpg" />
        <div className="grid_banner">
            <Banner img="https://www.apple.com/in/home/promos/apple-watch-ultra/images/promo_apple_watch_ultra__gnsqulvdc4a6_large.jpg" />
            <Banner img="https://www.apple.com/v/home/aw/images/promos/ipad-pro/promo_ipadpro__ch217v9v7no2_large.jpg" />

            <Banner img="https://www.apple.com/v/home/aw/images/promos/apple-tv-4k/promo_tv4k__d33vaocbii82_large.jpg" />
            <Banner img="https://www.apple.com/v/home/aw/images/promos/arcade-episode-xoxo/xoxo_promo__czow8gsh0gk2_large.jpg" />
        </div>

        <div className="carousel">
            <Carousels />
        </div>
        <div>
            <Footer/>
        </div>

    </>
}

