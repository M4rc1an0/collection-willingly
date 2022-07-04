import { PropsIcon } from "./types"

const Snack = ({ width, stroke }: PropsIcon) => {
    return (
        <svg width={width ? width : "24"} height={width} viewBox="0 0 24 24" fillRule="evenodd" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.10023 13.34L10.9302 10.51L3.91023 3.50002C2.35023 5.06002 2.35023 7.59002 3.91023 9.16002L8.10023 13.34ZM14.8802 11.53C16.4102 12.24 18.5602 11.74 20.1502 10.15C22.0602 8.24002 22.4302 5.50002 20.9602 4.03002C19.5002 2.57002 16.7602 2.93002 14.8402 4.84002C13.2502 6.43002 12.7502 8.58002 13.4602 10.11L3.70023 19.87L5.11023 21.28L12.0002 14.41L18.8802 21.29L20.2902 19.88L13.4102 13L14.8802 11.53Z" fill={stroke ? stroke : "#323232"} />
        </svg>

    )
}

export default Snack