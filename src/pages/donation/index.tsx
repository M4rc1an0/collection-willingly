import { useEffect, useState } from "react";
import { Clothes } from "../../assets/icons/Clothes";
import { Message } from "../../assets/icons/Message";
import { Money } from "../../assets/icons/Money";
import { Others } from "../../assets/icons/Others";
import { Phone } from "../../assets/icons/Phone";
import { QrCode } from "../../assets/icons/QrCode";
import { Resources } from "../../assets/icons/Resources";
import { Footer, Header, Title, SubTitle, Button, InformationBox } from "../../components";
import * as S from "./style";

export default function donation() {
    const [render, setRender] = useState<any>('')

    const setValueStorage = (value: string) => {
        localStorage.setItem('donation', value)
        setRender(value)
    }

    useEffect(() => {
        setRender(localStorage.getItem('donation'))
    }, [render])

    return (
        <S.ContainerHome>
            <S.ContentTop>
                <Header />
                <S.ContentBox>
                    <SubTitle text='Formas de Doação:' />
                    <S.ContentButton>
                        <Button action={() => setValueStorage('clothes')} text='Roupas e Cobertores' textColor="#4E7D96" icon={<Clothes width={48} stroke="#FF844B" />} />
                        <Button action={() => setValueStorage('food')} text='Alimentos e Remedios' textColor="#4E7D96" icon={<Resources width={48} stroke="#FF844B" />} />
                        <Button action={() => setValueStorage('materials')} text='Material Didático e Outros' textColor="#4E7D96" icon={<Others width={48} stroke="#FF844B" />} />
                        <Button action={() => setValueStorage('money')} text='Transferências ou Dinheiro' textColor="#4E7D96" icon={<Money width={48} stroke="#FF844B" />} />
                    </S.ContentButton>
                    {/* <S.ContentButton>
                                <Button action={() => setRender(5)} text='Qr Code/Pix' textColor="#0A0D25" icon={<QrCode width={48} stroke='#0A0D25' />} />
                            </S.ContentButton> */}
                    {!render &&
                        <S.ContentMethods>
                            <S.ChooseDonation>Escolha uma forma de doação</S.ChooseDonation>
                        </S.ContentMethods>
                    }
                    {render === 'clothes' &&
                        <S.ContentDonation>
                            <S.chooseOption>Roupas e Cobertores</S.chooseOption>
                            <S.ContentSpace>
                                <S.Paragrafh>Para doação de roupas e cobertores dirija-se a algum dos nossos pontos de arrecadação:</S.Paragrafh>
                                <S.ContentMaps>
                                    <S.CenterItens>
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.651258470773!2d-46.672866299999995!3d-23.616837000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce50a052d4cb5f%3A0x635a42f7bef8e620!2sRua%20Constantino%20de%20Sousa%2C%20479%20-%20Campo%20Belo%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004605-001!5e0!3m2!1spt-BR!2sbr!4v1656133740532!5m2!1spt-BR!2sbr" width="400" height="300" loading="lazy"></iframe>
                                        <S.Paragrafh color="#000">Rua Constantino de Sousa, 479 - Campo Belo</S.Paragrafh>
                                        <S.Paragrafh color="#000">São Paulo - SP</S.Paragrafh>
                                        <S.Paragrafh color="#000">04605-001</S.Paragrafh>
                                    </S.CenterItens>
                                    <S.CenterItens>
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.451843289404!2d-46.568986985097695!3d-23.62398418465179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5cc3764d9b03%3A0xd3f26dfef0a3c6f!2sR.%20Gonzaga%20-%20Oswaldo%20Cruz%2C%20S%C3%A3o%20Caetano%20do%20Sul%20-%20SP%2C%2009540-110!5e0!3m2!1spt-BR!2sbr!4v1656134060206!5m2!1spt-BR!2sbr" width="400" height="300" loading="lazy"  ></iframe>
                                        <S.Paragrafh color="#000">R. Gonzaga - Oswaldo Cruz, 980</S.Paragrafh>
                                        <S.Paragrafh color="#000">São Caetano do Sul - SP</S.Paragrafh>
                                        <S.Paragrafh color="#000">09540-110</S.Paragrafh>
                                    </S.CenterItens>
                                </S.ContentMaps>
                            </S.ContentSpace>
                        </S.ContentDonation>
                    }
                    {render === 'food' &&
                        <S.ContentDonation>
                            <S.chooseOption>Alimentos e Remédios</S.chooseOption>
                            <S.ContentSpace>
                                <S.Paragrafh>Para doação de alimentos e remédios, entre em contato com a instituição de arrecadação alimenticia:</S.Paragrafh>
                                <S.CenterItens>
                                    <Phone width={75} stroke='#4287f5' />
                                    <SubTitle text='11 4823-6752' />
                                </S.CenterItens>
                                <S.Paragrafh>ou contate-nos pelo whats app:</S.Paragrafh>
                                <S.ButtonWpp>
                                    <Message width={75} stroke='#00c925' />
                                    <S.Paragrafh>Mande uma mensagem</S.Paragrafh>
                                </S.ButtonWpp>
                            </S.ContentSpace>
                        </S.ContentDonation>
                    }
                    {render === 'materials' &&
                        <S.ContentDonation>
                            <S.chooseOption>Material Didático e outros</S.chooseOption>
                        </S.ContentDonation>
                    }
                    {render === 'money' &&
                        <S.ContentDonation>
                            <S.chooseOption>Doação em dinheiro</S.chooseOption>
                        </S.ContentDonation>
                    }
                    {/* {render === 5 &&
                                <S.ContentDonation>
                                    <S.chooseOption>Qr Code e Pix</S.chooseOption>
                                </S.ContentDonation>
                            } */}
                </S.ContentBox>
            </S.ContentTop>
            <Footer />
        </S.ContainerHome>
    )
}