import styled from "styled-components";

interface PropsSection {
    width: number
}

export const Section = styled.div<PropsSection>`
    width: ${props => props.width ? props.width : '100%'};
    display: flex;
`

export const BoxParagrafh = styled.div`
    color: #fff;
    padding: 20px;
    background-color: #161b22;
`