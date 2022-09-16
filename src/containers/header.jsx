import { useContext } from "react"
import { signOutUser } from "../utils/firebase"
import { Header } from "../components"
import * as ROUTES from "../constants/routes"
import { UserContext } from "../context/user.context"


function HeaderContainer({children}){
  const { currentUser } = useContext(UserContext)
  return (
    <Header>
      <Header.Frame>
        <Header.Logo 
        to={ROUTES.HOME} 
        src="/images/misc/logo.svg" 
        alt="Netflix"
        />
        <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>
      </Header.Frame>
      {children}
    </Header>
  )
}

export default HeaderContainer

