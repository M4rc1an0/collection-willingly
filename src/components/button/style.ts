import styled from "styled-components";
interface ActiveProps {
    active?: boolean
    color?: string;
    size?: number
}

export const Button = styled.button<ActiveProps>`
    display: flex;
    width: 200px;
    flex-direction: column;
    justify-content: space-between;
    align-items: center ;
    padding: 5px 10px;
    margin: 10px;
    border: none;
    background-color: ${props => props.active ? '#FF844B' : '#fff'};
    font-weight: bold;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 5px;
    cursor: pointer;

    :disabled{
        cursor: default;
        background-color: #ccc;
        
        p{
            color: #fff;    
        }
    }

    :hover {
        background-color: #FF844B;

        p{
            color: #fff;    
        }

        svg{
            path{
                stroke: #fff;
            }
        }

        :disabled{
            background-color: #ccc;
            
            p{
                color: #fff;    
            }
    }
    }

`

export const iconContent = styled.div<ActiveProps>`

    svg{
        path{
            stroke: ${props => props.active ? '#fff' : '#FF844B'};
        }
    }

`

export const Paragrafh = styled.p<ActiveProps>`
    font-size: ${props => props.size ? props.size : 16}px;
    margin: 5px 10px;
    color: ${props => props.active ? '#fff' : '#FF844B'};
`