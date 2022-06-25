import styled from "styled-components";

// TORNAR :focus ATIVADO QUANDO OUVER UM VALUE

export const InputGroup = styled.div`
    margin: 20px;
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
            color: #1D5C63;
            padding-inline: 5px;
            background-color: #E3EDF2;
    }

    :is(:focus, :valid) {
        outline-color: #1D5C63;
    }
    
`