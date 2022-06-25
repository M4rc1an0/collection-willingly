import { PropsIcon } from "./types"

export const Message = ({ width, stroke }: PropsIcon) => {
    return (
        <svg width={width ? width : '24'} height={width} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 2H4C2.9 2 2.01 2.9 2.01 4L2 22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM9 11H7V9H9V11ZM13 11H11V9H13V11ZM17 11H15V9H17V11Z" fill={stroke ? stroke : "#323232"} />
        </svg>
    )
}