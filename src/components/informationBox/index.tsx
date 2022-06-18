import * as S from "./style";

const InformationBox = ({children, width, background}: any) => {
    return (
        <S.Section width={width}>
            <S.BoxParagrafh background={background}>
                {children}
            </S.BoxParagrafh>
        </S.Section>
    )
}

export default InformationBox