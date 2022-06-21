import styled from "styled-components";


interface PropsSection {
    width?: number
    background?: string
}

export const Section = styled.div<PropsSection>`
    width: ${props => props.width && props.width};
    margin: 10px;
    display: flex;
    font-family: 'Lato', sans-serif;
`

export const BoxParagrafh = styled.div<PropsSection>`
    display: flex;
    width: 100%;
    padding: 20px;
    border-radius: 5px;
    color: #fff;
    background-color: ${props => props.background ? props.background : '#fff'};
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`