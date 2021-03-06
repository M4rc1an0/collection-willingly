import React, { useEffect, useState } from "react"
import { World } from "../../assets/icons"
import * as S from "./style"

interface HeaderProps {
    active: boolean | string
}

const Header = ({active}: HeaderProps) => {

    const mockMenu = [
        {
            text: "Doação",
            link: "/donation",
            hover: active === "donation"
        },
        {
            text: "Preciso de ajuda",
            link: "/help",
            hover: active === "help"
        }
    ]

    const homeHover = active === "home-page"
    
    return(
        <S.BoxHeader>
            <S.LogoHeader active={homeHover} href="/home-page">
                <World active={homeHover} width={30} stroke="#fff"/>
            </S.LogoHeader>
            <S.Line/>
            <S.BoxMenu>
            {
                mockMenu.map((menu, index) => {
                    const {text, link, hover} = menu
                    return(
                        <S.TitleMenu key={index} active={hover} href={link}>{text}</S.TitleMenu>
                    )
                })
            }
            </S.BoxMenu>
        </S.BoxHeader>
    )
}

export default Header