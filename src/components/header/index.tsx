import React from "react"
import { World } from "../../assets/icons/World"
import * as S from './style'

const Header = () => {

    // COLOCAR MAIS OPÇÕES DE MENU

    const mockMenu = [
        {
            text: "Sobre",
            link: "/"
        },
        {
            text: "Como Ajudar",
            link: "/"
        },
        {
            text: "Doação",
            link: "/"
        },
        {
            text: "Contato",
            link: "/"
        }
    ]

    return(
        <S.BoxHeader>
            <S.LogoHeader href="/">
                <World width={30} stroke='#fff'/>
            </S.LogoHeader>
            <S.Line/>
            <S.BoxMenu>
            {
                mockMenu.map(menu => {
                    return(
                        <S.TitleMenu href={menu.link}>{menu.text}</S.TitleMenu>
                    )
                })
            }
            </S.BoxMenu>
        </S.BoxHeader>
    )
}

export default Header