import styled from "styled-components";

interface TextProps {
    color?: string;
    size?: number
}

export const Button = styled.button`
    display: flex;
    width: 200px;
    flex-direction: column;
    justify-content: space-between;
    align-items: center ;
    padding: 5px 10px;
    margin: 10px;
    border: none;
    background-color: #fff;
    font-weight: bold;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 5px;
    cursor: pointer;

    :hover {
        background-color: #f2f2f2;
    }

`

export const iconContent = styled.div`

`

export const Paragrafh = styled.div<TextProps>`
    font-size: ${props => props.size ? props.size : 16}px;
    margin: 5px 10px;
    color: ${props => props.color ? props.color : '#4E7D96'};    
`