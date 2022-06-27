import * as S from "./style";

const Card = ({ children, width }: any) => {
    return (
        <S.Section width={width}>
            <S.BoxParagrafh>
                {children}
            </S.BoxParagrafh>
        </S.Section>
    )
}

export default Card