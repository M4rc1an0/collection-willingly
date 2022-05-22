import styled from "styled-components";

export const BoxHeader = styled.div`
    display: flex;
    align-items: center;
    height: 50px;
    background-color: #00d196;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`

export const LogoHeader = styled.div`
    display: flex;
    align-items: center;
    margin: 0 30px;
    padding: 5px 10px;
    cursor: pointer;

    :hover{
        background: rgba(181, 181, 181, 0.5);
        border-radius: 5px;
    }
`

export const Line = styled.div`
    height: 40px;
    border: 1px solid #323232;
`

export const TitleMenu = styled.div`
    font-family: cursive;
    font-size: 16px;
    margin: 15px;
`