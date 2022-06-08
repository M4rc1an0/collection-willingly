import styled from "styled-components";

interface PropsSection {
    width?: number
    background?: string
}

export const Section = styled.div<PropsSection>`
    width: ${props => props.width ? props.width : '100%'};
    margin: 20px;
    display: flex;
`

export const BoxParagrafh = styled.div<PropsSection>`
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 20px;
    border-radius: 5px;
    color: #fff;
    background-color: ${props => props.background ? props.background : '#fff'};
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`