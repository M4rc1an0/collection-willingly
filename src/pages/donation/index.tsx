import { useState } from "react";
import { Clothes } from "../../assets/icons/Clothes";
import { Money } from "../../assets/icons/Money";
import { Others } from "../../assets/icons/Others";
import { QrCode } from "../../assets/icons/QrCode";
import { Resources } from "../../assets/icons/resources";
import { World } from "../../assets/icons/World";
import { Footer, Header, Title, SubTitle, Button } from "../../components";
import * as S from "./style";

export default function donation() {
    const [render, setRender] = useState(0)

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
                            <SubTitle text='Metodos de doação' />
                            <S.ContentButton>
                                <Button action={() => setRender(1)} text='Cartão/Dinheiro' textColor="#0A0D25" icon={<Money width={48} stroke='#0A0D25' />} />
                                <Button text='Roupas/Cobertores' textColor="#0A0D25" icon={<Clothes width={48} stroke='#0A0D25' />} />
                                <Button text='Alimentos/Remédios' textColor="#0A0D25" icon={<Resources width={48} stroke='#0A0D25' />} />
                            </S.ContentButton>
                            <S.ContentButton>
                                <Button text='M. Didático/Outros' textColor="#0A0D25" icon={<Others width={48} stroke='#0A0D25' />} />
                                <Button text='Qr Code' textColor="#0A0D25" icon={<QrCode width={48} stroke='#0A0D25' />} />
                            </S.ContentButton>
                            {render === 1 && 
                                <S.ContentMethods>Cartão/Dinheiro</S.ContentMethods>
                            }
                        </S.ContentBox>
                    </S.Content>
                </S.ContentTop>
                <Footer />
            </S.Centralize>
        </S.ContainerHome>
    )
}