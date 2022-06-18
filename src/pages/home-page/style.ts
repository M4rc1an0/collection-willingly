import styled from "styled-components";

interface PropsContentBox {
    flex?: boolean
}

interface TextTitleProps {
    color?: string;
}

export const ContainerHome = styled.div`
    width: 100%;
    height: 100%;
    background-color: #9FC9DD;
`

export const Centralize = styled.div`
    margin: 0 200px;
`
export const Content = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 20px;
    margin: 0 20px 20px;
    background-color: #E3EDF2;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
`

export const ContentBox = styled.div<PropsContentBox>`
    display: flex;
    width: 100%;
    justify-content: space-between;
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

export const Paragrafh = styled.p`
    text-align: center;
    font-size: 16px;
    margin: 20px 0;
    color: #4E7D96;
`

export const BoxInformation = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 20px;
    padding: 10px;
`

export const CardParagraph = styled.div`
    text-align: center;
    font-size: 20px;
    color: #4E7D96;
`

export const ParagrafhBold = styled.p<TextTitleProps>`
    font-size: 20px;
    font-weight: bold;
    margin: 5px 0;
    color: ${props => props.color ? props.color : '#4E7D96'};
`

export const BoxImg = styled.div`
    width: 500px;
    height: 250px;
    margin: 20px 0;
`

export const Img = styled.img`
    width: 500px;
    height: 250px;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`

export const ContentInfoBox = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
