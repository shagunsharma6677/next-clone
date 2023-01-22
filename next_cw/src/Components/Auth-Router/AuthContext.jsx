import React from "react"
export const AuthContext = React.createContext()

export default function AuthContextProvider({ children }) {
    const [macAllModel, setMacAllModel] = React.useState([])
    const [macAccess, setMacAccess] = React.useState([])
    const [macSave, setMacSave] = React.useState([])
    const [buyItem, setBuyItem] = React.useState([])
    const [total, setTotal] = React.useState(0)
    console.log("buy", buyItem)

    const totalPrice = () => {
        let ourTotal = 0
        for (let i = 0; i <= buyItem.length - 1; i++) {
            ourTotal += Number(buyItem[i]["price"])
            console.log("here", ourTotal)
        }
        setTotal(ourTotal)
        console.log("total",total)
    }
    const getMac = async (url) => {
        const response = await fetch(url)
        const res = await response.json()
        console.log(res)
        setMacAllModel(res)
    }
    const getBuy = async (url) => {
        const response = await fetch(url)
        const res = await response.json()
        console.log(res, "getbuy")
        setBuyItem(res)
    }
    const getMacAcess = async (url) => {
        const response = await fetch(url)
        const res = await response.json()
        console.log(res, "getbuy")
        setMacAccess(res)
    }

    const getMacSaveD = async (url) => {
        const response = await fetch(url)
        const res = await response.json()
        console.log(res, "getbuy")
        setMacSave(res)
    }


    const handleBuy = async (buy) => {
        console.log("buy", buy)
        let add = await fetch(`https://next-our.onrender.com/shop`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(buy)

        })
        let res = await add.json()
        console.log(res)
        getBuy(`https://next-our.onrender.com/shop`)
        setTotal(total + Number(buy.price))
        totalPrice()
        console.log(total)
        setBuyItem([...buyItem, buy])
    }

    const handleDel = async (del) => {
        let add = await fetch(`https://next-our.onrender.com/shop/${del}`, {
            method: 'DELETE', // Method itself
            headers: {
                "Content-Type": "application/json", // Indicates the content 
            },
        })
        console.log("del", add)
        getBuy(`http://localhost:8080/shop`)
        totalPrice()

    }
    // https://next-our.onrender.com/
    React.useEffect(() => {
        getMac(`https://next-our.onrender.com/macAllModels`)
        getBuy(`https://next-our.onrender.com/shop`)
        getMacAcess(`https://next-our.onrender.com/macAccess`)
        getMacSaveD(`https://next-our.onrender.com/saveOn`)
        totalPrice()

    }, [])
   

    return <><AuthContext.Provider value={{ macAllModel, buyItem, total, handleDel, handleBuy, macAccess, macSave }}>{children}

    </AuthContext.Provider></>
}