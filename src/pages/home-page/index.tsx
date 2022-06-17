import React from "react";
import * as S from "./style";
import { Header, InformationBox, Title, Input, Button, Footer } from "../../components";
import { Heart } from "../../assets/icons/Heart";
import { Notebook } from "../../assets/icons/Notebook";
import { Shield } from "../../assets/icons/Shield";
import { Snack } from "../../assets/icons/Snack";

export default function homePage() {

    return (
        <S.ContainerHome>
            <S.Centralize>
                <Header />
                <S.Content>
                    <InformationBox background="#9FC9DD" >
                        <S.ContentInfoBox>
                            <Title text='Sobre' color="#E3EDF2" />
                            <S.Paragrafh>
                                Collection Willingly tem como intuito possibilitar
                                que projetos sociais tenham mais visibilidade e ajuda,
                                visando o bem-estar de pessoas em situação de pobreza
                                e necessidade.
                            </S.Paragrafh>
                            <S.Img src="http://www.prefeitosegestoes.com.br/site/wp-content/uploads/2017/08/o-que-fazpr-uma-crianca-feliz-16.jpg"></S.Img>
                            <S.ParagrafhBold>
                                "Precisamos cuidar do planeta e empoderar os que não 
                                tiveram as mesmas oportunidades."
                            </S.ParagrafhBold>
                        </S.ContentInfoBox>
                    </InformationBox>
                    <Title text='VEJA COMO SUA DOAÇÃO FAZ A DIFERENÇA' />
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
                </S.Content>
                <Footer/>
            </S.Centralize>
        </S.ContainerHome>
    )
}