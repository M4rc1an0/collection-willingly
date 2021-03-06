import { ReactNode } from "react";
import * as S from "./style";

interface CardProps {
    children: ReactNode
    width: string
}

const Card = ({ children, width }: CardProps) => {
    return (
        <S.Section width={width}>
            <S.BoxParagrafh>
                {children}
            </S.BoxParagrafh>
        </S.Section>
    )
}

export default Card