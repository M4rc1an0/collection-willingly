import { World } from "../../assets/icons/World";
import { Footer, Header, Title, SubTitle, Button } from "../../components";
import * as S from "./style";

export default function donation() {
    return (
        <S.ContainerHome>
            <S.Centralize>
                <S.ContentTop>
                    <Header />
                    <S.Content>
                        <S.ContentBox>
                            <Title text='Quais formas posso ajudar ?' />
                            <S.BoxParagrafh>
                                <S.Paragrafh>
                                    Você pode ajudar através da doação de
                                    alimentos, roupas, material didático,
                                    remédios, dinheiro e etc.
                                </S.Paragrafh>
                            </S.BoxParagrafh>
                            <SubTitle text='Metodos de doação'/>
                            <Button text='Cartão/Dinheiro' textColor="#0A0D25" icon={<World stroke='#FF844B'/>}/>
                        </S.ContentBox>
                    </S.Content>
                </S.ContentTop>
                <Footer />
            </S.Centralize>
        </S.ContainerHome>
    )
}