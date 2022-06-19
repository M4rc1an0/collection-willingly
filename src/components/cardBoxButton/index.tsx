import * as S from "./style";

const CardBoxButton = ({children, width}: any) => {
    return (
        <S.Section width={width}>
            <S.BoxParagrafh>
                {children}
            </S.BoxParagrafh>
        </S.Section>
    )
}

export default CardBoxButton