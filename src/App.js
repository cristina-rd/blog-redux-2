import React from 'react';
import { connect } from 'react-redux';
import Routes from './routes';
import store from './store/store';

import Container from '@material-ui/core/Container'

import './App.css';
import AlertDeletedSuccess from './components/AlertDeletedSuccess';

function App() {
  let openedAlert = store ? store.getState().openedAlert : null;
  
  return (
    <Container fixed>
      <AlertDeletedSuccess show={openedAlert} />
      <Routes />
    </Container>
  );
}

const mapStateToProps = state => {
  return {...state, openedAlert: state.openedAlert }
}

const AppContainer = connect(mapStateToProps)(App)

export default AppContainer;