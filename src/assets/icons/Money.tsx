import { PropsIcon } from "./types"

const Money = ({ width, stroke }: PropsIcon) => {
    return (
        <svg width={width ? width : '24'} height={width} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 9H11.5C11.1022 9 10.7206 9.15804 10.4393 9.43934C10.158 9.72064 10 10.1022 10 10.5V10.5C10 10.8978 10.158 11.2794 10.4393 11.5607C10.7206 11.842 11.1022 12 11.5 12H12.5C12.8978 12 13.2794 12.158 13.5607 12.4393C13.842 12.7206 14 13.1022 14 13.5V13.5C14 13.8978 13.842 14.2794 13.5607 14.5607C13.2794 14.842 12.8978 15 12.5 15H10" stroke={stroke ? stroke : "#323232"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 16V15M21 19H3V5H21V19ZM21 5H17C17 6.06087 17.4214 7.07828 18.1716 7.82843C18.9217 8.57857 19.9391 9 21 9V5ZM3 9C4.06087 9 5.07828 8.57857 5.82843 7.82843C6.57857 7.07828 7 6.06087 7 5H3V9ZM21 15C19.9391 15 18.9217 15.4214 18.1716 16.1716C17.4214 16.9217 17 17.9391 17 19H21V15ZM3 19H7C7 17.9391 6.57857 16.9217 5.82843 16.1716C5.07828 15.4214 4.06087 15 3 15V15V19ZM12 9V8V9Z" stroke={stroke ? stroke : "#323232"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export default Money