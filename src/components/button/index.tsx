import * as S from './style'

const Button = ({ text, action, icon, textColor }: any) => {
    return (
        <S.Button onClick={action}>
            <S.iconContent >
                {icon && icon}
            </S.iconContent>
            <S.Paragrafh color={textColor}>
                {text}
            </S.Paragrafh>
        </S.Button>
    )
}

export default Button