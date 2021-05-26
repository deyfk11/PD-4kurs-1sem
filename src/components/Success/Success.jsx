import React from 'react';
import './Sucess.css'
import { Container } from '@material-ui/core';
import {makeStyles} from "@material-ui/core/styles";
const useStyles = makeStyles({
    body: {
        margin: 0,
        body: 0,
    },
})

const Success = () => {
  const s = useStyles();
  return(
    <div>
      <Container>
        <div class="success_hystory">
            <div class="item1">
                <h3>Жуплев Антон Сергеевич</h3>
                <img src='./item1.png'/>
            </div>
            <div class="item2">
                <h3>Даньшина Марина Владимировна</h3>
                <img src='./item2.png'/>
            </div>
            <div class="item3">
                <h3>Миклушевский Владимир Владимирович</h3>
                <img src='./item3.png'/>
            </div>
        </div>
      </Container>
    </div>
)};


export default Success;
