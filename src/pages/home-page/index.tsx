import React, { useEffect, useState } from "react";
import axios from "axios";
import * as S from "./style";
import { Header, Title, SubTitle, Input, Button, Footer, CardButton, Carrousel, Card } from "../../components";
import { Heart, HeartDonation, Notebook, Person, Topic, Shield, Snack } from "../../assets/icons";

export default function homePage() {
    const [data, setData] = useState<any>()
    const [validation, setValidation] = useState('')

    useEffect(() => {
        axios.get('https://collection-willingly-7a1b4-default-rtdb.firebaseio.com/collection_willingly.json')
            .then(function (response) {
                setData(response.data)
            })
    }, [])

    const moreDonate = data && Object.entries(data.donation_score).filter((donation: any) => donation[1].number_donaton > 3000)

    console.log(moreDonate, 'mostrar')

    const selectIcon = (icon: string) => {
        if (icon === 'snack') {
            return <Snack width={75} stroke="#2cb349" />
        } else if (icon === 'heart') {
            return <Heart width={75} stroke="#f84949" />
        } else if (icon === 'notebook') {
            return <Notebook width={75} />
        } else if (icon === 'shield') {
            return <Shield width={75} stroke="#484dda" />
        }
    }

    if (typeof window !== undefined) {
        useEffect(() => {
            const url = window.location.href
            setValidation(url)

        }, [])
    }

    const block = validation.split('/')[3]

    return (
        <>
            <S.ContainerHome>
                <S.ContentTop>
                    <Header active={block} />
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
                            {data && Object.entries(data?.pages.home_page.buttons).map((content: any) => {
                                return (
                                    <Card width='250px' key={content[0]}>
                                        <S.ContentInfoBox>
                                            <S.ParagrafhBold>{content[1].title}</S.ParagrafhBold>
                                            {selectIcon(content[1].icon)}
                                            <S.Paragrafh>
                                                {content[1].text_content}
                                            </S.Paragrafh>
                                        </S.ContentInfoBox>
                                    </Card>
                                )
                            })}
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
                                        {data && Object.entries(data?.pages.home_page.benefit_list).map((benefit: any) => {
                                            return (
                                                <S.Li key={benefit[0]}>
                                                    <Topic stroke='#FF844B' />
                                                    <S.ParagrafhBold >
                                                        {benefit[1].text}
                                                    </S.ParagrafhBold>
                                                </S.Li>
                                            )
                                        })}
                                    </S.Ul>
                                </S.ContentUl>
                            </S.BenefitsDiv>
                            <S.ContentInstituitions>
                                <SubTitle text='Organizações que mais receberam doações através da nossa aplicação' size={32} />
                                <S.UlTable>
                                    <S.table>
                                        <S.ParagrafhBold>Organização</S.ParagrafhBold>
                                        <S.ParagrafhBold>Doações</S.ParagrafhBold>
                                    </S.table>
                                    {moreDonate?.map((instituition: any) => {
                                        return (
                                            <S.ItemList>
                                                <S.LiItem>
                                                    {instituition[1].organization}
                                                </S.LiItem>
                                                <S.LiItem>
                                                    {instituition[1].number_donaton}
                                                </S.LiItem>
                                            </S.ItemList>
                                        )
                                    })}
                                </S.UlTable>
                            </S.ContentInstituitions>
                        </S.ContentBenefits>
                    </S.ContentInfoBox>
                    <S.ContentInfoBox>
                        <S.ContentDonate>
                            <SubTitle text='Faça uma doação!' size={32} />
                            <S.ParagrafhBold color="#FF844B">
                                Faça parte desta rede de solidariedade de humanização<br />
                            </S.ParagrafhBold>
                            <S.ParagrafhBold color="#FF844B">
                                na saúde e fortaleça inúmeras pessoas e famílias.
                            </S.ParagrafhBold>
                            <HeartDonation width={200} stroke="#f84949" />
                            <Button text="Doar" action={() => window.location.href = '/donation'} />
                        </S.ContentDonate>
                    </S.ContentInfoBox>
                </S.ContentTop>
                <Footer />
            </S.ContainerHome>
        </>
    )
}