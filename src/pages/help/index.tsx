import { useState } from "react";
import { EmailSend, Here } from "../../assets/icons";
import { Button, Footer, Header, Input, SubTitle, TextArea, Title } from "../../components";
import * as S from "./style";


export default function help() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [description, setDescription] = useState('')
    const [isOpen, setIsOpen] = useState(false)
    const [validation, setValidation] = useState(true)

    const sendForm = () => {
        setIsOpen(true)

        setTimeout(() => {
            setIsOpen(false)
        }, 3000)

        setTimeout(() => {
            setName('')
            setEmail('')
            setDescription('')
        }, 3000)
    }


    return (
        <>
            <S.Container>
                <Header />
                <S.ImgBox>
                    <S.ImgBanner src="./abraçoAjuda.jpg" />
                    <S.ContentImg>
                        <Title text='Preciso de ajuda !' color='#fff' />
                        <Here width={60} stroke='#FF844B' />
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
                                    <Input value={name} change={(e: any) => setName(e.target.value)} />
                                    <S.Paragraph>
                                        E-mail:
                                    </S.Paragraph>
                                    <Input value={email} change={(e: any) => setEmail(e.target.value)} />
                                    <S.Paragraph>
                                        Dúvida ou sugestão:
                                    </S.Paragraph>
                                    <TextArea value={description} change={(e: any) => setDescription(e.target.value)} />
                                    <Button text='Enviar' action={() => { sendForm() }} />
                                </S.FormSend>
                            </S.AlignContent>
                        </S.Centralize>
                    </S.ContentPage>
                    <Footer />
                </S.ContentSpace>
            </S.Container>
            {
                isOpen &&
                <S.OpacityModal>
                    <S.Modal>
                        <EmailSend width={80} stroke='#FF844B' />
                        <SubTitle text='Agradecemos o contato!' />
                        <S.Paragraph>
                            Em breve entraremos em contato através do seu email<br/>
                        </S.Paragraph>
                        <S.ParagrafhBold>
                            {name && <>Sr/a. </>}{name}
                        </S.ParagrafhBold>
                    </S.Modal>
                </S.OpacityModal>
            }
        </>
    )
}