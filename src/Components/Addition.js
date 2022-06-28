import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Button from "./ui/Button";
import Container from "./ui/Container";
import { useState } from "react";
import { getState } from "../store/configurationReducer";
import { increment, setCount } from "../store/countReducer";
import { deleteInfo } from "../store/infoReducer";

const Section = styled.div`
    display: flex;
    flex-direction: column;
`

const Form = styled.div`
    display: flex;
    flex-direction: row;
    margin: 14px;
`
const Input = styled.input`
    margin-left: 8px;
`

const Addition = () => {
    const state = useSelector(getState);

    const [value, setValue] = useState(0);

    const dispatch = useDispatch();
    const setupCounter = () => dispatch(setCount(value));
    const incrementCounter = () => dispatch(increment());
    const clearInfo = () => dispatch(deleteInfo());

    return (
        <Container state={state}>
            <Section>
                <Button onClick={incrementCounter}>ДОБАВИТЬ 1</Button>
                <Form>
                    <Button onClick={setupCounter}>УСТАНОВИТЬ</Button>
                    <Input type='number' onChange={event => setValue(event.target.value)}></Input>
                </Form>
            </Section>
            <Button onClick={clearInfo}>ПОЧИСТИТЬ ИНФОРМАЦИЮ <br/> В БЛОКЕ 4</Button>
        </Container>
    )
}

export default Addition;