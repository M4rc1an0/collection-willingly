import styled from "styled-components";

export const BoxHeader = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    height: 50px;
    background-color: #4E7D96;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`

export const LogoHeader = styled.a`
    display: flex;
    align-items: center;
    margin: 0 30px;
    padding: 5px 5px;
    cursor: pointer;

    :hover{
        background: #fff;
        border-radius: 50px;

        svg {
            path{
                fill: #4E7D96;
            }
        }
    }
`

export const Line = styled.div`
    width: 1.5px;
    height: 40px;
    background-color: #E3EDF2;
`

export const BoxMenu = styled.div`
    display: flex;
    margin: 0 30px;
`

export const TitleMenu = styled.a`
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    cursor: pointer;
    padding: 5px 10px;
    margin: 15px;
    text-decoration: none;

    :hover{
        background: #fff;
        color: #4E7D96;
    }
`
