import * as S from "./style";

interface InputProps {
    value: string
    change: (e: any) => void
}

const Input = ({value, change}: InputProps) => {

    return(
        <S.InputGroup>
            <S.InputText onChange={change} value={value}/>
        </S.InputGroup>
    )
}

export default Input