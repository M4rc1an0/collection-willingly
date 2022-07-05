import { PropsIcon } from "./types"

const Home = ({width, stroke}: PropsIcon) => {
    return (
        <svg width={width ? width : "24"} height={width} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 12L12 3L3 12" stroke={stroke ? stroke : "#323232"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M19 10V20.3C18.9822 20.5027 18.8849 20.69 18.7294 20.8212C18.5739 20.9524 18.3728 21.0166 18.17 21H14.3V14.1H9.7V21H5.83C5.62724 21.0166 5.42614 20.9524 5.27062 20.8212C5.1151 20.69 5.01781 20.5027 5 20.3V10" stroke={stroke ? stroke : "#323232"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    )
}

export default Home