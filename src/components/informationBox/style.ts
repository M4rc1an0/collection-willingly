import styled from "styled-components";

interface PropsSection {
    width: number
}

export const Section = styled.div<PropsSection>`
    width: ${props => props.width ? props.width : '100%'};
    margin: 20px;
    display: flex;
`

export const BoxParagrafh = styled.div`
    color: #fff;
    padding: 20px;
    background-color: #1A3C40;
    border-radius: 5px;
`