import styled from "styled-components";

interface TextTitleProps {
    size?: number;
    color?: string;
}

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #E3EDF2;
`

export const ContentSpace = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const ContentPage = styled.div`
    padding: 0 20px;
`

export const ContainerTitle = styled.div`
    display: flex;
    justify-content: center;
`

export const ContentBox = styled.div`
    display: flex;
    flex-direction: column;
`

export const Centralize = styled.div`
    margin: 0 200px;
`

export const AlignContent = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
`

export const FormSend = styled.div`
    width: 25%;
    display: flex;
    flex-direction: column;
`

export const ContentSection = styled.div`
    width: 100%;
`

export const BoxParagrafh = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const TitleParagrafh = styled.h2`
    display: flex;
    color: #0A0D25;
`

export const Paragrafh = styled.div<TextTitleProps>`
    font-size: 16px;
    margin: 5px 0;
    padding: 5px;
    word-break: break-all;
    color: ${props => props.color ? props.color : '#4E7D96'};    
`

export const Img = styled.img`
    width: 300px;
`
