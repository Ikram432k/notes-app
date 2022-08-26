import styled from "styled-components";
export const Div = styled.div`

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 4rem;
font-size: 2rem;
background-color: rgba(0, 0, 0, 0.6);
border: 1px solid #222;
gap:2rem;
h2{
    font-family: 'Montserrat', sans-serif;
    color:white;
}` 
interface hideornot{
    hide:boolean
}
export const Form = styled.form<hideornot>`
    display:${(props=>props.hide ? `flex` : `none`)};
`