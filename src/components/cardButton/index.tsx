import * as S from "./style";

const CardButton = ({ children, width }: any) => {
    return (
        <S.Section width={width}>
            <S.BoxParagrafh>
                {children}
            </S.BoxParagrafh>
        </S.Section>
    )
}

export default CardButton