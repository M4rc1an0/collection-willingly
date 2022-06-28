import * as S from './style'

const Button = ({ text, action, icon, active }: any) => {
    return (
        <S.Button active={active} onClick={action}>
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