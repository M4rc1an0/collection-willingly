import styled from "styled-components";

interface TextTitleProps {
    size: string;
    color: string;
}

export const BoxTitle = styled.div`
    margin: 10px 0;
    padding-left: 10px;
`

export const TextTitle = styled.h1<TextTitleProps>`
    font-size: ${props => props.size ? props.size : '32px'};
    color: ${props => props.color ? props.color : '#4E7D96'};
`