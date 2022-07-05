import { PropsIcon } from "./types"

const QrCode = ({ width, stroke }: PropsIcon) => {
    return (
        <svg width={width ? width : "24"} height={width} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 11H7V7H11V11ZM17 7H15V9H17V7ZM13 17H17V13H13V17ZM7 17H9V15H7V17Z" stroke={stroke ? stroke : "#323232"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8 3H4C3.73478 3 3.48043 3.10536 3.29289 3.29289C3.10536 3.48043 3 3.73478 3 4V8" stroke={stroke ? stroke : "#323232"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M21 8V4C21 3.73478 20.8946 3.48043 20.7071 3.29289C20.5196 3.10536 20.2652 3 20 3H16" stroke={stroke ? stroke : "#323232"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M3 16V20C3 20.2652 3.10536 20.5196 3.29289 20.7071C3.48043 20.8946 3.73478 21 4 21H8" stroke={stroke ? stroke : "#323232"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M16 21H20C20.2652 21 20.5196 20.8946 20.7071 20.7071C20.8946 20.5196 21 20.2652 21 20V16" stroke={stroke ? stroke : "#323232"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export default QrCode