import React from "react"


export const AuthContext = React.createContext()


export default function AuthContextProvider({ children }) {
    const [macAllModel, setMacAllModel] = React.useState([])
    const [macAccess, setMacAccess] = React.useState([])
    const [macSave, setMacSave] = React.useState([])
    const [buyItem, setBuyItem] = React.useState([])

    const getData = async () => {
        const response = await fetch(`http://localhost:8080/data`)
        const res = await response.json()
        console.log(res)
        setMacAllModel(res.macAllModels)
        setMacAccess(res.macAccess)
        setMacSave(res.macWayToSave)
    }

    const handleBuy = (buy) => {
        setBuyItem([...buyItem, buy])
        console.log("buyiem",buyItem)
    }

    React.useEffect(() => {
        getData()
    }, [])
    // const { macAllModels, macAccess, macWayToSave } = data
    // console.log(data)

    return <><AuthContext.Provider value={{ macAllModel,handleBuy,buyItem, macAccess, macSave }}>{children}

    </AuthContext.Provider></>
} 