import "./Banner.css"
import Fade from "react-reveal"
export default function Banner({ img, head1, head2,ptag, price,color }) {
    return <>
        <div className="">
            <div className="banner" style={{ backgroundImage: `url(${img})`,backgroundColor: color===true? "white" : "black"}} >
                <Fade top>
                    <p style={{color: color === true ? "black" : "white"}} className="head1">{head1}</p>
                    <p style={{color: color === true ? "black" : "white",fontSize: ptag===true ? "21px":"28", lineHeight: ptag === true ? "29px": "32px" ,  }}  className="head2">{head2}</p>
                    <div className="banner_link flex">
                        <a>Learn more </a>
                        <a>Buy</a>
                    </div>
                </Fade>
            </div>
        </div>

    </>
}


