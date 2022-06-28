import styled from "styled-components";

interface TextProps {
    color?: string;
    size?: number
}

export const ContainerHome = styled.div`
    width: 100%;
    height: 100%;
    background-color: #E3EDF2;
`

export const ContentTop = styled.div`
    width: 100%;
`

export const ImgCarrousel = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ImgBanner = styled.img`
    width: 100%;
    position: relative;
    mask-image: linear-gradient(to top, transparent, black 100%);
`

export const ContentImg = styled.div`
    display: flex;
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

export const BoxInformation = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 10px;
    padding: 10px;
`

export const CardParagraph = styled.div`
    text-align: center;
    font-size: 20px;
    color: #fff;
    word-break: break-all;
`

export const ParagrafhBold = styled.p<TextProps>`
    font-size: 20px;
    font-weight: bold;
    margin: 5px 10px;
    color: ${props => props.color ? props.color : '#4E7D96'};
`

export const BoxParagrafh = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`

export const ContentButtonCards = styled.div`
    display: flex;
    justify-content: center;
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

export const ContentBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 100px;
    width: 100%;
`

export const BoxImg = styled.div`
    width: 500px;
    height: 250px;
    margin: 20px 0;
`

export const Img = styled.img`
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
    margin: 20px 0;
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

export const OpacityModal = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    background-color: rgba(0,0,0,0.8);
`

export const Modal = styled.div`
    background-color: #fff;
    color: #000;
    width: 60%;
    height: 60%;
`