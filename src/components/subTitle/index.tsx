import * as S from './style'

interface SubTitleProps {
    text: string
    size?: number
    color?: string
}

const SubTitle = ({text, size, color}: SubTitleProps) => {
    return (
        <S.BoxTitle>
            <S.TextTitle color={color} size={size}>
                {text}
            </S.TextTitle>
        </S.BoxTitle>
    )
}

export default SubTitle