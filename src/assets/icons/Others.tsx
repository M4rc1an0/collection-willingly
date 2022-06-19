export const Others = ({ width, stroke }: any) => {
    return (
        <svg width={width ? width : '24'} height={width} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 21H6C5.73478 21 5.48043 20.8946 5.29289 20.7071C5.10536 20.5196 5 20.2652 5 20V9C5 7.93913 5.42143 6.92172 6.17157 6.17157C6.92172 5.42143 7.93913 5 9 5H15C16.0609 5 17.0783 5.42143 17.8284 6.17157C18.5786 6.92172 19 7.93913 19 9V20C19 20.2652 18.8946 20.5196 18.7071 20.7071C18.5196 20.8946 18.2652 21 18 21ZM14 4C14 3.73478 13.8946 3.48043 13.7071 3.29289C13.5196 3.10536 13.2652 3 13 3H11C10.7348 3 10.4804 3.10536 10.2929 3.29289C10.1054 3.48043 10 3.73478 10 4V5H14V4ZM19 19H20C20.2652 19 20.5196 18.8946 20.7071 18.7071C20.8946 18.5196 21 18.2652 21 18V15H19V19ZM5 15H3V18C3 18.2652 3.10536 18.5196 3.29289 18.7071C3.48043 18.8946 3.73478 19 4 19H5V15ZM9 10H15H9ZM15 16C15 15.7348 14.8946 15.4804 14.7071 15.2929C14.5196 15.1054 14.2652 15 14 15H10C9.73478 15 9.48043 15.1054 9.29289 15.2929C9.10536 15.4804 9 15.7348 9 16V21H15V16Z" stroke={stroke ? stroke : "#323232"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )
}