import { AuthContext } from "../Auth-Router/AuthContext"
import React from "react"
import "./Button.css"
import { useNavigate } from "react-router-dom"
export default function Button({ shape, cardD }) {
    const nav = useNavigate()
    const { handleBuy,buyItem } = React.useContext(AuthContext)
    // console.log("clicked",cardD)
    return <>
        <div onClick={() =>{ 
            handleBuy(cardD)
            console.log("clicked")
            nav("/shop") }} style={{ padding: shape === true ? "padding: 6px 20px" : "12px 44px" }} className="cards-buy">
            <a href="#">Buy</a>
        </div>
    </>
}