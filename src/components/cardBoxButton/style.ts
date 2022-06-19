import styled from "styled-components";


interface PropsSection {
    width?: number
    background?: string
}

export const Section = styled.div<PropsSection>`
    width: ${props => props.width ? props.width : '100%'};
    margin: 10px;
    display: flex;
    font-family: 'Lato', sans-serif;
`

export const BoxParagrafh = styled.button<PropsSection>`
    cursor: pointer;
    border: 1px solid #fff;
    display: flex;
    width: 100%;
    padding: 20px;
    border-radius: 5px;
    color: #fff;
    background-color: rgb(159,201,221, 0.5);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    
    :hover {
        background-color: rgb(159,201,221);
    }
`