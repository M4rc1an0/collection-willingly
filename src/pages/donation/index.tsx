import { useState } from "react";
import { Clothes } from "../../assets/icons/Clothes";
import { Money } from "../../assets/icons/Money";
import { Others } from "../../assets/icons/Others";
import { QrCode } from "../../assets/icons/QrCode";
import { Resources } from "../../assets/icons/Resources";
import { Footer, Header, Title, SubTitle, Button, InformationBox } from "../../components";
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
                                <Button action={() => setRender(1)} text='Roupas/Cobertores' textColor="#0A0D25" icon={<Clothes width={48} stroke='#0A0D25' />} />
                                <Button action={() => setRender(2)} text='Alimentos/Remédios' textColor="#0A0D25" icon={<Resources width={48} stroke='#0A0D25' />} />
                                <Button action={() => setRender(3)} text='M. Didático/Outros' textColor="#0A0D25" icon={<Others width={48} stroke='#0A0D25' />} />
                                <Button action={() => setRender(4)} text='Cartão/Dinheiro' textColor="#0A0D25" icon={<Money width={48} stroke='#0A0D25' />} />
                                <Button action={() => setRender(5)} text='Qr Code/Pix' textColor="#0A0D25" icon={<QrCode width={48} stroke='#0A0D25' />} />
                            </S.ContentButton>
                            {render === 0 &&
                                <S.ContentMethods>
                                    <S.ChooseDonation>Escolha um tipo de doação</S.ChooseDonation>
                                </S.ContentMethods>
                            }
                            {render === 1 &&
                                <S.ContentDonation>
                                    <S.chooseOption>Roupas e Cobertores</S.chooseOption>
                                </S.ContentDonation>
                            }
                            {render === 2 &&
                                <S.ContentDonation>
                                    <S.chooseOption>Alimentos e Remédios</S.chooseOption>
                                </S.ContentDonation>
                            }
                            {render === 3 &&
                                <S.ContentDonation>
                                    <S.chooseOption>Material Didático e outros</S.chooseOption>
                                </S.ContentDonation>
                            }
                            {render === 4 &&
                                <S.ContentDonation>
                                    <S.chooseOption>Cartão e Dinheiro</S.chooseOption>
                                </S.ContentDonation>
                            }
                            {render === 5 &&
                                <S.ContentDonation>
                                    <S.chooseOption>Qr Code e Pix</S.chooseOption>
                                </S.ContentDonation>
                            }
                        </S.ContentBox>
                    </S.Content>
                </S.ContentTop>
                <Footer />
            </S.Centralize>
        </S.ContainerHome>
    )
}