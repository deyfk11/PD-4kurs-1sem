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
import Contacts from './components/Contacts/Contacts';
import Navigation from './components/Navigation/Navigation';
import Departments from './components/Departments/Departments';
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
  { title: 'Контакты', path: '/contacts' },
  { title: 'Навигатор', path: '/navigation' },
  { title: 'Отделы', path: '/departments' },
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
          <Route exact path="/contacts" component={Contacts} />
          <Route exact path="/navigation" component={Navigation} />
          <Route exact path="/departments" component={Departments} />

        </Switch>
      </div>
    </Router>
  );
};
export default App;
