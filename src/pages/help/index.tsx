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
                            <SubTitle text='Preciso me autenticar para fazer uma doação?'/>
                            <S.Paragrafh color="" >Não é necessaria a autenticação, você pode fazer uma doação anonimamente.</S.Paragrafh>

                        </S.ContentSection>
                    </S.ContentBox>
                </S.Content>
                <Footer />
            </S.ContentSpace>
        </S.Container>
    )
}