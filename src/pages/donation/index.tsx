import { useEffect, useState } from "react";
import { Bank, Clothes, Restaurant, Money, Notebook, Others, QrCode, Resources, Here } from "../../assets/icons";
import { Footer, Header, Title, SubTitle, Button, Card } from "../../components";
import QRCode from "react-qr-code";
import * as S from "./style";
import axios from "axios";

export default function donation() {
    const [data, setData] = useState<any>()

    const [render, setRender] = useState<any>('')
    const [buttonClothes, setButtonClothes] = useState(false)
    const [buttonFood, setButtonFood] = useState(false)
    const [buttonMaterials, setButtonMaterials] = useState(false)
    const [buttonMoney, setButtonMoney] = useState(false)
    const [validation, setValidation] = useState('')
    const [food, setFood] = useState()
    const [medicine, setMedicine] = useState()
    const [others, setOthers] = useState()
    
    useEffect(() => {
        axios.get('https://collection-willingly-7a1b4-default-rtdb.firebaseio.com/collection_willingly.json')
            .then(function (response) {
                setData(response.data)
            })
    }, [])

    const click = () => {
        axios.patch(`https://collection-willingly-7a1b4-default-rtdb.firebaseio.com/collection_willingly.json`,{
            score: data.score + 1
        })
    }

    useEffect(() => {
        if (render === 'clothes') {
            setButtonClothes(true)
            setButtonFood(false)
            setButtonMaterials(false)
            setButtonMoney(false)
        } else if (render === 'food') {
            setButtonClothes(false)
            setButtonFood(true)
            setButtonMaterials(false)
            setButtonMoney(false)
        } else if (render === 'materials') {
            setButtonClothes(false)
            setButtonFood(false)
            setButtonMaterials(true)
            setButtonMoney(false)
        } else if (render === 'money') {
            setButtonClothes(false)
            setButtonFood(false)
            setButtonMaterials(false)
            setButtonMoney(true)
        } else {
            setButtonClothes(false)
            setButtonFood(false)
            setButtonMaterials(false)
            setButtonMoney(false)
        }
    }, [render])

    if (typeof window !== undefined) {
        useEffect(() => {
            const url = window.location.href
            setValidation(url)

        }, [])
    }

    const block = validation.split('/')[3]

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
                <Header active={block}/>
                <S.ImgBox>
                    <S.ImgBanner src="./imagemCrianças.jpg" />
                    <S.ContentImg>
                        <Title text='Faça uma doação' color='#fff' />
                        <Here width={60} stroke='#FF844B' />
                        <S.ParagrafhBold color="#FF844B">DOE CARINHO. DOE AMOR. DOE ESPERANÇA.</S.ParagrafhBold>
                    </S.ContentImg>
                </S.ImgBox>
                <S.ContentBox>
                    <S.ContentFlex>
                        <Button active={buttonClothes} action={() => { setValueStorage('clothes'), setButtonClothes(true) }} text='Roupas e Cobertores' icon={<Clothes width={48} stroke="#FF844B" />} />
                        <Button active={buttonFood} action={() => { setValueStorage('food'), setButtonFood(true) }} text='Alimentos e Remedios' icon={<Resources width={48} stroke="#FF844B" />} />
                        <Button active={buttonMaterials} action={() => { setValueStorage('materials'), setButtonMaterials(true) }} text='Material Didático e Outros' icon={<Others width={48} stroke="#FF844B" />} />
                        <Button active={buttonMoney} action={() => { setValueStorage('money'), setButtonMoney(true) }} text='Transferências ou Dinheiro' icon={<Money width={48} stroke="#FF844B" />} />
                    </S.ContentFlex>
                    {!render &&
                        <S.ContentMethods>
                            <S.ChooseDonation>Escolha uma forma de doação</S.ChooseDonation>
                        </S.ContentMethods>
                    }
                    {render === 'clothes' &&
                        <>
                            <S.chooseOption>Roupas e Cobertores</S.chooseOption>
                            <S.ContentSpace>
                                <S.Paragrafh>Para doação de roupas e cobertores dirija-se a algum dos nossos pontos de arrecadação:</S.Paragrafh>
                                <S.ContentMaps>
                                    <S.CenterMaps>
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.651258470773!2d-46.672866299999995!3d-23.616837000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce50a052d4cb5f%3A0x635a42f7bef8e620!2sRua%20Constantino%20de%20Sousa%2C%20479%20-%20Campo%20Belo%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004605-001!5e0!3m2!1spt-BR!2sbr!4v1656133740532!5m2!1spt-BR!2sbr" width="400" height="300" loading="lazy" frameBorder='0' />
                                        <S.Paragrafh color="#fff">Rua Constantino de Sousa, 479 - Campo Belo</S.Paragrafh>
                                        <S.Paragrafh color="#fff">São Paulo - SP</S.Paragrafh>
                                        <S.Paragrafh color="#fff">04605-001</S.Paragrafh>
                                    </S.CenterMaps>
                                    <S.CenterMaps>
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.451843289404!2d-46.568986985097695!3d-23.62398418465179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5cc3764d9b03%3A0xd3f26dfef0a3c6f!2sR.%20Gonzaga%20-%20Oswaldo%20Cruz%2C%20S%C3%A3o%20Caetano%20do%20Sul%20-%20SP%2C%2009540-110!5e0!3m2!1spt-BR!2sbr!4v1656134060206!5m2!1spt-BR!2sbr" width="400" height="300" loading="lazy" frameBorder='0' />
                                        <S.Paragrafh color="#fff">R. Gonzaga - Oswaldo Cruz, 980</S.Paragrafh>
                                        <S.Paragrafh color="#fff">São Caetano do Sul - SP</S.Paragrafh>
                                        <S.Paragrafh color="#fff">09540-110</S.Paragrafh>
                                    </S.CenterMaps>
                                </S.ContentMaps>
                            </S.ContentSpace>
                        </>
                    }
                    {render === 'food' &&
                        <>
                            <S.chooseOption>Alimentos e Remédios</S.chooseOption>
                            <S.ContentSpace>
                                <S.Paragrafh>Para doação de alimentos e remédios, entre em contato com algumas das instituições especializadas para cada caso:</S.Paragrafh>
                                <S.ContentFlex>
                                    <Card width='350px'>
                                        <S.CenterItens>
                                            <SubTitle text='Alimentos' />
                                            <S.ButtonLink onClick={() => {
                                                window.location.href = "https://naacao.com.br/doacoes-para-projetos-sociais/?gclid=Cj0KCQjw8O-VBhCpARIsACMvVLPW7v3pEnOYp5WtGZxtV3eUV_s1qktjcjAwJbJ_-0Cs5PV1db56g1gaAj8JEALw_wcB"
                                                click()
                                            }}>
                                                <Restaurant width={75} stroke="#00aaaa" />
                                                <S.ParagrafhBold color="#e97922">ONG NAAÇÃO</S.ParagrafhBold>
                                            </S.ButtonLink>
                                        </S.CenterItens>
                                    </Card>
                                    <Card width='350px'>
                                        <S.CenterItens>
                                            <SubTitle text='Remédios' />
                                            <S.ButtonLink onClick={() => {
                                                window.location.href = "https://cihesel.ong.br/campanha-dos-remedios/"
                                                click()
                                                }}>
                                                <Resources width={75} stroke="#c6da17" />
                                                <S.ParagrafhBold color="#00aaaa">CIHESEL</S.ParagrafhBold>
                                            </S.ButtonLink>
                                        </S.CenterItens>
                                    </Card>
                                </S.ContentFlex>
                            </S.ContentSpace>
                        </>
                    }
                    {render === 'materials' &&
                        <>
                            <S.chooseOption>Material Didático e outros</S.chooseOption>
                            <S.ContentSpace>
                                <S.Paragrafh>Para doação de materiais didático e outros:</S.Paragrafh>
                                <S.ContentFlex>
                                    <Card width='350px'>
                                    <S.CenterItens>
                                            <SubTitle text='Materiais didático e outros' />
                                            <S.ButtonLink onClick={() => {
                                                window.location.href = "https://www.larcasabela.org.br/doacoes"
                                                click()
                                                }}>
                                                <Notebook width={75} stroke="#54bf54" fill="#0D6035" />
                                                <S.ParagrafhBold color="#0D6035">LAR CASA BELA</S.ParagrafhBold>
                                            </S.ButtonLink>
                                        </S.CenterItens>
                                    </Card>
                                </S.ContentFlex>
                            </S.ContentSpace>
                        </>
                    }
                    {render === 'money' &&
                        <>
                            <S.chooseOption>Doação em dinheiro</S.chooseOption>
                            <S.ContentFlex>
                                <Card width='250px'>
                                    <S.ContentSpace>
                                        <Bank width={100} stroke="#FF844B" />
                                        <SubTitle text='Conta Bancária' />
                                        <S.ParagrafhBold color="#000">Conta Corrente - 76793-9</S.ParagrafhBold>
                                        <S.ParagrafhBold color="#000">Agência - 5306</S.ParagrafhBold>
                                        <S.ParagrafhBold color="#000">Banco - Itaú</S.ParagrafhBold>
                                        <S.Paragrafh>ou</S.Paragrafh>
                                        <S.ParagrafhBold color="#000">Conta Corrente - 97357-3</S.ParagrafhBold>
                                        <S.ParagrafhBold color="#000">Agência - 9647</S.ParagrafhBold>
                                        <S.ParagrafhBold color="#000">Banco - Bradesco</S.ParagrafhBold>

                                    </S.ContentSpace>
                                </Card>
                                <Card width='250px'>
                                    <S.ContentSpace>
                                        <QrCode width={100} stroke='#FF844B' />
                                        <SubTitle text='Pix ou QrCode' />
                                        <S.ParagrafhBold color='#000'>Cpf - 479.972.528.94</S.ParagrafhBold>
                                        <S.Paragrafh>ou</S.Paragrafh>
                                        <S.ContentQrCode>
                                            <QRCode value="https://mpago.la/2YkmT2R" size={150} fgColor='#000' />
                                        </S.ContentQrCode>
                                    </S.ContentSpace>
                                </Card>
                                <Card width='250px'>
                                    <S.ContentSpace>
                                        <Money width={100} stroke='#FF844B' />
                                        <SubTitle text='Dinheiro ou Cartão' />
                                        <S.ParagrafhBold>Dirija-se a um ponto de pagamento:</S.ParagrafhBold>
                                        <S.ParagrafhBold color='#000'>Rua Constantino de Sousa, 479 - Campo Belo, São Paulo - SP, 04605-001 </S.ParagrafhBold>
                                        <S.Paragrafh>ou</S.Paragrafh>
                                        <S.ParagrafhBold color="#000">R. Gonzaga - Oswaldo Cruz, 980, São Caetano do Sul - SP, 09540-110</S.ParagrafhBold>
                                    </S.ContentSpace>
                                </Card>

                            </S.ContentFlex>
                        </>
                    }
                </S.ContentBox>
            </S.ContentTop>
            <Footer />
        </S.ContainerHome>
    )
}