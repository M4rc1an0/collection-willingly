import { Footer, Header, Title } from "../../components";
import * as S from "./style";


export default function help() {
    return (
        <S.ContainerHome>
            <S.Centralize>
                <S.ContentTop>
                    <Header />
                    <S.Content>
                        <S.ContentBox>
                            <Title text='Preciso de ajuda !' />
                        </S.ContentBox>
                    </S.Content>
                </S.ContentTop>
                <Footer />
            </S.Centralize>
        </S.ContainerHome>
    )
}