import React, { useEffect, useState } from "react";
import * as S from "./style";
import { Header, InformationBox, Title, SubTitle, Input, Button, Footer } from "../../components";
import { Heart } from "../../assets/icons/Heart";
import { Notebook } from "../../assets/icons/Notebook";
import { Shield } from "../../assets/icons/Shield";
import { Snack } from "../../assets/icons/Snack";
import { Person } from "../../assets/icons/Person";
import { ArrowRight } from "../../assets/icons/ArrowRight";
import { SendDonate } from "../../assets/icons/SendDonate";

export default function homePage() {
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

    useEffect(() => {
        carrousel()
    }, [])

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
            text: "Etc.",
        }
    ]

    return (
        <S.ContainerHome>
            <S.Centralize>
                <Header />
                <S.Content>
                    <Title text='SOBRE' />
                    <S.BoxImg>
                        {carrousel()}
                    </S.BoxImg>
                    <S.BoxInformation>
                        <Person width={60} stroke='#FF844B' />
                        <S.CardParagraph>
                            Collection Willingly tem como intuito possibilitar
                            que projetos sociais tenham mais visibilidade e ajuda,
                            visando o bem-estar de pessoas em situação de pobreza
                            e necessidade.
                        </S.CardParagraph>
                    </S.BoxInformation>
                    <InformationBox background="#9FC9DD">
                        <S.ContentInfoBox>
                            <S.ParagrafhBold color="#FF844B">
                                "Precisamos cuidar do planeta e empoderar os que não
                                tiveram as mesmas oportunidades."
                            </S.ParagrafhBold>
                        </S.ContentInfoBox>
                    </InformationBox>
                    <SubTitle text='VEJA COMO SUA DOAÇÃO FAZ A DIFERENÇA' />
                    <S.ContentBox>
                        <InformationBox background="#9FC9DD">
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
                        </InformationBox>
                        <InformationBox background="#9FC9DD" >
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
                        </InformationBox>
                        <InformationBox background="#9FC9DD">
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
                        </InformationBox>
                        <InformationBox background="#9FC9DD" >
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
                        </InformationBox>
                    </S.ContentBox>
                    <S.ContentInfoBox>
                        <S.ContentBenefits>
                            <SubTitle text='QUEM SERÁ BENEFICIADO ?' />
                            <S.ContentInfoBox>
                                <S.Paragrafh size={20}>
                                    Toda arrecadação feita (Alimentos, Roupas, Material Didático, Remédios, etc.)<br />
                                    será separada e destinada a diversos pontos de arrecadação beneficiente como:
                                </S.Paragrafh>
                            </S.ContentInfoBox>
                            <S.BenefitsDiv>
                                <S.Img src='./imagem-pobreza.jpg' />
                                <S.ContentUl>
                                    <S.Ul>
                                        {liList.map(institution => {
                                            const { text } = institution
                                            return (
                                                <S.Li><ArrowRight width={20} stroke='#FF844B' /><S.ParagrafhBold>{text}</S.ParagrafhBold></S.Li>
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
                                <SendDonate width={200} strokePrimary='#FF844B' strokeSecondary='#fff' />
                            </S.SendDonate>
                        </S.ContentDonate>
                    </S.ContentInfoBox>
                </S.Content>
                <Footer />
            </S.Centralize>
        </S.ContainerHome>
    )
}