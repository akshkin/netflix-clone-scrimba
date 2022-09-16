import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 8px solid #222;
  text-align: center;
  padding: 10.3125em 2.8125em;
  color: white;
  align-items: center;
`

export const Title = styled.h1`
  max-width: 640px;
  font-size: 2.1875rem;

  @media (min-width: 600px) {
    font-size: 3.125rem;
  }
`

export const SubTitle = styled.h2`
  font-size: 1.125rem;
  margin: 1em auto;

  @media (min-width: 600px) {
    font-size: 1.625rem;
  }
`