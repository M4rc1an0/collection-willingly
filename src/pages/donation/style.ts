import styled from "styled-components";

interface TextProps {
    color?: string;
    size?: number
}

export const ContainerHome = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #9FC9DD;
`

export const Centralize = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0 200px;
`
export const ContentTop = styled.div`
    width: 100%;
`

export const Content = styled.div`
    display: flex;
    padding: 20px;
    margin: 0 20px 20px;
    background-color: #E3EDF2;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
`

export const ContentBox = styled.div`
    width: 100%;    
`

export const BoxParagrafh = styled.div`
    margin: 0 10px;
    display: flex;
`

export const TitleParagrafh = styled.h2`
    display: flex;
    color: #0A0D25;
`

export const Paragrafh = styled.div<TextProps>`
    font-size: ${props => props.size ? props.size : 16}px;
    margin: 5px 0;
    color: ${props => props.color ? props.color : '#4E7D96'};    
`

export const Img = styled.img`
    width: 300px;
`

export const ContentButton = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 20px 50px;

`

export const ContentMethods = styled.div`
    width: 100%;
    height: 700px;
    background-color: red;
    /* transition-timing-function: ease ;
    transition-duration: 2s; */
`