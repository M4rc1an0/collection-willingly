import styled from "styled-components";

interface SubTitleProps {
    size?: number
    color?: string
}

export const BoxTitle = styled.div`
    margin: 10px 0;
    padding: 5px;
`

export const TextTitle = styled.h2<SubTitleProps>`
    font-size: ${props => props.size ? props.size : 24}px;
    color: ${props => props.color ? props.color : '#4E7D96'};
`