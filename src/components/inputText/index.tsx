import * as S from "./style";

const Input = ({value, change}: any) => {

    // REFAZER INPUTTEXT
    return(
        <S.InputGroup>
            <S.InputText type='text' value={value} onChange={change}id='name'/>
        </S.InputGroup>
    )
}

export default Input