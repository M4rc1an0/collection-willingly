import { useState } from "react";
import { Here } from "../../assets/icons/Here";
import { Button, Footer, Header, Input, SubTitle, TextArea, Title } from "../../components";
import * as S from "./style";


export default function help() {
    const [formValues, setFormValues] = useState<any>({})

    const handleInputChange = (e: any) => {
        const {name, value} = e.target;
        setFormValues({ ...formValues, [name]: value})
    }

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
                            <SubTitle text='Dúvidas ou sugestões ?' />
                            <S.Paragrafh>
                                Nome:
                            </S.Paragrafh>
                            <Input name='name' change={handleInputChange} value={formValues.name || ''} />
                            <S.Paragrafh>
                                E-mail:
                            </S.Paragrafh>
                            <Input name='email' change={handleInputChange} value={formValues.email || ''} />
                            <S.Paragrafh>
                                Dúvida ou sugestão:
                            </S.Paragrafh>
                            <TextArea name='text' change={handleInputChange} value={formValues.text || ''}/>
                            <Button text='Enviar' onClick={() => setFormValues({...formValues.name})}/>
                        </S.FormSend>
                    </S.AlignContent>
                </S.ContentPage>
                <Footer />
            </S.ContentSpace>
        </S.Container>
    )
}