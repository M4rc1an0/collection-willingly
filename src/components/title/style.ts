import styled from "styled-components";

interface TitleProps {
    size?: number
    color?: string
}

export const BoxTitle = styled.div`
    margin: 10px 0;
    padding: 5px;
`

export const TextTitle = styled.h1<TitleProps>`
    font-size: ${props => props.size ? props.size : '32px'};
    color: ${props => props.color ? props.color : '#4E7D96'};
`