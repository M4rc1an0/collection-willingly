import * as S from "./style";

interface TextAreaProps {
    value: string
    change: (e: any) => void
}

const TextArea = ({value, change}: TextAreaProps) => {
    return(
        <S.AreaGroup>
            <S.TextArea onChange={change} value={value}/>
        </S.AreaGroup>
    )
}

export default TextArea