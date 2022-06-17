import { World } from '../../assets/icons/World'
import SocialIcon from '../socialIcon'
import * as S from './style'

const Footer = () => {
    return (
        <S.Container>
            <S.LogoFooter href="/home-page">
                <World width={60} stroke='#fff' />
            </S.LogoFooter>
            <S.Line />
            <SocialIcon icon='facebook'/>
            <SocialIcon icon='facebook'/>
            <SocialIcon icon='facebook'/>
            <SocialIcon icon='facebook'/>
        </S.Container>
    )
}

export default Footer