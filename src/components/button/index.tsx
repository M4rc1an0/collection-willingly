import * as S from './style'

const Button = ({text, action}: any) => {
    return(
        <S.Button onClick={action}>     
            {text}
        </S.Button>
    )
}

export default Button