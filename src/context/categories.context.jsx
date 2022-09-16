import {useState, createContext, useEffect } from "react"
import { getCategoriesAndDocuments } from "../utils/firebase"
import NETFLIX_DATA from "../netflix-data"


export const CategoriesContext = createContext({
  categories: {}
})

export const CategoriesProvider = ({children}) => {
  const [categories, setCategories] = useState(NETFLIX_DATA)
 

  // useEffect(() => {
  //   const getCategoriesMap = async () => {
  //     const categoryMap = await getCategoriesAndDocuments()
  //     console.log(categoryMap)
  //     setCategories(categoryMap)
  //   }
  //   getCategoriesMap()    
  // },[])

  useEffect(() => {
    setCategories(NETFLIX_DATA)
  }, [])

 
  const value = {categories}
    return (
        <CategoriesContext.Provider value={value}>
            {children}
        </CategoriesContext.Provider>
    )
}
