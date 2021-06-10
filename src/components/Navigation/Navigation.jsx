import React from 'react';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';

const Title = styled(Typography)`
    font-size: 24px;
    color: #3f51b5;
    font-weight: bold;
    width: 600px;
    text-align: center;
    margin: 25px 0;
`;
const Wrapper = styled.div`
    max-width: 1400px;
    margin: 0 auto;
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const Text = styled.p`
    font-size: 16px;
    color: #3f51b5;
    margin-bottom: 15px;
`;

const Navigation = () => (
  <Wrapper>
    <Title>
      Адреса и контакты Московского
      политехнического университета в Москве
    </Title>
    <Text>Адрес: 107023, г. Москва, ул. Большая Семёновская, 38</Text>
    <Text>тел.: +7 (495) 223-05-23</Text>
    <Text>факс: +7 (499) 785-62-24</Text>
    <Text>e-mail: mospolytech@mospolytech.ru</Text>
    <Title>
      Адреса и контакты отдела кадров Московского
      политехнического университета в Москве
    </Title>
    <Text>
      г. Москва, ул. Б. Семёновская, д. 38, ауд. А-114
    </Text>
    <Text>8 (495) 223-05-20;</Text>
    <Text>8(495) 223-05-23, доб. 1130 ok@mospolytech.ru</Text>
    <Text>И. О. начальника отдела кадров</Text>
    <Text>Ларина Татьяна Сергеевна</Text>
    <Text>8(495)223-05-23 доб. 1133</Text>
    <Text>ok@mospolytech.ru</Text>
  </Wrapper>
);

export default Navigation;
