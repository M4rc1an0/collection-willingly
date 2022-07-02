import styled from "styled-components";

interface TextProps {
    size?: number;
    color?: string;
}

export const Container = styled.div`
    width: 100%;
    height: 100vh;
`

export const ContentSpace = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const ImgBanner = styled.img`
    width: 100%;
    position: relative;
    mask-image: linear-gradient(to top, transparent, black 40%);
`

export const ImgBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ContentImg = styled.div`
    display: flex;
    width: 100%;
    padding-bottom: 20px;
    background-color: rgb(0,0,0,0.7);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`

export const ContentPage = styled.div`
    padding: 0 20px;
`

export const ContainerTitle = styled.div`
    display: flex;
    justify-content: center;
`

export const ContentBox = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
`

export const Centralize = styled.div`
    margin: 0 100px;
`

export const AlignContent = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin: 50px 0;
`

export const FormSend = styled.div`
    width: 25%;
    display: flex;
    flex-direction: column;
`

export const BoxTextArea = styled.div`
    width: 400px;
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

export const Paragraph = styled.div<TextProps>`
    font-size: 16px;
    margin: 5px 0;
    padding: 5px;
    word-break: break-all;
    color: ${props => props.color ? props.color : '#4E7D96'};    
`

export const ParagrafhBold = styled.p<TextProps>`
    font-size: ${props => props.size ? props.size : 16}px;
    font-weight: bold;
    margin: 5px 10px;
    color: ${props => props.color ? props.color : '#4E7D96'};
`

export const Img = styled.img`
    width: 300px;
`

export const OpacityModal = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    background-color: rgba(0,0,0,0.8);
`

export const Modal = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    border-radius: 10px;
    background-color: #fff;
    color: #000;
`

export const ContentModal = styled.div`

`