import { Footer, Header, SubTitle, Title } from "../../components";
import * as S from "./style";


export default function help() {
    return (
        <S.Container>
            <Header />
            <S.ContentSpace>
                <S.Content>
                    <S.ContentBox>
                        <Title text='Preciso de ajuda!' />
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
                                alimentos, roupas, material didático,
                                remédios, dinheiro e etc.
                            </S.Paragrafh>
                        </S.ContentSection>
                        <S.ContentSection>
                            <SubTitle text='Quem será beneficiado ?' />
                            <S.Paragrafh>
                                Toda arrecadação coletada, será levada a pontos de distribução,
                                separada, e depois entregue a pessoa em situação de vunerabilidade
                                de acordo com sua maior necessidade.
                            </S.Paragrafh>
                        </S.ContentSection>
                    </S.ContentBox>
                </S.Content>
                <Footer />
            </S.ContentSpace>
        </S.Container>
    )
}