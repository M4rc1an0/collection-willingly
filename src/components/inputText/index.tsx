import * as S from "./style";

const Input = ({value, change}: any) => {

    return(
        <S.InputGroup>
            <S.InputText onChange={change} value={value}/>
        </S.InputGroup>
    )
}

export default Input