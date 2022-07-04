import React from 'react'
import * as S from './home'
import Link from 'next/link'
import { ArrowRight, World } from '../assets/icons'

const Home = () => {
  return (
    <S.Container>
      <S.AplicationHome>
        <S.Question>
          <S.Title>
            Por que <a>Ajudar</a> o mundo ?
          </S.Title>
          <World width={200} stroke='#4E7D96' />
        </S.Question>
        <S.RedirectPage>
          <Link href="/home-page">
            <S.Icon>
              <ArrowRight width={50} stroke='#E3EDF2' />
            </S.Icon>
          </Link>
        </S.RedirectPage>
      </S.AplicationHome>
    </S.Container>
  )
}

export default Home
