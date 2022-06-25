import { useState } from "react";
import { Footer, Header, Input, SubTitle, Title } from "../../components";
import * as S from "./style";


export default function help() {
    const [name, setName] = useState()
    return (
        <S.Container>
            <Header />
            <S.ContentSpace>
                <S.ContentPage>
                    <S.ContainerTitle>
                        <Title text='Preciso de ajuda!' />
                    </S.ContainerTitle>
                    <S.AlignContent>
                        <S.ContentBox>
                            <S.ContentSection>
                                <SubTitle text='Preciso me autenticar para fazer uma doação ?' />
                                <S.Paragrafh>
                                    Não é necessaria a autenticação,
                                    você pode fazer uma doação anonimamente.
                                </S.Paragrafh>
                            </S.ContentSection>
                            <S.ContentSection>
                                <SubTitle text='Quais formas posso ajudar ?' />
                                <S.Paragrafh>
                                    Você pode ajudar através da doação de
                                    alimentos, roupas, material didático,<br />
                                    remédios, dinheiro e etc.
                                </S.Paragrafh>
                            </S.ContentSection>
                            <S.ContentSection>
                                <SubTitle text='Quem será beneficiado ?' />
                                <S.Paragrafh>
                                    Toda arrecadação coletada, será levada a pontos de distribução,
                                    separada,<br /> e depois entregue a pessoa em situação de vunerabilidade
                                    de acordo com<br /> sua maior necessidade.
                                </S.Paragrafh>
                            </S.ContentSection>
                        </S.ContentBox>
                        <S.FormSend>
                            {/* MELHORAR INPUT TEXT E FAZE FORMULARIO */}
                            <Input label='Nome' value={name} change={(e: any) => setName(e.target.value)}/>
                        </S.FormSend>
                    </S.AlignContent>
                </S.ContentPage>
                <Footer />
            </S.ContentSpace>
        </S.Container>
    )
}