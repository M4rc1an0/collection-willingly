import React from "react"
import { World } from "../../assets/icons/World"
import * as S from './style'

export const Header = () => {

    const mockMenu = [
        {
            text: "Home"
        },
        {
            text: "Sobre"
        }
    ]

    return(
        <S.BoxHeader>
            <S.LogoHeader>
                <World width={30}/>
            </S.LogoHeader>
            <S.Line/>
            {
                mockMenu.map(item => {
                    return(
                        <S.TitleMenu>{item.text}</S.TitleMenu>
                    )
                })
            }
        </S.BoxHeader>
    )
}