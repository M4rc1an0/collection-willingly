import * as S from './style'

const Button = ({ text, action, icon, active, disabled }: any) => {
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