import styled from "styled-components";

export const ContainerHome = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #202c33;
`

export const Centralize = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 200px;
`

export const HoverBox = styled.div`
    display: flex;
    justify-content: center;
    margin: 10px;

    :hover{
        svg {
            path{
                transition-duration: 1s;
                fill: green;
            }
        }
    }
`
