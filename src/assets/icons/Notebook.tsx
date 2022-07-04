import { PropsIcon } from "./types"

const Notebook = ({ width, stroke, fill }: PropsIcon) => {
    return (
        <svg width={width ? width : '24'} height={width} viewBox="0 0 24 24" fillRule="evenodd"  xmlns="http://www.w3.org/2000/svg">
            <path d="M20 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H20C21.1046 22 22 21.1046 22 20V4C22 2.89543 21.1046 2 20 2Z" fill={stroke ? stroke : "#652D90"} />
            <path d="M5 9H3C2.73478 9 2.48043 8.89464 2.29289 8.70711C2.10536 8.51957 2 8.26522 2 8C2 7.73478 2.10536 7.48043 2.29289 7.29289C2.48043 7.10536 2.73478 7 3 7H5C5.26522 7 5.51957 7.10536 5.70711 7.29289C5.89464 7.48043 6 7.73478 6 8C6 8.26522 5.89464 8.51957 5.70711 8.70711C5.51957 8.89464 5.26522 9 5 9ZM6 12C6 11.7348 5.89464 11.4804 5.70711 11.2929C5.51957 11.1054 5.26522 11 5 11H3C2.73478 11 2.48043 11.1054 2.29289 11.2929C2.10536 11.4804 2 11.7348 2 12C2 12.2652 2.10536 12.5196 2.29289 12.7071C2.48043 12.8946 2.73478 13 3 13H5C5.26522 13 5.51957 12.8946 5.70711 12.7071C5.89464 12.5196 6 12.2652 6 12ZM6 16C6 15.7348 5.89464 15.4804 5.70711 15.2929C5.51957 15.1054 5.26522 15 5 15H3C2.73478 15 2.48043 15.1054 2.29289 15.2929C2.10536 15.4804 2 15.7348 2 16C2 16.2652 2.10536 16.5196 2.29289 16.7071C2.48043 16.8946 2.73478 17 3 17H5C5.26522 17 5.51957 16.8946 5.70711 16.7071C5.89464 16.5196 6 16.2652 6 16ZM20 2H18V22H20C20.5304 22 21.0391 21.7893 21.4142 21.4142C21.7893 21.0391 22 20.5304 22 20V4C22 3.46957 21.7893 2.96086 21.4142 2.58579C21.0391 2.21071 20.5304 2 20 2Z" fill={fill ? fill : "#FF844B"} />
        </svg>
    )
}

export default Notebook