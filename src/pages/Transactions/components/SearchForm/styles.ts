import styled from "styled-components";

export const SearchFormContainer = styled.div`

    display: flex;
    gap:1rem;
    
    input{
        flex:1;
        border-radius:6px;
        border:0;
        background:${props => props.theme['gray-900']};
        color:${props => props.theme['gray-300 ']};
        padding: 1rem;

        &::placeholder{
            color:${props => props.theme['gray-500 ']}
        }
    }

    button{
        display: flex;
        align-items: center;
        gap:0.75rem;
        cursor: pointer;
        border:0;
        padding:1rem;
        background:transparent;
        border: 1px solid ${props=> props.theme['green-300']};
        color:${props=> props.theme['green-300']};
        font-weight: bold;
        border-radius:6px;

        &:hover{
            background:${props=>props.theme['green-500']};
            border-color:${props=>props.theme['green-500']};
            color:${props=> props.theme.white};
            transition: background-color 0.2s, color 0.2s, border-color 0.2s;
        }

        &:not(:disabled):disabled{
            opacity: 0.7;
            cursor:not-allowed;
        }
    }
`
export const ContainerSearch= styled.form`
    display:flex;
    flex-direction: column;
    gap:12px;
`

export const FilterContainer = styled.div`
    display:flex;
    flex-direction: row;
    gap:15px;
`

export const FilterPill = styled.div`
    width: 120px;
    padding: 8px;
    background: transparent;
    color:black;
    display:flex;
    align-items: center;
    justify-content:center;
    border-radius: 45px;
    border: 1px solid ${props=> props.theme['green-500']};
    color: ${props=> props.theme['green-500']};
    cursor: pointer;

    &:hover{
        background:${props=> props.theme['green-700']};
        transition: background-color 0.5s;
        color:#fff;
    }
`