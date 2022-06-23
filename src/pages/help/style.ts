import styled from "styled-components";

interface TextTitleProps {
    size?: number;
    color?: string;
}

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #9FC9DD;
`

export const Centralize = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0 200px;
`
export const ContentSpace = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
    display: flex;
    width: 100%;
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
    color: ${props => props.color ? props.color : '#4E7D96'};    
`

export const Img = styled.img`
    width: 300px;
`
