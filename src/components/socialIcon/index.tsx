import * as S from './style'
import { World } from '../../assets/icons/World'
import { Facebook } from '../../assets/icons/Facebook'
import { Instagram } from '../../assets/icons/Instagram'
import { WhatsApp } from '../../assets/icons/WhatsApp'

const SocialIcon = ({ icon }: any) => {

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
            <S.Icon>
                {iconSelected()}
            </S.Icon>
        </S.Container>
    )
}

export default SocialIcon