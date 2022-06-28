import React from "react";
import Information from "./Components/Information";
import Counter from "./Components/Counter";
import Addition from "./Components/Addition";
import Location from "./Components/Location";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { getState } from "./store/configurationReducer";

const Container = styled.div`

  flex-direction: column;
  grid-template-columns: 1fr 1fr;
  column-gap: 40px;
  row-gap: 10px;
  display: ${props => {
    return (props.state === 0) ? 'grid' : 'flex'
  }}
`

function App() {

  const state = useSelector(getState);

  return (
    <Container state={state}>
      <Information/>
      <Counter/>
      <Addition/>
      <Location/>
    </Container>
  );
}

export default App;
