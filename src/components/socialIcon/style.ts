import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    margin: 0 20px;
    column-gap: 25px;
`

export const Icon = styled.a`
    width: 24px;
    height: 24px;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: #fff;
    border-radius: 50%;
    outline: 2px solid #fff;
    transition-property: outline-offset, outline-color, background-color;
    transition-duration: .25s;
    cursor: pointer;

    :hover {
        outline-offset: 4px;
        outline: 2px solid #484dda;

        svg{
            path {
                fill: #484dda;
            }
        }
    }
`