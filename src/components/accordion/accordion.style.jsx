import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  border-bottom:8px solid #222;
`
export const Inner = styled.div`
  display: flex;
  padding: 4.375em 2.8125em;
  flex-direction: column;
  max-width: 900px;
  margin: auto;  
`
export const Item = styled.div`
  color: white;
  margin-bottom: 0.875em;

  &:first-of-type{
    margin-top: 3em;
  }
`
export const Title = styled.h1`
  font-size: 2.1875rem;
  line-height: 1.1;
  margin-top: 0;
  margin-bottom: 0.5em;
  color: white;
  text-align: center;
  max-width: 1200px;

  @media (min-width: 600px) {
    font-size: 3.125rem
  }
`
export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  margin-bottom: 1px;
  font-weight: normal;
  background-color: #303030;
  padding: 0.8em 1.2em;
  user-select: none;
  align-items: center;
  width: 100%;

  img{
    filter: brightness(0) invert(1);
    width: 16px;

    @media (min-width: 600px){
      width: 24px;
    }
  }
  @media (min-width: 600px) {
    font-size: 1.625rem;
  }
`
export const Body = styled(Header)`
  font-size: 1rem;
  line-height: 1.6;
  text-align: left;
  cursor: unset;
  transition: max-height 0.25s cubic-bezier(0.47, 0, 0.745, 0.715);

  @media (min-width: 600px){
    font-size: 1.625rem;
    
  }
`
