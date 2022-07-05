import { PropsIcon } from "./types"

const Bank = ({width, stroke}: PropsIcon) => {
    return (
        <svg width={width ? width : "24"} height={width} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 10H4V17H7V10Z" fill={stroke ? stroke : "#323232"}/>
        <path d="M13.5 10H10.5V17H13.5V10Z" fill={stroke ? stroke : "#323232"}/>
        <path d="M22 19H2V22H22V19Z" fill={stroke ? stroke : "#323232"}/>
        <path d="M20 10H17V17H20V10Z" fill={stroke ? stroke : "#323232"}/>
        <path d="M12 1L2 6V8H22V6L12 1Z" fill={stroke ? stroke : "#323232"}/>
        </svg>
    )
}

export default Bank