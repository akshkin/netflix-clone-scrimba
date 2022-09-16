import styled from "styled-components"

export const Title = styled.p`
    font-size: 1/625rem;
    color: #e5e5e5;
    font-weight: bold;
    margin-left: 3.5em;
    margin-right: 3.5em;
    margin-top: 0;
    text-align: left;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 3.125em;
    box-sizing: border-box;
    
    > ${Title} {
        @media (max-width: 1000px) {
            margin-left: 1.875em;
        }
    }
    
    &:last-of-type {
        margin-bottom: 0;
    }
`;

export const Group = styled.div`
    display: flex;
    flex-direction: ${({ flexDirection }) => (flexDirection === 'row' ? 'row' : 'column')};
    ${({ alignItems }) => alignItems && `align-items: ${alignItems}`};
    ${({ margin }) => margin && `margin: ${margin}`};
    
    > ${Container}:first-of-type {
        @media (min-width: 1100px) {
            margin-top: -9.375em;
        }
    }
`;

export const SubTitle = styled.p`
    font-size: 0.75rem;
    color: white;
    font-weight: bold;
    margin-top: 0;
    margin-bottom: 0;
    user-select: none;
    display: none;
`;

export const Text = styled.p`
    margin-top: 0.3125em;
    font-size: 0.625rem;
    color: white;
    margin-bottom: 0;
    user-select: none;
    display: none;
    line-height: normal;
`;

export const Entities = styled.div`
    display: flex;
    flex-direction: row;
`;

export const Meta = styled.div`
    display: none;
    position: absolute;
    bottom: 0;
    padding: 0.625em;
    background-color: #0000008f;
`;

export const Image = styled.img`
    border: 0;
    width: 100%;
    max-width: 305px;
    cursor: pointer;
    height: auto;
    padding: 0;
    margin: 0;
`;

export const Item = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 0.3125em;
    position: relative;
    cursor: pointer;
    transition: transform 0.2;
    
    &:hover {
        transform: scale(1.3);
        z-index: 99;
    }
    
    @media (min-width: 1000px) {
        &:hover ${Meta}, &:hover ${Text}, &:hover ${SubTitle} {
            display: block;
            z-index: 100;
        }
    }
    
    &:first-of-type {
        margin-left: 1.875em;
        
        @media (min-width: 1000px) {
            margin-left: 3.5em;
        }
    }
    
    &:last-of-type {
        margin-right: 1.875em;
        
        @media (min-width: 1000px) {
            margin-right: 3.5em;
        }
    }
`;

export const FeatureText = styled.p`
    font-size: 1.125rem;
    color: white;
    font-weight: ${({ fontWeight }) => fontWeight === 'bold' ? 'bold' : 'normal'};
    margin: 0;
    text-align: left;

    @media (max-width: 800px) {
        line-height: 22px;
    }
`;

export const Feature = styled.div`
    display: flex;
    flex-direction: row;
    background: url(${({ src }) => src});
    background-size: contain;
    position: relative;
    height: 360px;
    background-position-x: right;
    background-repeat: no-repeat;
    background-color: black;
    
    @media (max-width: 1000px) {
        height: auto;
        background-size: auto;
        
        ${Title} {
            font-size: 1.25rem;
            line-height: 20px;
            margin-bottom: 0.625em;
        }
        ${FeatureText} {
            font-size: 0.875rem;
        }
    }
`;

export const FeatureTitle = styled(Title)`
    margin-left: 0;
`;

export const FeatureClose = styled.button`
    color: white;
    position: absolute;
    right: 20px;
    top: 20px;
    cursor: pointer;
    background-color: transparent;
    border: 0;
    
    img {
        filter: brightness(0) invert(1);
        width: 24px;
    }
`;

export const Content = styled.div`
    margin: 1.7875em;
    max-width: none;
    line-height: normal;
    
    @media (min-width: 1000px) {
      margin: 3.5em;
      max-width: 500px;
    }
`

export const Maturity = styled.div`
    background-color: ${({ rating }) => (rating >= 15 ? 'red' : 'green')};
    border-radius: 15px;
    width: 20px;
    height: 20px;
    padding: 0.3125em;
    text-align: left;
    color: white;
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    margin-right: 0.625em;
    font-size: 0.75rem;
`;