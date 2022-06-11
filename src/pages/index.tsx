import React from 'react'
import Head from 'next/head'
import * as S from '../styles/home'
import { ArrowRight } from '../assets/icons/ArrowRight'
import Link from 'next/link'
import { World } from '../assets/icons/World'

const Home = () => {
  return (
    <S.Container>
      <Head>
        <title>Collection-Willingly</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet"/>
      </Head>

      <S.AplicationHome>
        <S.Question>
          <S.Title>
            Por que <a>Ajudar</a> o mundo ?
          </S.Title>
          <World width={200} stroke='#4E7D96'/>
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
