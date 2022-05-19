import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
`

export const AplicationHome = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    background-color: #835AFD;
`

export const Question = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
    height: 60%;
    background-color: #F8F8F8;
    border-top-right-radius: 500px;
    border-bottom-right-radius: 500px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset;
`

export const RedirectPage = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 50%;
    margin: 0 150px;
`

export const Ball = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50px;
    background-color: #F8F8F8;
    box-shadow: rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset;
`

export const Icon = styled.div`
    width: 150px;
    display: flex;
    align-items: center;
    padding: 50px;
    border-radius: 500px;
    background-color: #F8F8F8;
    box-shadow: rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset;
    cursor: pointer;

    :hover {
        background-color: white;

    }
`

export const Title = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
  font-family: sans-serif;

  a {
    color: #835AFD;
    text-decoration: none;
    cursor: pointer;

    :hover {
        text-decoration: underline;
    }
  }
`