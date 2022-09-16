import { Header, Profiles } from "../components"
import { useContext } from "react"

import * as ROUTES from "../constants/routes"
import {UserContext} from "../context/user.context"

function SelectProfileContainer({user, setProfile}) {
  const {currentUser, setCurrentUser} = useContext(UserContext)
  return (
     <>
      <Header bg={false}>
        <Header.Frame>
          <Header.Logo 
          to={ROUTES.HOME}
          src="/images/misc/logo.svg"
          alt="Netflix"
          />
        </Header.Frame>
      </Header>
      <Profiles>
        <Profiles.Title>Who's watching?</Profiles.Title>
        <Profiles.List>
          <Profiles.User 
            onClick={()=>setCurrentUser({
              displayName: currentUser.displayName,
              photoUrl: currentUser.photoUrl
            })}
          >
            {/* <Profiles.Picture src={currentUser.photoUrl} />
            <Profiles.Name>{currentUser.displayName}</Profiles.Name> */}
          </Profiles.User>
        </Profiles.List>        
      </Profiles>
     </>
  )
}

export default SelectProfileContainer