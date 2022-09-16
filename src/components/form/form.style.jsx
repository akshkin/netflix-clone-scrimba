import styled from "styled-components"
import { Link as ReachRouterLink} from "react-router-dom"

//import {Container, Base, Title, Text, TextSmall, Link, Error, Input, Submit} from "./form.style"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 660px;
  background-color: rgba(0, 0, 0, 0.75);
  border-radius: 5px;
  width: 100%;
  margin: auto;
  max-width: 450px;
  padding: 3.75em 4.25em 2.5em;
  margin-bottom: 6.25em;
`

export const Error = styled.div`
  background: #e87c03;
  border-radius: 4px;
  font-size: 0.875rem;
  margin: 0 0 1em;
  color: white;
  padding: 0.9375em 1.25em;

`

export const Base = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 450px;
  width: 100%;
`

export const Title = styled.h1`
  color: white;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1.75em;
`

export const Text = styled.h1`
  color: #737373;
  font-size: 16px;
  font-weight: 500;
`

export const TextSmall = styled.h2`
  margin-top: 0.625em;
  font-size: 0.8125rem;
  line-height: normal;
  color: #8c8c8c;
`

export const Link = styled(ReachRouterLink)`
  color: #fff;
  text-decoration: none;
  
  &:hover {
      text-decoration: underline;
  }
`

export const Input = styled.input`
  background: #333;
  border-radius: 4px;
  border: 0;
  color: #fff;
  height: 50px;
  line-height: 50px;
  padding: 5px 20px;
  margin-bottom: 20px;
  
  &:last-of-type {
      margin-bottom: 30px;
  }
`

export const Submit = styled.button`
  background-color: #e50914;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  margin: 0 0 0.75em;
  padding: 1em;
  border: 0;
  color: white;
  cursor: pointer;
  
  &:disabled {
      opacity: 0.5;
  }
`