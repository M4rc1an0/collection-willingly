import * as S from "./style";

const TextArea = ({value, change, name}: any) => {
    return(
        <S.AreaGroup>
            <S.TextArea onChange={change} value={value}/>
        </S.AreaGroup>
    )
}

export default TextArea