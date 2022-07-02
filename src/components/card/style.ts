import styled from "styled-components";

interface PropsSection {
    width?: string
    background?: string
}

export const Section = styled.div<PropsSection>`
    width: ${props => props.width && props.width};
    margin: 10px;
    display: flex;
    font-family: 'Lato', sans-serif;
`

export const BoxParagrafh = styled.button<PropsSection>`
    border: none;
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 20px;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`