import { createContext, useState, useEffect } from "react"
import { onAuthStateChangedListener } from "../utils/firebase"

export const UserContext = createContext({
  setCurrentUser: ()=> null,
  currentUser: null
})

export const UserProvider = ({children}) => {
  const [currentUser, setCurrentUser] = useState(null)

  
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user)=> {
      console.log(user)
      setCurrentUser(user)
    })
    
    return unsubscribe
  })

  const value = {currentUser, setCurrentUser}

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )
}