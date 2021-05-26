import React from 'react';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';

const Text = styled.p`
    font-size: 15px;
    margin-top: 15px;
    font-weight: ${(props) => props.posititon && 'bold'}
`;
const Title = styled(Typography)`
    font-size: 20px;
`;
const Wrapper = styled.div`
    max-width: 1400px;
    margin: 0 auto;
    padding: 15px;
`;
const ContentBlock = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
    margin-right: 80px;
    width: 350px;
`;
const Link = styled.a`
    font-size: 15px;
    margin-top: 15px;
`;
const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 80px;
`;

const Contacts = () => (
  <Wrapper>
    <Container>
      <ContentBlock>
        <Title>Персоналии</Title>
        <Text posititon>И.о. начальника отдела кадров</Text>
        <Text>Ларина Татьяна Сергеевна</Text>
        <Text>8(495)223-05-23 доб. 1133</Text>
        <Link href="mailto:ok@mospolytech.ru">ok@mospolytech.ru</Link>
      </ContentBlock>
      <ContentBlock>
        <Text posititon>Специалист по кадровому делопроизводству</Text>
        <Text>Шипеева Екатерина Дмитриевн</Text>
        <Text>8(495)223-05-23 доб. 1138</Text>
        <Link href="mailto:ok@mospolytech.ru">ok@mospolytech.ru</Link>
      </ContentBlock>
      <ContentBlock>
        <Text posititon>Специалист по кадровому делопроизводству</Text>
        <Text>Филатова Ксения Андреевна</Text>
        <Text>8(495)223-05-23 доб. 1339</Text>
        <Link href="mailto:ok@mospolytech.ru">ok@mospolytech.ru</Link>
      </ContentBlock>
      <ContentBlock>
        <Text posititon>Специалист по кадровому делопроизводству</Text>
        <Text>Фомичёва Анастасия Дмитриевна</Text>
        <Text>8(495)223-05-23 доб. 1134</Text>
        <Link href="mailto:ok@mospolytech.ru">ok@mospolytech.ru</Link>
      </ContentBlock>
      <ContentBlock>
        <Text posititon>Специалист по кадровому делопроизводству</Text>
        <Text>Волкова Анастасия Леонидовн</Text>
        <Text>8(495)223-05-23 доб. 113</Text>
        <Link href="mailto:ok@mospolytech.ru">ok@mospolytech.ru</Link>
      </ContentBlock>
      <ContentBlock>
        <Text posititon>Специалист по кадровому делопроизводству</Text>
        <Text>Погосова Роза Левоновна</Text>
        <Text>8(495)223-05-23 доб. 1130</Text>
        <Link href="mailto:ok@mospolytech.ru">ok@mospolytech.ru</Link>
      </ContentBlock>
    </Container>
    <Container>
      <ContentBlock>
        <Title>Контактная информация</Title>
        <Text>г. Москва, ул. Б. Семёновская, д. 38, ауд. А-11</Text>
        <Text>8 (495) 223-05-20</Text>
        <Text>8(495) 223-05-23, доб. 1130</Text>
        <Link href="mailto:ok@mospolytech.ru">ok@mospolytech.ru</Link>
      </ContentBlock>
      <ContentBlock>
        <Title>График работы</Title>
        <Text>Понедельник: 10:30 - 17:00</Text>
        <Text>Вторник: 10:30 - 17:00</Text>
        <Text>Среда: неприёмный день</Text>
        <Text>Четверг: 10:30 - 17:00</Text>
        <Text>Пятница: 10:30 - 16:00</Text>
        <Text>Обеденный перерыв: 13:00 - 13:45</Text>
      </ContentBlock>
    </Container>
  </Wrapper>
);

export default Contacts;
