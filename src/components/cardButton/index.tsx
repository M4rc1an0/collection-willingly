import { ReactNode } from "react";
import * as S from "./style";

interface CardButtonProps {
    children: ReactNode
    width: string
    action: () => void
}

const CardButton = ({ children, width, action }: CardButtonProps) => {
    return (
        <S.Section width={width} onClick={action}>
            <S.BoxParagrafh>
                {children}
            </S.BoxParagrafh>
        </S.Section>
    )
}

export default CardButton