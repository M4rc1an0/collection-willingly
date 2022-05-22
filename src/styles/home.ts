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
    background-color: #00d196;
`

export const Question = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 90%;
    background-color: #F8F8F8;
    border-top-right-radius: 500px;
    border-bottom-right-radius: 500px;
    box-shadow: 
    rgba(0, 0, 0, 0.09) 0px 2px 1px, 
    rgba(0, 0, 0, 0.09) 0px 4px 2px, 
    rgba(0, 0, 0, 0.09) 0px 8px 4px, 
    rgba(0, 0, 0, 0.09) 0px 16px 8px, 
    rgba(0, 0, 0, 0.09) 0px 32px 16px;
`

export const RedirectPage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;    
`

export const Icon = styled.a`
    width: 130px;
    height: 130px;
    background-color: #F8F8F8;
    display: flex;
    align-items: center;
    border-radius: 500px;
    transition: width 1s;
    box-shadow: 
    rgba(0, 0, 0, 0.09) 0px 2px 1px, 
    rgba(0, 0, 0, 0.09) 0px 4px 2px, 
    rgba(0, 0, 0, 0.09) 0px 8px 4px, 
    rgba(0, 0, 0, 0.09) 0px 16px 8px, 
    rgba(0, 0, 0, 0.09) 0px 32px 16px;
    cursor: pointer;

    svg {
        width: 100%;
    }  

    :hover {
        transition: width 1s;
    }
`

export const Title = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 3rem;
  color: #545454;
  font-family: sans-serif;

  a {
    color: #00d196;
    text-decoration: none;
    cursor: pointer;

    :hover {
        text-decoration: underline;
    }
  }
`