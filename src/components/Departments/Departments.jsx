import React from 'react';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';
import Map from '../../assets/Map.PNG';

const Img = styled.img`
  width: 100%;
`;

const Wrapper = styled.div`
  padding: 20px;
`;
const Title = styled(Typography)`
    font-size: 24px;
    color: #3f51b5;
    font-weight: bold;
    width: 600px;
    display: flex;
    align-items: center;
    margin: 30px auto;
`;

const Departments = () => (
  <Wrapper>
    <Title>Интерактивная структура Московского Политеха</Title>
    <Img src={Map} />
  </Wrapper>
);

export default Departments;
