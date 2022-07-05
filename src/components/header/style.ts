import styled from "styled-components";

interface activeProps {
    active: boolean
}


export const BoxHeader = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    height: 50px;
    background-color: #4E7D96;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`

export const LogoHeader = styled.a<activeProps>`
    display: flex;
    align-items: center;
    margin: 0 30px;
    padding: 5px 5px;
    cursor: pointer;
    background-color: ${props => props.active ? "#fff" : "#4E7D96"};
    border-radius: 50px;

    :hover{
        background-color: ${props => props.active ? "#4E7D96" : "#fff"};
        border-radius: 50px;

        svg {
            path{
                fill: ${props => props.active ? "#fff" : "#4E7D96"};
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

export const TitleMenu = styled.a<activeProps>`
    font-size: 16px;
    font-weight: bold;
    color: ${props => props.active ? "#4E7D96" : "#fff"};
    background-color: ${props => props.active ? "#fff" : "#4E7D96"};
    cursor: pointer;
    padding: 5px 10px;
    margin: 15px;
    text-decoration: none;

    :hover{
        background: #fff;
        color: #4E7D96;
    }
`
