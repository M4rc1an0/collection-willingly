import { useState } from "react";
import { Here } from "../../assets/icons/Here";
import { Button, Footer, Header, Input, SubTitle, TextArea, Title } from "../../components";
import * as S from "./style";


export default function help() {
    const [formValues, setFormValues] = useState<any>({})

    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value })
    }

    return (
        <S.Container>
            <Header />
            <S.ImgBox>
                    <S.ImgBanner src="./abraçoAjuda.jpg" />
                    <S.ContentImg>
                        <Title text='Preciso de ajuda !' color='#fff' />
                        <Here width={60} stroke='#FF844B'/>
                    </S.ContentImg>
                </S.ImgBox>
            <S.ContentSpace>
                <S.ContentPage>
                    <S.Centralize>
                        <S.AlignContent>
                            <S.ContentBox>
                                <S.ContentSection>
                                    <SubTitle text='Preciso me autenticar para fazer uma doação ?' />
                                    <S.Paragraph>
                                        Não é necessaria a autenticação,
                                        você pode fazer uma doação anonimamente.
                                    </S.Paragraph>
                                </S.ContentSection>
                                <S.ContentSection>
                                    <SubTitle text='Quais formas posso ajudar ?' />
                                    <S.Paragraph>
                                        Você pode ajudar através da doação de
                                        alimentos, roupas, material didático,<br />
                                        remédios, dinheiro e etc.
                                    </S.Paragraph>
                                </S.ContentSection>
                                <S.ContentSection>
                                    <SubTitle text='Quem será beneficiado ?' />
                                    <S.Paragraph>
                                        Toda arrecadação coletada, será levada a pontos de distribução,
                                        separada,<br /> e depois entregue a pessoa em situação de vunerabilidade
                                        de acordo com<br /> sua maior necessidade.
                                    </S.Paragraph>
                                </S.ContentSection>
                            </S.ContentBox>
                            <S.FormSend>
                                <SubTitle text='Dúvidas ou sugestões ?' />
                                <S.Paragraph>
                                    Nome:
                                </S.Paragraph>
                                <Input name='name' change={handleInputChange} value={formValues.name || ''} />
                                <S.Paragraph>
                                    E-mail:
                                </S.Paragraph>
                                <Input name='email' change={handleInputChange} value={formValues.email || ''} />
                                <S.Paragraph>
                                    Dúvida ou sugestão:
                                </S.Paragraph>
                                <TextArea name='text' change={handleInputChange} value={formValues.text || ''} />
                                <Button text='Enviar' onClick={() => setFormValues({ ...formValues.name })} />
                            </S.FormSend>
                        </S.AlignContent>
                    </S.Centralize>
                </S.ContentPage>
                <Footer />
            </S.ContentSpace>
        </S.Container>
    )
}