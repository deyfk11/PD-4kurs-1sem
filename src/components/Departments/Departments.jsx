import React from 'react';
import styled from 'styled-components';
import Map from '../../assets/Map.PNG';

const Img = styled.img`
  width: 100%;
`;

const Wrapper = styled.div`
  padding: 20px;
  background: grey;
`;

const Departments = () => (
  <Wrapper>
    <Img src={Map} />
  </Wrapper>
);

export default Departments;
