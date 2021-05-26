import React from 'react';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';

const Title = styled(Typography)`
    font-size: 20px;
`;
const Wrapper = styled.div`
    max-width: 1400px;
    margin: 0 auto;
    padding: 15px;
`;

const Link = styled.a`
    font-size: 15px;
    margin-top: 15px;
    color: blue;
`;

const Navigation = () => (
  <Wrapper>
    <Title>Адреса корпусов</Title>
    <Link href="https://new.mospolytech.ru/ob-universitete/adresa-i-kontakty/">
      https://new.mospolytech.ru/ob-universitete/adresa-i-kontakty/
    </Link>
  </Wrapper>
);

export default Navigation;
