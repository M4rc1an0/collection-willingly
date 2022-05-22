import React from "react"
import { World } from "../../assets/icons/World"
import * as S from './style'

export const Header = () => {

    const mockMenu = [
        {
            text: "Home",
            link: "/"
        },
        {
            text: "Sobre",
            link: "/"
        },
        {
            text: "Mock",
            link: "/"
        },
        {
            text: "Mock",
            link: "/"
        },
        {
            text: "Mock",
            link: "/"
        }
    ]

    return(
        <S.BoxHeader>
            <S.LogoHeader href="/">
                <World width={30}/>
            </S.LogoHeader>
            <S.Line/>
            <S.BoxMenu>
            {
                mockMenu.map(item => {
                    return(
                        <S.TitleMenu>{item.text}</S.TitleMenu>
                    )
                })
            }
            </S.BoxMenu>
        </S.BoxHeader>
    )
}