import { useEffect, useState } from "react";
import { EmailSend, Here } from "../../assets/icons";
import { Button, Footer, Header, Input, SubTitle, TextArea, Title } from "../../components";
import * as S from "./style";


export default function help() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [description, setDescription] = useState('')
    const [isOpen, setIsOpen] = useState(false)
    const [isValid, setIsValid] = useState(true)
    const [validation, setValidation] = useState('')

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

    useEffect(() => {
        if (email && description) {
            setIsValid(false)
        } else {
            setIsValid(true)
        }
    }, [email, description])


    if (typeof window !== undefined) {
        useEffect(() => {
            const url = window.location.href
            setValidation(url)

        }, [])
    }

    const block = validation.split('/')[3]

    return (
        <>
            <S.Container>
                <Header active={block} />
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
                                            Não é necessaria a autenticação, você pode tratar diretamente com as instituições
                                            selecionadas, e fazer uma doação anonima.
                                        </S.Paragraph>
                                    </S.ContentSection>
                                    <S.ContentSection>
                                        <SubTitle text='Quais formas posso ajudar ?' />
                                        <S.Paragraph>
                                            Você pode ajudar através da doação de alimentos, roupas, material didático, remédios,
                                            dinheiro e etc.
                                        </S.Paragraph>
                                    </S.ContentSection>
                                    <S.ContentSection>
                                        <SubTitle text='Quem será beneficiado ?' />
                                        <S.Paragraph>
                                            Toda arrecadação coletada, será levada a pontos de distribução, separada, e depois
                                            entregue a pessoa em situação de vunerabilidade de acordo com sua maior necessidade.
                                        </S.Paragraph>
                                    </S.ContentSection>
                                    <S.ContentSection>
                                        <SubTitle text='Quais organizações estão responsaveis pela distribuição?' />
                                        <S.Paragraph>
                                            As instituições encarregadas de fazer a distribuição de todas arrecadações
                                            são a Ong Naação(Alimentos), Cihesel(Remedios), e a Lar Casa Bela(Materiais
                                            Didático e outros).
                                        </S.Paragraph>
                                    </S.ContentSection>
                                    <S.ContentSection>
                                        <SubTitle text='Sou uma pessoa necessitada, posso aderir algum recurso?' />
                                        <S.Paragraph>
                                            Se precisa de ajuda, indicamos que preenchar o formulario ao lado, e assim que possivel
                                            entraremos em contato o mais rapido possivel para avaliação da sua situação, com a
                                            confirmação da sua situação, acionaremos as instituições que mais atende sua necessidade.
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
                                        E-mail *:
                                    </S.Paragraph>
                                    <Input value={email} change={(e: any) => setEmail(e.target.value)} />
                                    <S.Paragraph>
                                        Dúvida ou sugestão *:
                                    </S.Paragraph>
                                    <S.BoxTextArea>
                                        <TextArea value={description} change={(e: any) => setDescription(e.target.value)} />
                                    </S.BoxTextArea>
                                    <Button text='Enviar' action={() => sendForm()} disabled={isValid} />
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
                            Em breve entraremos em contato através do seu email<br />
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