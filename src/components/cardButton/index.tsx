import * as S from "./style";

const CardButton = ({ children, width, action }: any) => {
    return (
        <S.Section width={width} onClick={action}>
            <S.BoxParagrafh>
                {children}
            </S.BoxParagrafh>
        </S.Section>
    )
}

export default CardButton