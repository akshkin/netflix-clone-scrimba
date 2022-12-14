import JumbotronContainer from "../../containers/Jumbotron"
import FooterContainer from "../../containers/footer"
import FAQsContainer from "../../containers/faqs"
import HeaderContainer from "../../containers/header"
import { OptForm } from "../../components"
import { Feature } from "../../components"

function Home() {
    return (
      <>
        <HeaderContainer>
          <Feature>
            <Feature.Title>Unlimited films, TV programs and more.</Feature.Title>
            <Feature.SubTitle>Watch anywhere. Cancel at any time.</Feature.SubTitle>          
            <OptForm>
              <OptForm.Input placeholder="Email address"/>
              <OptForm.Button>Try it now</OptForm.Button>
              <OptForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptForm.Text>
            </OptForm>
          </Feature>
        </HeaderContainer> 
        <JumbotronContainer /> 
        <FAQsContainer />
        <FooterContainer />  
      </>
          
    )
}

export default Home