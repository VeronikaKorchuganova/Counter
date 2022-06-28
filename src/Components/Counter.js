import React from "react";
import styled from "styled-components";
import Button from "./ui/Button";
import { useDispatch, useSelector } from "react-redux";
import Container from "./ui/Container";
import { getState } from "../store/configurationReducer";
import { getCount, toggleCounter } from "../store/countReducer";

const Count = styled.div`
    font-size: 40px;
    margin-top: 20px;
`
const Counter = () => {
    const state = useSelector(getState);
    const count = useSelector(getCount);

    const dispatch = useDispatch();
    const blockCounter = () => dispatch(toggleCounter());
    return (
        <Container state={state}>
                <p>СЧЕТЧИК</p>
                <Count>{count}</Count>
            <Button onClick={blockCounter}>ЗАБЛОКИРОВАТЬ <br/> СЧЕТЧИК</Button>
        </Container>
    )
}

export default Counter;