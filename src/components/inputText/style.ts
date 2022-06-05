import styled from "styled-components";

// TORNAR :focus ATIVADO QUANDO OUVER UM VALUE

export const InputGroup = styled.div`
    margin: 20px;
    position: relative;
`

export const InputText = styled.input`
    padding: 10px;
    border: none;
    border-radius: 5px;
    font: inherit;
    color: #1D5C63;
    background-color: transparent;
    outline: 2px solid #fff;

    ::placeholder {
        color: #1D5C63;
    }

    :focus:valid+label{
            transform: translate(10px, -10px) scale(.8);
            font-family: sans-serif;
            color: #1D5C63;
            padding-inline: 5px;
            background-color: #dedede;
    }

    :is(:focus, :valid) {
        outline-color: #1D5C63;
    }
    
`

export const LabelInput = styled.label`
    position: absolute;
    top: 0;
    left: 0;
    color: #1D5C63;
    font-family: sans-serif;
    transform: translate(10px, 10px);
    transition: transform .25s;
`