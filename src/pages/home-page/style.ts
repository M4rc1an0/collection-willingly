import styled from "styled-components";

interface TextProps {
    color?: string;
    size?: number
}

export const ContainerHome = styled.div`
    width: 100%;
    height: 100%;
    background-color: #9FC9DD;
`

export const Centralize = styled.div`
    margin: 0 200px;
    background-color: #9FC9DD;

`

export const ContentTop = styled.div`
    width: 100%;
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

export const ContentBox = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`

export const BoxParagrafh = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`

export const TitleParagrafh = styled.h2`
    display: flex;
    color: #0A0D25;
`

export const Paragrafh = styled.p<TextProps>`
    text-align: center;
    font-size: ${props => props.size ? props.size : 16}px;
    margin: 20px 0;
    color: ${props => props.color ? props.color : '#4E7D96'};
`

export const BoxInformation = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;
    padding: 10px;
`

export const CardParagraph = styled.div`
    text-align: center;
    font-size: 20px;
    color: #4E7D96;
`

export const ParagrafhBold = styled.p<TextProps>`
    font-size: 20px;
    font-weight: bold;
    margin: 5px 10px;
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

export const ContentBenefits = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 20px;
`

export const BenefitsDiv = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`

export const ContentUl = styled.div`
    margin-left: 50px;
    display: flex;
    align-items: center;
`

export const Ul = styled.ul`
    
`

export const Li = styled.li`
    display: flex;
    align-items: center;
    list-style: none;
    margin: 10px 0;
`

export const ContentDonate = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px 0;
`

export const SendDonate = styled.a`
    cursor: pointer;

    :hover {
        svg {
            path:nth-child(1) {
                fill: #fff;
            }

            path:nth-child(2) {
                fill: #FF844B;
            }
        }
    }
`