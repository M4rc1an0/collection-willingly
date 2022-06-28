import { Copyright, World } from '../../assets/icons'
import SocialIcon from '../socialIcon'
import * as S from './style'

const Footer = () => {
    return (
        <S.Container>
            <S.ContainerContent>
                <S.LogoFooter href="/home-page">
                    <World width={60} stroke='#fff' />
                </S.LogoFooter>
                <S.Line />
                <S.ContainerSocial>
                    <SocialIcon icon='facebook' />
                    <SocialIcon icon='instagram' />
                    <SocialIcon icon='wpp' />
                </S.ContainerSocial>
                <S.Line />
                <S.RightsReserved>
                    <S.Paragraph size={12}>
                        Todos os direitos reservados
                    </S.Paragraph>
                    <S.IconBox>
                        <Copyright width={16} stroke='#fff' />
                    </S.IconBox>
                    <S.Paragraph size={12}>
                        2022 | Desenvolvido por Rogério Marciano
                    </S.Paragraph>
                </S.RightsReserved>
                <S.Line />
                <S.ContainerAddress>
                    <S.Paragraph>
                        E-mail: collection_willingly@hotmail.com
                    </S.Paragraph>
                    <S.Paragraph>
                        Telefone: 11-48236752
                    </S.Paragraph>
                    <S.Paragraph>
                        Cel: 11-99877-5649
                    </S.Paragraph>
                    <S.Paragraph>
                        Rua Couto de Magalhães, 170
                    </S.Paragraph>
                    <S.Paragraph>
                        Passo do Feijó, Alvorada - RS
                    </S.Paragraph>
                </S.ContainerAddress>
            </S.ContainerContent>
        </S.Container>
    )
}

export default Footer