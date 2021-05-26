import React from 'react';
import './Sucess.css';
import { Container } from '@material-ui/core';

const Success = () => (
  <Container>
    <div className="success_hystory">
      <div className="item1">
        <h3>Жуплев Антон Сергеевич</h3>
        <img src="./item1.png" alt="img1" />
      </div>
      <div className="item2">
        <h3>Даньшина Марина Владимировна</h3>
        <img src="./item2.png" alt="img2" />
      </div>
      <div className="item3">
        <h3>Миклушевский Владимир Владимирович</h3>
        <img src="./item3.png" alt="img3" />
      </div>
    </div>
    <div />
  </Container>
);

export default Success;
