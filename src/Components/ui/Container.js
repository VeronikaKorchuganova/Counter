import styled from "styled-components";

export const Container = styled.div `
    display: flex;
    border: 2px solid #000000;
    border-radius: 10px;
    padding: 8px;
    margin: 14px;
    flex-direction: ${props => {
        return (props.state === 0) ? 'column' : 'row'
    }};
    justify-content: ${props => {
        return (props.state === 0) ? 'center' : 'space-around'
    }};
    align-items: ${props => {
        return (props.state === 0) ? 'center' : 'start'
    }};
`

export default Container;