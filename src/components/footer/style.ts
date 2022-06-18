import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: #4E7D96;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`

export const ContainerContent = styled.div`
    width: 100%;
    display: flex;
`

export const LogoFooter = styled.a`
    display: flex;
    align-items: center;
    margin: 20px 30px;
    cursor: pointer;

    :hover {
        svg {
            path {
                fill: #FF844B;
            }
        }
    }

`

export const ContainerSocial = styled.div`
    display: flex;
    align-items: center;
    margin: 20px 20px;
    cursor: pointer;
`

export const ContainerAddress = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px 20px;
`

export const Paragraph = styled.p`
    display: flex;
    align-items: center;
    font-size: 16px;
    color: #fff;
`

export const RightsReserved = styled.div`
    width: 100%;
    margin: 10px 0;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Line = styled.div`
    width: 1.5px;
    height: 80px;
    margin: 10px 0;
    background-color: #E3EDF2;
`

export const IconBox = styled.div`
    display: flex;
    align-items: center;
    margin: 0 5px;
`
