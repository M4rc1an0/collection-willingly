import * as S from "./style";

const Input = ({value, change, name}: any) => {

    return(
        <S.InputGroup>
            <S.InputText name={name} onChange={change} value={value}/>
        </S.InputGroup>
    )
}

export default Input