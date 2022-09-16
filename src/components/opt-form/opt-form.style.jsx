import styled from "styled-components"

export const Container = styled.div`
  height: 100%;
  margin-top: 1.25em;
  display: flex;
  flex-direction: column; 
  align-items: center;
  flex-wrap: wrap;

  @media (min-width: 1000px){
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
  }

`

export const Input = styled.input`
  max-width: 425px;
  width: 100%;
  border: 0;
  padding: 0.875em;
  height: 50px;

  @media (min-width: 1000px) {
    height: 70px
  }
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  height: 50px;
  color: white;
  background-color: #e50914;
  text-transform: uppercase;
  padding: 0 2em;
  margin-top: 1.5em;
  font-size: 1rem;
  border: 0;
  cursor: pointer;

  img{
    margin-left: 0.75em;
    filter: brightness(0) invert(1);
    width: 16px;

    @media (min-width: 1000px){
      width: 24px;
    }
  }

  &:hover{
    background-color: #f40612;
  }

  @media (min-width: 1000px){
    font-size: 1.625rem;
    margin-block: auto;
    height: 70px;
  }
`

export const Text = styled.p`
  font-size: 1rem;
  color: white;
  text-align: center;
  line-height: 1.4;

  @media (min-width: 600px){
    font-size: 1.1875rem;
  }
`