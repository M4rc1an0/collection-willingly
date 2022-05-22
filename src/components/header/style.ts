import styled from "styled-components";

export const BoxHeader = styled.div`
    display: flex;
    align-items: center;
    height: 50px;
    background-color: #00d196;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`

export const LogoHeader = styled.a`
    display: flex;
    align-items: center;
    margin: 0 30px;
    padding: 5px 5px;
    cursor: pointer;

    :hover{
        background: rgba(230,232,250);
        border-radius: 50px;

        svg {
            path{
                fill: #00d196;
            }
        }
    }
`

export const Line = styled.div`
    height: 40px;
    border: 1px solid rgb(230,232,250);
`

export const BoxMenu = styled.div`
    display: flex;
    margin: 0 30px;
`

export const TitleMenu = styled.a`
    font-family: sans-serif;
    font-size: 16px;
    cursor: pointer;
    padding: 5px 10px;
    margin: 15px;

    :hover{
        background: rgba(230,232,250);
        border-radius: 40px;
        color: #00d196;
    }
`
