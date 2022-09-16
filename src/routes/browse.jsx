import { useContext } from "react"
import BrowseContainer from "../containers/browse"
import { CategoriesContext } from "../context/categories.context"

//import selectionMap from "../utils/selection-map"
import selectionMap from "../utils/selection-map"

function Browse(){
   const {categories} = useContext(CategoriesContext)
   const {series, films} = categories

  const slides = selectionMap({series, films}) 

  return <BrowseContainer slides={slides} />
}  

export default Browse