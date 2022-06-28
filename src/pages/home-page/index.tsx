import React, { useEffect, useState } from "react";
import axios from "axios";
import * as S from "./style";
import { Header, InformationBox, Title, SubTitle, Input, Button, Footer, CardButton, Carrousel } from "../../components";
import { Heart, Notebook, Person, SendDonate, Shield, Snack } from "../../assets/icons";
import Topic from "../../assets/icons/Topic";

export default function homePage() {
    const [data, setData] = useState<any>()
    const [isOpen, setIsOpen] = useState<boolean>()

    useEffect(() => {
        axios.get('https://collection-willingly-7a1b4-default-rtdb.firebaseio.com/collection_willingly/pages/home_page.json')
            .then(function (response) {
                setData(response.data)
            })
    }, [])

    console.log(data, 'data api')

    const liList = [
        {
            text: "Ongs",
        },
        {
            text: "Instituições beneficientes",
        },
        {
            text: "Associações beneficientes",
        },
        {
            text: "Projetos sociais",
        },
        {
            text: "Etc...",
        }
    ]

    return (
        <>
            <S.ContainerHome>
                <S.ContentTop>
                    <Header />
                    <S.ImgCarrousel>
                        <S.ImgBanner src='./criança-feliz.jpg' />
                        <S.ContentImg>
                            <Title text='SOBRE' color='#fff' />
                            <S.BoxInformation>
                                <Person width={60} stroke='#FF844B' />
                                <S.CardParagraph>
                                    Collection Willingly tem como intuito possibilitar<br />
                                    que projetos sociais tenham mais visibilidade e ajuda,<br />
                                    visando o bem-estar de pessoas em situação de pobreza<br />
                                    e necessidade.
                                </S.CardParagraph>
                                <S.ParagrafhBold color="#FF844B">
                                    "Precisamos cuidar do planeta e empoderar os que não
                                    tiveram as mesmas oportunidades."
                                </S.ParagrafhBold>
                            </S.BoxInformation>
                        </S.ContentImg>
                    </S.ImgCarrousel>
                    <S.ContentBox>
                        <SubTitle text='VEJA COMO SUA DOAÇÃO FAZ A DIFERENÇA' />
                        <S.ContentButtonCards>
                            <CardButton width='250px' action={() => { window.location.href = '/home-page?saude', setIsOpen(true) }}>
                                <S.ContentInfoBox>
                                    <S.ParagrafhBold>Saúde</S.ParagrafhBold>
                                    <Heart width={75} stroke="#f84949" />
                                    <S.Paragrafh>
                                        O seu apoio ajuda a
                                        reduzir a mortalidade
                                        infantil e promove um
                                        crescimento saudável de
                                        crianças no mundo todo.
                                    </S.Paragrafh>
                                </S.ContentInfoBox>
                            </CardButton>
                            <CardButton width='250px'>
                                <S.ContentInfoBox>
                                    <S.ParagrafhBold>Educação</S.ParagrafhBold>
                                    <Notebook width={75} />
                                    <S.Paragrafh>
                                        Sua doação mantém
                                        salas de aula em campos
                                        de refugiados para que
                                        as crianças tenham
                                        acesso à educação.
                                    </S.Paragrafh>
                                </S.ContentInfoBox>
                            </CardButton>
                            <CardButton width='250px'>
                                <S.ContentInfoBox>
                                    <S.ParagrafhBold>Proteção</S.ParagrafhBold>
                                    <Shield width={75} stroke="#484dda" />
                                    <S.Paragrafh>
                                        Sua contribuição reforça
                                        iniciativas que
                                        garante direitos de
                                        proteção contra abusos
                                        de crianças e adolescentes.
                                    </S.Paragrafh>
                                </S.ContentInfoBox>
                            </CardButton>
                            <CardButton width='250px'>
                                <S.ContentInfoBox>
                                    <S.ParagrafhBold>Refeição</S.ParagrafhBold>
                                    <Snack width={75} stroke="#2cb349" />
                                    <S.Paragrafh>
                                        O Alimento doado ajuda
                                        grande quantidade de
                                        pessoas em situação de
                                        extrema pobreza e garante
                                        a refeição no dia-a-dia.
                                    </S.Paragrafh>
                                </S.ContentInfoBox>
                            </CardButton>
                        </S.ContentButtonCards>
                    </S.ContentBox>
                    <S.ContentInfoBox>
                        <S.ContentBenefits>
                            <SubTitle text='Como é feita a arrecadação ?' />
                            <S.ContentInfoBox>
                                <S.Paragrafh size={20}>
                                    Toda arrecadação feita será separada e destinada a diversos pontos de arrecadação beneficiente como:
                                </S.Paragrafh>
                            </S.ContentInfoBox>
                            <S.BenefitsDiv>
                                <S.Img src='./imagem-pobreza.jpg' />
                                <S.ContentUl>
                                    <S.Ul>
                                        {data && Object.entries(data?.benefit_list).map((benefit: any) => {
                                            console.log(benefit[0], 'beneficions')
                                            return (
                                                <S.Li>
                                                    <Topic stroke='#FF844B' />
                                                    <S.ParagrafhBold key={benefit[0]}>
                                                        {benefit[1].text}
                                                    </S.ParagrafhBold>
                                                </S.Li>
                                            )
                                        })}
                                    </S.Ul>
                                </S.ContentUl>
                            </S.BenefitsDiv>
                        </S.ContentBenefits>
                    </S.ContentInfoBox>
                    <S.ContentInfoBox>
                        <S.ContentDonate>
                            <SubTitle text='Faça uma doação!' size={32} />
                            <S.SendDonate href='/donation'>
                                {/* <SendDonate width={200} strokePrimary='#FF844B' strokeSecondary='#fff' /> */}
                            </S.SendDonate>
                        </S.ContentDonate>
                    </S.ContentInfoBox>
                </S.ContentTop>
                <Footer />
            </S.ContainerHome>
            {
                isOpen &&
                <S.OpacityModal>
                    <S.Modal>

                    </S.Modal>
                </S.OpacityModal>
            }
        </>
    )
}