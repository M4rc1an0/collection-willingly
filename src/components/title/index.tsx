import * as S from './style'

const Title = ({text}: any) => {
    return (
        <S.BoxTitle>
            <S.TextTitle>
                {text}
            </S.TextTitle>
        </S.BoxTitle>
    )
}

export default Title