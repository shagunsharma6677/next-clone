import React from "react"


export const AuthContext = React.createContext()


export default function AuthContextProvider({ children }) {
    const [data, setData] = React.useState({})

    const getData = async () => {
        const response = await fetch(`http://localhost:3004/data`)
        const res = await response.json()
        setData(res)
    }

    React.useEffect(() => {
        getData()
    }, [])
    // const { macAllModels, macAccess, macWayToSave } = data
    console.log(data)

    return <><AuthContext.Provider value={{}}>{children}

    </AuthContext.Provider></>
}