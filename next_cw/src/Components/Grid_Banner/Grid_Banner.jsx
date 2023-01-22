import "./Grid_Banner.css"

import Fade from "react-reveal"
export default function Grid_Banner({ img, bg, head1, head2, price }) {
    return <>
        <div className="grid_banner-cont">
            <div className="grid_banner" style={{ backgroundImage: `url(${img})` }} >
                <Fade top>
                    <p style={{ color: bg === true ? "black" : "white" }} className="head1">{head1}</p>
                    <p style={{ color: bg === true ? "black" : "white" }}  className="head2">{head2}</p>
                    <div className="banner_link flex">
                        <a>Learn more </a>
                        <a>Buy</a>
                    </div>

                </Fade>
            </div>

        </div>


    </>
}