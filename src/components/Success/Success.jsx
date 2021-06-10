import React from 'react';
import './Sucess.css';
import { Container } from '@material-ui/core';
import item1 from '../../assets/item1.png';
import item2 from '../../assets/item2.png';
import item3 from '../../assets/item3.png';

const Success = () => (
  <Container>
    <div className="success_hystory">
      <div className="imgBlock">
        <img src={item1} alt="img1" className="img" />
        <h3 className="title">Жуплев Антон</h3>
        <h3 className="title">Сергеевич</h3>
      </div>
      <div className="imgBlock">
        <img src={item2} alt="img2" className="img" />
        <h3 className="title">Даньшина Марина</h3>
        <h3 className="title">Владимировна</h3>
      </div>
      <div className="imgBlock">
        <img src={item3} alt="img3" className="img" />
        <h3 className="title">Миклушевский Владимир</h3>
        <h3 className="title">Владимирович</h3>
      </div>
    </div>
    <div />
  </Container>
);

export default Success;
