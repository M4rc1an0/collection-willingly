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
    color: ${props => props.color ? props.color : "#4E7D96"};
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
    color: ${props => props.color ? props.color : "#4E7D96"};
`

export const ContentBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 100px;
    width: 100%;
`

export const ContentImageBox = styled.div`
    display: flex;
    position: absolute;
    flex-direction: column;
    align-items: center;
    padding: 20px 100px;
    width: 100%;
    background-color: rgb(0,0,0,0.7);
`

export const DescriptionDonation = styled.div`
    padding: 20px;
    margin: 0 300px;
`

export const BoxImg = styled.div`
    width: 500px;
    height: 250px;
    margin: 20px 0;
`

export const Img = styled.img`
    position: relative;
    width: 100%;
    border-radius: 5px;
    mask-image: linear-gradient( to top, transparent, white, transparent );
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
    justify-content: center;
    width: 100%;
`

export const BenefitsDiv = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`

export const ContentInstituitions = styled.div`
    margin-top: 30px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const table = styled.div`
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
`

export const UlTable = styled.ul`
    display: flex;
    flex-direction: column;
    margin: 20px;
`

export const ItemList = styled.div`
    display: flex;
    justify-content: space-between;

    :nth-child(even) {
        background-color: #9FC9DD;
    }
`

export const LiItem = styled.li`
    list-style: none;
    margin: 5px 30px;
`

export const ContentUl = styled.div`
    display: flex;
    align-items: center;
`

export const Ul = styled.ul`
    
`

export const Li = styled.li`
    display: flex;
    align-items: center;
    list-style: none;
`

export const ContentDonate = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
`

export const SendDonate = styled.a`
    width: 100%;
    text-decoration: none;
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

export const ContainerSendDonate = styled.div`
    display: flex;
    flex-direction: column;
    background-color: rgb(0,0,0,0.7);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`