import React from "react";
import styled from "styled-components";
import Button from "./ui/Button";
import Container from "./ui/Container";
import { useDispatch, useSelector } from "react-redux";
import { getState } from "../store/configurationReducer";
import { getInfo } from "../store/infoReducer";
import { getCount, isBlocked } from "../store/countReducer";

const ContainerInfo = styled.div`
    padding-bottom: 20px;
`

const TextContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 4px;
`

const Information = () => {
    const state = useSelector(getState);

    const position = useSelector(getState);
    const count = useSelector(getCount);
    const blocked = useSelector(isBlocked);

    const positionText = position === 0 ? "Сетка" : "вертикально";
    const blockedText = blocked ? "ДА" : "НЕТ";

    const dispatch = useDispatch();
    const addInfo = () => dispatch(getInfo());

    return (
        <Container state={state}>
            <ContainerInfo>
                <TextContainer>
                    <p>ПОЛОЖЕНИЕ БЛОКОВ:</p><span>{positionText.toUpperCase()}</span>
                </TextContainer>
                <TextContainer>
                    <p>ЗНАЧЕНИЕ СЧЕТЧИКА:</p><span>{count}</span>
                </TextContainer>
                <TextContainer>
                    <p>БЛОКИРОВКА СЧЕТЧИКА:</p><span>{blockedText}</span>
                </TextContainer>
            </ContainerInfo>
            <Button onClick={addInfo}>ВЫВЕСТИ ИНФУ В БЛОК 4</Button>
        </Container>
    )
}

export default Information;