import React from 'react';
import './Teacher.css';
import { Container } from '@material-ui/core';

const Teacher = () => (
  <Container>
    <div className="info">
      <div className="info_left">
        <h1 className="title">Кто такой преподаватель ?</h1>
        <p className="teacher__text">
          Преподаватель это тот, кто даёт хороший пример, воспитывает патриота страны и общества, изучает
          разные предметы, учит понимать людей-общество, учит общаться с людьми.
          В процессе работы преподаватели проводят различные исследования, опыты, эксперименты, анализируют
          и систематизируют полученные знания, ездят в научные командировки по стране и за рубеж, выступают
          на конференциях и симпозиумах.
          Это интересная работа для усердных, любящих науку людей.
        </p>
      </div>
      <div className="info_right">
        <h1 className="title">Плюсы профессии преподавателя</h1>
        <ul className="list2a">
          <li>Высокий социальный стату</li>
          <li>Возможность заниматься научной деятельностью</li>
          <li>Возможность путешествовать, принимать участие в зарубежных и международных мероприятиях</li>
          <li>Возможность получать научные гранты</li>
        </ul>
      </div>

    </div>
  </Container>
);

export default Teacher;
