import * as S from "./style"

interface ButtonProps {
    text: string
    action?: () => void
    icon?: JSX.Element
    active?: boolean
    disabled?: boolean
}

const Button = ({ text, action, icon, active, disabled }: ButtonProps) => {
    return (
        <S.Button active={active} onClick={action} disabled={disabled}>
            <S.iconContent active={active}>
                {icon && icon}
            </S.iconContent>
            <S.Paragrafh active={active}>
                {text}
            </S.Paragrafh>
        </S.Button>
    )
}

export default Button