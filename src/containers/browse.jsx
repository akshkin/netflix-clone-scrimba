import { useState, useEffect, useContext } from "react"
import { Header, Loading, Card, Player } from "../components"
import * as ROUTES from "../constants/routes"
// import { FirebaseContext } from "../context/firebase"
 import  SelectProfileContainer  from "./profiles"
import FooterContainer from "./footer"
import { signOutUser } from "../utils/firebase"

// import { addCollectionAndDocuments } from "../utils/firebase" 
import { UserContext } from "../context/user.context"



function BrowseContainer({slides}){

  const [profile, setProfile] = useState({})
  const [category, setCategory] = useState("series")
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [slideRows, setSlideRows] = useState([])

  const {currentUser, setCurrentUser} = useContext(UserContext)

  // useEffect(() => {
  //   addCollectionAndDocuments("categories", NETFLIX_DATA)
  // }, [])
  

    // const user = {
    //     displayName: "Karl",
    //     photoURL: "1"
    // }

    useEffect(()=>{
      setTimeout(() => {
        setLoading(false)
      }, 3000)
    }, [currentUser])

    useEffect(() => {
      setSlideRows(slides[category])
    }, [slides, category])
    
     
    return currentUser ? (
        <>
          {loading ? <Loading src={currentUser.photoURL} /> : <Loading.ReleaseBody />}
            <Header src="joker1" dontShowOnSmallViewport>
              <Header.Frame>
                <Header.Group>
                  <Header.Logo to={ROUTES.HOME} src="/images/misc/logo.svg" alt="Netflix" />
                  <Header.Link
                    active={category === "series" ? "true" : "false" }
                    onClick={()=> setCategory("series")}
                    >
                    Series
                  </Header.Link>
                  <Header.Link
                    active={category === "films" ? "true" : "false"}
                    onClick={()=> setCategory("films")}
                    >
                    Films
                  </Header.Link>
                </Header.Group>
                <Header.Group>
                  <Header.Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                  <Header.Profile>
                    <Header.Picture src={currentUser.photoURL} />
                    <Header.Dropdown>
                      <Header.Group>
                        <Header.Picture src={currentUser.photoURL} />
                        <Header.Link>{currentUser.displayName}</Header.Link>
                      </Header.Group>
                      <Header.Group>
                        <Header.Link onClick={signOutUser}>Sign Out</Header.Link>
                      </Header.Group>
                    </Header.Dropdown>
                  </Header.Profile>
                </Header.Group>
              </Header.Frame>

              <Header.Feature>
                <Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
                <Header.Text>
                    Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham
                    City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a
                    futile attempt to feel like he's part of the world around him.
                </Header.Text>
                <Header.PlayButton>Play</Header.PlayButton>
              </Header.Feature>              
            </Header>

            <Card.Group>
              {slideRows.map(slideItem => {                
                return (
                  <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
                    <Card.Title>{slideItem.title}</Card.Title>
                    <Card.Entities>
                      {slideItem.data.map(item => {
                        const {id, title, genre, slug, description} = item
                      return(
                        <Card.Item key={id} item={item}>
                          <Card.Image src={`/images/${category}/${genre}/${slug}/small.jpg`} />
                          <Card.Meta>
                            <Card.SubTitle>{title}</Card.SubTitle>
                            <Card.Text>{description}</Card.Text>
                          </Card.Meta>
                        </Card.Item>
                      ) 
                      })}
                    </Card.Entities>
                    <Card.Feature category={category}>
                      <Player>
                          <Player.Button />
                          <Player.Video />
                      </Player>
                    </Card.Feature>
                </Card>
                )
              })}
            </Card.Group>
            <FooterContainer />
        </>
        ) : (
        <SelectProfileContainer user={currentUser} setCurrentUser={setCurrentUser} />
        )
    
}

export default BrowseContainer

//profile.displayName ?
//: (
  // <SelectProfileContainer user={user} setProfile={setProfile} />
  // )