import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Form } from "../components"
import HeaderContainer from "../containers/header"
import FooterContainer from "../containers/footer"
import * as ROUTES from "../constants/routes"

import {signInAuthUserWithEmailAndPassword} from "../utils/firebase"

const defaultFormFields = {
  email: '',
  password: ''
}

function SignIn(){
  const navigate = useNavigate()
  const [error, setError] = useState('')
  const [formFields, setFormFields] = useState(defaultFormFields)
  const {email, password} = formFields
  


  const isInvalid = !email || !password

  function resetFormFields(){
    setFormFields(defaultFormFields)
  }

  async function handleSubmit(event){
    event.preventDeafault()

    try {
      const {user} =  await signInAuthUserWithEmailAndPassword(email, password)
      console.log(user)
      resetFormFields()
      navigate(ROUTES.BROWSE)

    } catch (error){
        switch(error.code){
            case 'auth/wrong-password' :
                setError('incorrect password for email')
                break
            case 'auth/user-not-found' :
                setError ('no user associated with this email')
                break
            default :
                setError(error)
        }                    
    }
  }

  function handleChange(event){
    const {name, value}= event.target
    setFormFields({...formFields, [name]:value}) 
  }

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign In</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={handleSubmit} >
            <Form.Input 
              placeholder="Email address"
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              required
            />
            <Form.Input 
              placeholder="Password"
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              autoComplete= "Off"
              required
            />
            <Form.Submit  type="submit" disabled={isInvalid}>
              Sign In
            </Form.Submit>

            <Form.Text>
              New to Netflix? <Form.Link to="/sign-up">Sign Up Now</Form.Link>
            </Form.Text>

            <Form.TextSmall>
              This Page is protected by Google reCAPTCHA.
            </Form.TextSmall>
          </Form.Base>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  )
}

export default SignIn