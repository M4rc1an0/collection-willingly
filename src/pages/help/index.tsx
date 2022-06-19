import { Footer, Header } from "../../components";
import * as S from "./style";


export default function help() {
    return (
        <S.ContainerHome>
            <S.Centralize>
                <S.ContentTop>
                    <Header />
                    <S.Content>
                        <S.ContentBox>

                        </S.ContentBox>
                    </S.Content>
                </S.ContentTop>
                <Footer />
            </S.Centralize>
        </S.ContainerHome>
    )
}