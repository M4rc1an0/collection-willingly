import { ReactNode } from "react";
import * as S from "./style";

interface CardBoxButtonProps {
    children: ReactNode
    width: string
}

const CardBoxButton = ({children, width}: CardBoxButtonProps) => {
    return (
        <S.Section width={width}>
            <S.BoxParagrafh>
                {children}
            </S.BoxParagrafh>
        </S.Section>
    )
}

export default CardBoxButton