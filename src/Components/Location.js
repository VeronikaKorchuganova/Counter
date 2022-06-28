import React from "react";
import styled from "styled-components";
import Button from "./ui/Button";
import Container from "./ui/Container";
import { useDispatch, useSelector } from "react-redux";
import { getState } from "../store/configurationReducer";
import { setPosition } from "../store/configurationReducer";
import { setInfo } from "../store/infoReducer";

const Info = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: ${props => {
        return (props.state === 0) ? '14px' : '0'
    }};
`
const InfoText = styled.textarea`
    width: 300px;
    height: 80px;
`

const Location = () => {
    const state = useSelector(getState);

    const info = useSelector(setInfo);
    
    const dispatch = useDispatch();
    const changePosition = () => dispatch(setPosition());

    return (
        <Container state={state}>
            <Button onClick={changePosition}>ПОМЕНЯТЬ ПОЛОЖЕНИЕ</Button>
            <Info state={state}>
                <p>Информация:</p>
                <InfoText value = {info}></InfoText>
            </Info>
        </Container>
    )
}

export default Location;