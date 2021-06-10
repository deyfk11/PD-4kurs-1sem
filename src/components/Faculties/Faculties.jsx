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
    align-self: center;
`;
const Wrapper = styled.div`
    max-width: 1400px;
    margin: 0 auto;
    padding: 15px;
    display: flex;
    flex-direction: column;
`;
const Text = styled.p`
    font-size: 16px;
    color: #3f51b5;
    margin-bottom: 15px;
    padding-left: 20px;
    margin-top: ${(props) => props.howGet && '30px'}
`;
const Faculty = styled.p`
    font-size: 19px;
    color: #a25a5a;
    margin: 15px 0;
`;
const FacultyWrapper = styled.div`
    margin: 0 auto;
    width: 700px;
`;
const Link = styled.a`
    font-size: 15px;
    margin-top: 15px;
    color: blue;
    display: block;
    padding-left: 20px;
    text-decoration: none;
`;

const Navigation = () => (
  <Wrapper>
    <Title>Факультеты Московского политеха</Title>
    <FacultyWrapper>
      <Faculty>ТРАНСПОРТНЫЙ ФАКУЛЬТЕТ</Faculty>
      <Text>Декан факультета: Итурралде Бакеро Пабло Эмилио</Text>
      <Text>+7(495) 223-05-23 доб. 1555</Text>
      <Text>Заместитель декана по учебной работе: Фомина Евгения Александровна</Text>
      <Text>+7(495) 223-05-23 доб. 1655</Text>
      <Text>Делопроизводитель: Ковалева Анастасия Павловна</Text>
      <Text>+7(495) 223-05-23 доб. 1558</Text>
      <Text>Почтовый адрес: 107023, г. Москва, ул. Б. Семёновская, 38; Аудитория: А-404.</Text>
      <Text>Телефон: +7(495) 223-05-23.</Text>
      <Text>E-mail: tr.facultet@mospolytech.ru</Text>
      <Text>Социальные сети: vk.com/club129992563</Text>
      <Text howGet>Как добраться ?</Text>
      <Text>Кампус на Большой Семёновской: учебные корпуса «А», «Б», «В», «Н», «НД»</Text>
      <Text>м. «Электрозаводская», ул. Б. Семёновская, д. 38.</Text>
    </FacultyWrapper>
    <FacultyWrapper>
      <Faculty>ФАКУЛЬТЕТ ИНФОРМАЦИОННЫХ ТЕХНОЛОГИЙ</Faculty>
      <Text>Руководство и контакты</Text>
      <Text>Декан факультета: Филиппович Андрей Юрьевич</Text>
      <Text>Заместители декана: Осьмин Владимир Вячеславович (учебно-методическаяработа)</Text>
      <Text>Даньшина Марина Владимировна (по общим вопросам)</Text>
      <Text>Помощник декана: Ремень Елизавета Витальевна</Text>
      <Text>Адрес: 107023, г. Москва, ул. Б. Семёновская, 38</Text>
      <Text>Аудитория: Н-316;</Text>
      <Text>Телефон: +7 (495) 223-05-23, доб. 1709 - приемная факультета.</Text>
      <Text>E-mail: isu@mospolytech.ru</Text>
      <Text>Социальные сети:</Text>
      <Link href="https://vk.com/fit.mospolytech" target="_blank">https://vk.com/fit.mospolytech</Link>
      <Link href="https://www.facebook.com/fit.mospolytech/" target="_blank">https://www.facebook.com/fit.mospolytech</Link>
      <Link href="https://www.instagram.com/fit.mospolytech/" target="_blank">https://www.instagram.com/fit.mospolytech</Link>
      <Text howGet>Как добраться ?</Text>
      <Text>Кампус на Большой Семёновской: учебные корпуса «А», «Б», «В», «Нх, «НД»</Text>
    </FacultyWrapper>
  </Wrapper>
);

export default Navigation;
