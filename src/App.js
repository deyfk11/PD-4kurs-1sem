import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import {
  AppBar,
  Toolbar,
  List,
  ListItem,
  ListItemText,
  Container,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Benefits from './components/Benefits/Benefits';
import Teacher from './components/Teacher/Teacher';
import Offer from './components/Offer/Offer'
import Success from './components/Success/Success'
import './App.css';

const useStyles = makeStyles({

  body: {
    margin: 0,
    body: 0,
  },

  navbarDisplayFlex: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  navDisplayFlex: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '0 auto',
  },
  linkText: {
    textDecoration: 'none',
    textTransform: 'uppercase',
    color: 'white',
  },
});

const navLinks = [
  { title: 'Карьера в Политехе', path: '/benefits' },
  { title: 'Преподавательская деятельность', path: '/teacher' },
  { title: 'Ценностное предложение', path: '/offer' },
  { title: 'Истории успеха', path: '/success' },

];

const App = () => {
  const classes = useStyles();

  return (
    <Router>
      <div>
        <AppBar position="static">
          <Toolbar>
            <Container maxWidth="md" className={classes.navbarDisplayFlex}>
              <List
                component="nav"
                aria-labelledby="main navigation"
                className={classes.navDisplayFlex}
              >
                {navLinks.map(({ title, path }) => (
                  <Link to={path} key={title} className={classes.linkText}>
                    <ListItem button>
                      <ListItemText primary={title} />
                    </ListItem>
                  </Link>
                ))}
              </List>
            </Container>
          </Toolbar>
        </AppBar>

        <Switch>
          <Route exact path="/benefits" component={Benefits} />
          <Route exact path="/teacher" component={Teacher} />
          <Route exact path="/offer" component={Offer} />
          <Route exact path="/success" component={Success} />
        </Switch>
      </div>
    </Router>
  );
};
export default App;
