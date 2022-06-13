import React from "react";
import * as S from "./style";
import { Header, InformationBox, Title, Input, Button } from "../../components";
import { Snack } from "../../assets/icons/Snack";
import { Clothes } from "../../assets/icons/Clothes";
import { Home } from "../../assets/icons/Home";

export default function homePage() {

    return (
        <S.ContainerHome>
            <S.Centralize>
                <Header />
                <S.Content>
                    <S.ContentBox>
                        <InformationBox background="#4E7D96" width="200px">
                            <Snack width={100} stroke="#E3EDF2"/>
                            Alimentos
                        </InformationBox>
                        <InformationBox background="#4E7D96" width="200px">
                            <Clothes width={100} stroke="#E3EDF2" />
                            Roupas
                        </InformationBox>
                        <InformationBox background="#4E7D96" width="200px">
                            <Home width={100} stroke="#E3EDF2"/>
                            Instituições de Caridade
                        </InformationBox>
                        <InformationBox background="#4E7D96" width="200px">
                        </InformationBox>
                    </S.ContentBox>
                </S.Content>
            </S.Centralize>
        </S.ContainerHome>
    )
}