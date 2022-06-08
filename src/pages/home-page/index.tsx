import React from "react";
import * as S from "./style";
import { Header, InformationBox, Title, Input, Button } from "../../components";

export default function homePage() {

    return (
        <S.ContainerHome>
            <S.Centralize>
            <Header />
            <InformationBox background="#4E7D96" width='60%'>
                <S.BoxParagrafh>
                    <S.TitleParagrafh>Sobre</S.TitleParagrafh>
                    <S.Paragrafh>
                        Collection-Willingly é uma aplicação desenvolvida para facilitar a 
                        doação de bens para pessoas em situação de necessidade de forma simples.


                    </S.Paragrafh>
                </S.BoxParagrafh>
                <S.Img src='./imgDoacao.jpg'/>
            </InformationBox>
            </S.Centralize>
        </S.ContainerHome>
    )
}