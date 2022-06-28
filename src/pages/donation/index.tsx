import { useEffect, useState } from "react";
import { Bank, Clothes, Message, Money, Others, Phone, QrCode, Resources } from "../../assets/icons";
import { Here } from "../../assets/icons/Here";
import { Footer, Header, Title, SubTitle, Button, InformationBox, Card } from "../../components";
import * as S from "./style";

export default function donation() {
    const [render, setRender] = useState<any>('')
    const [buttonClothes, setButtonClothes] = useState(false)
    const [buttonFood, setButtonFood] = useState(false)
    const [buttonMaterials, setButtonMaterials] = useState(false)
    const [buttonMoney, setButtonMoney] = useState(false)

    useEffect(() => {
        if (buttonClothes === true) {
            setButtonFood(false)
            setButtonMaterials(false)
            setButtonMoney(false)
        } else if (buttonFood === true) {
            setButtonClothes(false)
            setButtonMaterials(false)
            setButtonMoney(false)
        } else if (buttonMaterials === true) {
            setButtonClothes(false)
            setButtonFood(false)
            setButtonMoney(false)
        } else if (buttonMoney === true) {
            setButtonClothes(false)
            setButtonFood(false)
            setButtonMaterials(false)
        }
    }, [buttonClothes, buttonFood, buttonMaterials, buttonMoney])

    console.log(buttonClothes, 'buttonClothes')
    console.log(buttonFood, 'buttonFood')
    console.log(buttonMaterials, 'buttonMaterials')
    console.log(buttonMoney, 'buttonMoney')


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
                <S.ImgBox>
                    <S.ImgBanner src="./imagemCrianças.jpg" />
                    <S.ContentImg>
                        <Title text='Faça uma doação' color='#fff' />
                        <Here width={60} stroke='#FF844B' />
                    </S.ContentImg>
                </S.ImgBox>
                <S.ContentBox>
                    <S.ContentFlex>
                        <Button active={buttonClothes} 
                            action={() => {setValueStorage('clothes'), setButtonClothes(true)}} text='Roupas e Cobertores' icon={<Clothes width={48} stroke="#FF844B" />} />
                        <Button active={buttonFood} action={() => {setValueStorage('food'), setButtonFood(true)}} text='Alimentos e Remedios' icon={<Resources width={48} stroke="#FF844B" />} />
                        <Button active={buttonMaterials} action={() => {setValueStorage('materials'), setButtonMaterials(true)}} text='Material Didático e Outros' icon={<Others width={48} stroke="#FF844B" />} />
                        <Button active={buttonMoney} action={() => {setValueStorage('money'), setButtonMoney(true)}} text='Transferências ou Dinheiro' icon={<Money width={48} stroke="#FF844B" />} />
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
                        </>
                    }
                    {render === 'food' &&
                        <>
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
                                <S.Paragrafh>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium</S.Paragrafh>
                            </S.ContentSpace>
                        </>
                    }
                    {render === 'materials' &&
                        <>
                            <S.chooseOption>Material Didático e outros</S.chooseOption>
                            <S.ContentFlex>
                                <Card width='350px'>
                                    <S.ContentSpace>
                                        <S.Paragrafh color='#FF844B'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                                            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                                            veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                                            voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                                            magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                                            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
                                            numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                                            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
                                            nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea
                                            voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat
                                        </S.Paragrafh>
                                    </S.ContentSpace>
                                </Card>
                                <Card width='350px'>
                                    <S.ContentSpace>
                                        <S.Paragrafh color='#FF844B'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                                            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                                            veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                                            voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                                            magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                                            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
                                            numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                                            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
                                            nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea
                                            voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat
                                        </S.Paragrafh>
                                    </S.ContentSpace>
                                </Card>
                                <Card width='350px'>
                                    <S.ContentSpace>
                                        <S.Paragrafh color='#FF844B'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                                            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                                            veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                                            voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                                            magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                                            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
                                            numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                                            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
                                            nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea
                                            voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat
                                        </S.Paragrafh>
                                    </S.ContentSpace>
                                </Card>

                            </S.ContentFlex>
                        </>
                    }
                    {render === 'money' &&
                        <>
                            <S.chooseOption>Doação em dinheiro</S.chooseOption>
                            <S.ContentFlex>
                                <Card width='250px'>
                                    <S.ContentSpace>
                                        <Bank width={100} stroke='#FF844B' />
                                        <SubTitle text='Conta Bancária' />
                                        <S.ParagrafhBold color='#000'>Conta Corrente - 76793-9</S.ParagrafhBold>
                                        <S.ParagrafhBold color='#000'>Agência - 5306</S.ParagrafhBold>
                                        <S.ParagrafhBold color='#000'>Banco - Itaú</S.ParagrafhBold>
                                        <S.Paragrafh>ou</S.Paragrafh>
                                        <S.ParagrafhBold color='#000'>Conta Corrente - 97357-3</S.ParagrafhBold>
                                        <S.ParagrafhBold color='#000'>Agência - 9647</S.ParagrafhBold>
                                        <S.ParagrafhBold color='#000'>Banco - Bradesco</S.ParagrafhBold>

                                    </S.ContentSpace>
                                </Card>
                                <Card width='250px'>
                                    <S.ContentSpace>
                                        <QrCode width={100} stroke='#FF844B' />
                                        <SubTitle text='Pix ou QrCode' />
                                        <S.ParagrafhBold color='#000'>Cpf - 479.972.528.94</S.ParagrafhBold>
                                        <S.Paragrafh>ou</S.Paragrafh>
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