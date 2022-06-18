import * as S from './style'

const SubTitle = ({text, size, color}: any) => {
    return (
        <S.BoxTitle>
            <S.TextTitle color={color} size={size}>
                {text}
            </S.TextTitle>
        </S.BoxTitle>
    )
}

export default SubTitle