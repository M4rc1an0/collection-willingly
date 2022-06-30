import { PropsIcon } from "./types"

const Here = ({ width, stroke }: PropsIcon) => {
    return (
        <svg width={width ? width : '24'} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 6C13.1046 6 14 5.10457 14 4C14 2.89543 13.1046 2 12 2C10.8954 2 10 2.89543 10 4C10 5.10457 10.8954 6 12 6Z" fill={stroke ? stroke : "#323232"} />
            <path d="M15.89 8.11C15.5 7.72 14.83 7 13.53 7C13.32 7 12.11 7 10.99 7C8.24 6.99 6 4.75 6 2H4C4 5.16 6.11 7.84 9 8.71V22H11V16H13V22H15V10.05L18.95 14L20.36 12.59L15.89 8.11Z" fill={stroke ? stroke : "#323232"} />
        </svg>
    )
}

export default Here