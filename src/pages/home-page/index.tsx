import React, { useEffect, useState } from "react";
import axios from "axios";
import * as S from "./style";
import { Header, Title, SubTitle, Button, Footer, Carrousel, Card } from "../../components";
import { Heart, HeartDonation, Notebook, Person, Topic, Shield, Snack } from "../../assets/icons";

export default function homePage() {
    const [data, setData] = useState<any>()
    const [validation, setValidation] = useState("")

    useEffect(() => {
        axios.get("https://collection-willingly-7a1b4-default-rtdb.firebaseio.com/collection_willingly.json")
            .then(function (response) {
                setData(response.data)
            })
    }, [])

    const moreDonate = data && Object.entries(data.donation_score).filter((donation: any) => donation[1].number_donaton > 3000)

    const selectIcon = (icon: string) => {
        if (icon === "snack") {
            return <Snack width={75} stroke="#2cb349" />
        } else if (icon === "heart") {
            return <Heart width={75} stroke="#f84949" />
        } else if (icon === "notebook") {
            return <Notebook width={75} />
        } else if (icon === "shield") {
            return <Shield width={75} stroke="#484dda" />
        }
    }

    if (typeof window !== undefined) {
        useEffect(() => {
            const url = window.location.href
            setValidation(url)

        }, [])
    }

    const block = validation.split("/")[3]

    return (
        <>
            <S.ContainerHome>
                <S.ContentTop>
                    <Header active={block} />
                    <S.ImgCarrousel>
                        <Carrousel />
                        <S.ContentImg>
                            <Title text="SOBRE" color="#fff" />
                            <S.BoxInformation>
                                <Person width={60} stroke="#FF844B" />
                                <S.CardParagraph>
                                    Collection Willingly tem como intuito possibilitar<br />
                                    que projetos sociais tenham mais visibilidade e ajuda,<br />
                                    visando o bem-estar de pessoas em situa????o de pobreza<br />
                                    e necessidade.
                                </S.CardParagraph>
                                <S.ParagrafhBold color="#FF844B">
                                    "Precisamos cuidar do planeta e empoderar os que n??o
                                    tiveram as mesmas oportunidades."
                                </S.ParagrafhBold>
                            </S.BoxInformation>
                        </S.ContentImg>
                    </S.ImgCarrousel>
                    <S.ContentBox>
                        <SubTitle text="VEJA COMO SUA DOA????O FAZ A DIFEREN??A" />
                        <S.ContentButtonCards>
                            {data && Object.entries(data?.pages.home_page.buttons).map((content: any, index: any) => {
                                return (
                                    <Card width="250px" key={index}>
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
                    <S.ContentInstituitions>
                        <SubTitle text="Organiza????es que mais receberam doa????es atrav??s da nossa aplica????o" size={32} />
                        <S.UlTable>
                            <S.table>
                                <S.ParagrafhBold>Organiza????o</S.ParagrafhBold>
                                <S.ParagrafhBold>Doa????es</S.ParagrafhBold>
                            </S.table>
                            {moreDonate?.map((instituition: any, index: string) => {
                                return (
                                    <S.ItemList key={index}>
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
                    <S.ContentInstituitions>
                        <SubTitle text="Total de usu??rios redirecionados para doa????o:"/>
                        <SubTitle text={data?.score} size={30} color="#FF844B"/>
                    </S.ContentInstituitions>

                    <S.ContentInfoBox>
                        <S.ContentBenefits>
                            <S.Img src="./imagem_4.jpg" />
                            <S.ContentImageBox>
                            <SubTitle text="Como ?? feita a arrecada????o ?" color="#fff"/>
                                <S.DescriptionDonation>
                                    <S.Paragrafh size={20} color="#fff">
                                        Toda arrecada????o obtida, ?? destinada a e enviada pra alguma organiza????o de doa????o,
                                        levando em considera????o o tipo de arrecada????o (Alimentos, Roupas e etc.) e depois entregue a pessoas
                                        em situa????o de necessidade.<br /><br /> Pontos de arrecada????o que indicamos para se fazer uma doa????o:
                                    </S.Paragrafh>
                                </S.DescriptionDonation>
                                <S.BenefitsDiv>
                                <S.ContentUl>
                                    <S.Ul>
                                        {data && Object.entries(data?.pages.home_page.benefit_list).map((benefit: any, index: any) => {
                                            return (
                                                <S.Li key={index}>
                                                    <Topic stroke="#fff" />
                                                    <S.ParagrafhBold color="#fff">
                                                        {benefit[1].text}
                                                    </S.ParagrafhBold>
                                                </S.Li>
                                            )
                                        })}
                                    </S.Ul>
                                </S.ContentUl>
                            </S.BenefitsDiv>
                            </S.ContentImageBox>
                        </S.ContentBenefits>
                    </S.ContentInfoBox>
                    <S.ContentInfoBox>
                        <S.ContentDonate>
                            <SubTitle text="Fa??a uma doa????o!" size={32} />
                            <S.ParagrafhBold color="#FF844B">
                                Fa??a parte desta rede de solidariedade de humaniza????o<br />
                            </S.ParagrafhBold>
                            <S.ParagrafhBold color="#FF844B">
                                na sa??de e fortale??a in??meras pessoas e fam??lias.
                            </S.ParagrafhBold>
                            <HeartDonation width={200} stroke="#f84949" />
                            <Button text="Doar" action={() => window.location.href = "/donation"} />
                        </S.ContentDonate>
                    </S.ContentInfoBox>
                </S.ContentTop>
                <Footer />
            </S.ContainerHome>
        </>
    )
}