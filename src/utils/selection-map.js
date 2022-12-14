 //mport { CategoriesContext } from "../context/categories.context"

function selectionMap({series, films}){
  //const {categories} = useContext(CategoriesContext)
   //const { series, films } = categories
  // Object.keys(categories).map(category => categories[category].map(category => {
  //   const {series, films} = category
    return {
      series: [
        {title: "Documentaries", data: Object.values(series).filter(item => item.genre === "documentaries")},
        {title: "Comedies", data: Object.values(series).filter(item => item.genre === "comedies")},
        {title: "Children", data: Object.values(series).filter(item => item.genre === "children")},
        {title: "Crime", data: Object.values(series).filter(item => item.genre === "crime")},
        {title: "Feel Good", data: Object.values(series).filter(item => item.genre === "feel-good")},
      ],
      films: [
        {title: "Drama Good", data: Object.values(films).filter(item => item.genre === "drama")},
        {title: "Thriller", data: Object.values(films).filter(item => item.genre === "thriller")},
        {title: "Children", data: Object.values(films).filter(item => item.genre === "children")},
        {title: "Suspense", data: Object.values(films).filter(item => item.genre === "suspense")},
        {title: "Romance", data: Object.values(films).filter(item => item.genre === "romance")}
      ]
    }
 
}

export default selectionMap