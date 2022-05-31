import React from "react"
import { World } from "../../assets/icons/World"
import * as S from './style'

const Header = () => {

    const mockMenu = [
        {
            text: "Home",
            link: "/"
        },
        {
            text: "Doar",
            link: "/"
        },
        {
            text: "Sobre",
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