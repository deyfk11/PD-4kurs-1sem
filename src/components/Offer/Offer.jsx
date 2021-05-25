import React from 'react';
import './Offer.css'
import { Container } from '@material-ui/core';
import {makeStyles} from "@material-ui/core/styles";
const useStyles = makeStyles({
    body: {
        margin: 0,
        body: 0,
    },
})

const Offer = () => {
  const s = useStyles();
  return(
    <div>
      <Container>
      <a href="https://new.mospolytech.ru/ob-universitete/strategiya/">Сделать как ссылку на сайт</a>
      </Container>
    </div>
)};


export default Offer;
