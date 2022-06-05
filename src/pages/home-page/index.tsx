import React from "react";
import * as S from "./style";
import { Header, InformationBox, Title, Input, Button } from "../../components";
import { World } from "../../assets/icons/World";

export default function homePage() {

    return (
        <S.ContainerHome>
            <Header />
            <S.Centralize>
                <Title text='Por que ajudar o mundo?' />
                <S.HoverBox>
                    <World width={200} stroke='#417D7A' />
                </S.HoverBox>
                <InformationBox img='/imgDoacao.jpg'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries, but also the
                    leap into electronic typesetting, remaining essentially unchanged. It was
                    popularised in the 1960s with the release of Letraset sheets containing Lorem
                    Ipsum passages, and more recently with desktop publishing software like Aldus
                    PageMaker including versions of Lorem Ipsum.
                </InformationBox>
                <Input label='Teste'/>
                <Button text='Teste Button'/>
            </S.Centralize>
        </S.ContainerHome>
    )
}