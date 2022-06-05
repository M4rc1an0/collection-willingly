import * as S from "./style";

const Input = ({value, label, change}: any) => {
    return(
        <S.InputGroup>
            <S.InputText type='text' value={value} onChange={change}id='name'  />
            <S.LabelInput htmlFor='name'>{label}</S.LabelInput>
        </S.InputGroup>
    )
}

export default Input