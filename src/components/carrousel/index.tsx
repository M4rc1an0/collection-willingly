import { useState } from "react";
import * as S from "./style";

const Carrousel = () => {
    const [slider, setSlider] = useState(1)

    const carrousel = () => {

        if (slider === 1) {
            setTimeout(() => {
                setSlider(2)
            }, 10000);
            return (
                <S.Img onClick={() => setSlider(2)} src="https://1.bp.blogspot.com/-5ipUZgvqFLc/Xsz5LCIad3I/AAAAAAAB93k/4SXVtzsvlCQt67vDX-tGD7K3-kz7lB8AwCLcBGAsYHQ/s640/AS.jpg" />
            )
        } else if (slider === 2) {
            setTimeout(() => {
                setSlider(3)
            }, 10000);
            return (
                <S.Img onClick={() => setSlider(3)} src="http://www.prefeitosegestoes.com.br/site/wp-content/uploads/2017/08/o-que-fazpr-uma-crianca-feliz-16.jpg" />
            )
        } else if (slider === 3) {
            setTimeout(() => {
                setSlider(1)
            }, 10000);
            return (
                <S.Img onClick={() => setSlider(1)} src="https://static.wixstatic.com/media/4dd868_58072a71325f40168be147a9674c2771~mv2.jpg/v1/fill/w_935,h_589,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/4dd868_58072a71325f40168be147a9674c2771~mv2.jpg" />
            )
        }
    }


    return (
        <S.BoxImg>
            {carrousel()}
        </S.BoxImg>
    )
}

export default Carrousel