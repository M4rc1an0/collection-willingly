import * as S from './style'
import { World } from '../../assets/icons/World'
import { Facebook } from '../../assets/icons/Facebook'

const SocialIcon = ({ icon }: any) => {

    const iconSelected = () => {
        if (icon === 'facebook') {
            return <Facebook stroke='#fff'/>
        } else
            if (icon === 'instagram') {
                return <Facebook/>
            } else
                if (icon === 'twitter') {
                    return <Facebook/>

                } else
                    if (icon === 'wpp') {
                        return <Facebook/>

                    } else {

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