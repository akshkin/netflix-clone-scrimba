import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { FirebaseContext } from "../context/firebase"
import { Form } from "../components"
import HeaderContainer from "../containers/header"
import * as ROUTES from "../constants/routes"
import FooterContainer from "../containers/footer"

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../utils/firebase"

const defaultFormFields = {
  firstName: '',
  email: '',
  password: ''
}

function SignUp(){
   const navigate = useNavigate()
  // const { firebase } = useContext(FirebaseContext)
  const [formFields, setFormFields] = useState(defaultFormFields)

  const [error, setError] = useState('')

  const {firstName, email, password} = formFields
  const isInvalid = !firstName || !email || !password 

  function resetFormFields(){
    setFormFields(defaultFormFields)
  }
  async function handleSubmit(event){
    event.preventDefault()

    try {
      const {user} = await createAuthUserWithEmailAndPassword(email,password)
      console.log(user)
      await createUserDocumentFromAuth(user, {displayName: firstName, photoUrl:Math.ceil(Math.random() * 5)})
      resetFormFields()
      navigate(ROUTES.BROWSE)
    
    } catch (error){
        if(error.code === 'auth/email-already-in-use'){
            setError('Cannot create user, email already in use')
        } else {
            setError(`user creation encountered an ${error}`)
        }
        
    }

  }

  function handleChange(event){
    const {name, value} = event.target
    setFormFields({...formFields, [name]: value})
  }

   return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign Up</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={handleSubmit}>
            <Form.Input
              placeholder="First Name"
              type="text"
              name="firstName"
              value={firstName}
              onChange={handleChange}
              required
            />
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
              required
            />
            <Form.Submit disabled={isInvalid}>Sign Up</Form.Submit>

            <Form.Text>
              Already a user ? <Form.Link to="/sign-in">Sign In</Form.Link>
            </Form.Text>

            <Form.TextSmall>
              This Page is protected by Google reCAPTCHA.
            </Form.TextSmall>
          </Form.Base>
        </Form>
      </HeaderContainer>
      <FooterContainer/>
    </>  

   )
}

export default SignUp