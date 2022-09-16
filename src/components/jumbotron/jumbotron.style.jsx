import styled from "styled-components"

export const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  margin: auto;
  width: 100%;

  @media (min-width: 600px) {
    flex-direction: ${({direction}) => direction};
    max-width: 1100px;
  }

`
export const Pane = styled.div`
  width: 100%;
  padding: 0 2.8125em;
  text-align:center ;

  @media (min-width: 600px){
    width: 50%;
  }  
`
export const Item = styled.div`
  display: flex;
  border-bottom: 8px solid #222;
  padding: 3.125em;
  color: white;
  overflow: hidden;
`
export const Container = styled.section`
  background-color: black;

  @media (max-width: 1000px){
    ${Item}:last-of-type h2 {
      margin-bottom: 3.125em;
    }
  }
`
export const Title = styled.h1`
  font-size: 2.1875rem;
  line-height: 1.1;
  margin-bottom: 0.5em;

  @media (min-width: 600px) {
    font-size: 3.125rem;
  }
`
export const SubTitle = styled.h2`
  font-size: 1.125rem;
  font-weight: normal;
  line-height: normal;

  @media (min-width: 600px) {
    font-size: 1.625rem
  }
`
export const Image = styled.img`
  max-width: 100%;
  height: auto;
`