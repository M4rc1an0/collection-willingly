import { Facebook, Instagram, WhatsApp, World } from '../../assets/icons'
import * as S from './style'

interface SocialIcon {
    icon: string
    href: string
}

const SocialIcon = ({ icon, href }: SocialIcon) => {

    const iconSelected = () => {
        if (icon === 'facebook') {
            return <Facebook stroke='#fff' width={48} />
        } else if (icon === 'instagram') {
                return <Instagram stroke='#fff' width={48} />
            } else if (icon === 'wpp') {
                    return <WhatsApp stroke='#fff' width={48} />
                } else {
                    return <World stroke='#fff' width={48} />
                }
    }

    return (
        <S.Container>
            <S.Icon href={href}>
                {iconSelected()}
            </S.Icon>
        </S.Container>
    )
}

export default SocialIcon