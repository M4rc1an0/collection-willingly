import { PropsIcon } from "./types"

const Clothes = ({width, stroke}: PropsIcon) => {
    return (
        <svg width={width ? width : "24"} height={width} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 6V20C21 20.2652 20.8946 20.5196 20.7071 20.7071C20.5196 20.8946 20.2652 21 20 21H4C3.73478 21 3.48043 20.8946 3.29289 20.7071C3.10536 20.5196 3 20.2652 3 20V6C3 5.73478 3.10536 5.48043 3.29289 5.29289C3.48043 5.10536 3.73478 5 4 5H6L8 3H16L18 5H20C20.2652 5 20.5196 5.10536 20.7071 5.29289C20.8946 5.48043 21 5.73478 21 6ZM8 3L12 7.29L16 3H8ZM16 3L12 7.29L16 10L18 5L16 3ZM6 5L8 10L12 7.29L8 3L6 5Z" stroke={stroke ? stroke : "#323232"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )
}

export default Clothes