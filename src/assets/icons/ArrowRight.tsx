import { PropsIcon } from "./types"

export const ArrowRight = ({width, stroke}: PropsIcon) => {
    return (
        <svg width={width ? width : '24'} height={width} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.87988 4.12L13.7599 12L5.87988 19.88L7.99988 22L17.9999 12L7.99988 2L5.87988 4.12Z" 
        fill={stroke ? stroke : "#323232"}/>
        </svg>
    )
}