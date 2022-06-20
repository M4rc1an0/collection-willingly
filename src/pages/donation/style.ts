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
    margin: 20px 0;
    display: flex;
    justify-content: space-around;
`

export const ContentMethods = styled.div`
    width: 100%;
    height: 400px;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center ;
    background-color: rgb(159,201,221, 0.5);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border: 1px solid #fff;
    border-radius: 5px;
`

export const ContentDonation = styled.div`
    width: 100%;
    height: 400px;
    margin-top: 20px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background-color: rgb(159,201,221, 0.5);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border: 1px solid #fff;
    border-radius: 5px;
`

export const ContentSpace = styled.div`
    margin: 20px 0;
`

export const CollectionAddress = styled.div`
    margin: 20px 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
`

export const Address = styled.div`

`

export const ChooseDonation = styled.h2`
    color: #4E7D96;
`

export const chooseOption = styled.h2`
    width: 100%;
    text-align: center;
    color: #4E7D96;
    font-weight: bold;
`