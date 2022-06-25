import { PropsIcon } from "./types"

export const Shield = ({ width, stroke }: PropsIcon) => {
    return (
        <svg width={width ? width : "24"} height={width} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.22 22.61C12.82 22.76 12.42 22.9 12 23C6.84 21.74 3 16.55 3 11V5L12 1L21 5V11C21 11.9 20.89 12.78 20.7 13.65C19.89 13.24 18.97 13 18 13C14.69 13 12 15.69 12 19C12 20.36 12.46 21.61 13.22 22.61ZM19 20V22.99C19 22.99 17.01 23 17 22.99V20H14V18H17V15H19V18H22V20H19Z" fill={stroke ? stroke : "#323232"}/>
        </svg>
        
    )
}