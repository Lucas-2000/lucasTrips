import { createMuiTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './componentes/Navbar';
import Cadastro from './paginas/Cadastro';
import Contato from './paginas/Contato';
import Home from './paginas/Home';
import Login from './paginas/Login';
import Sobre from './paginas/Sobre';

const tema = createMuiTheme({
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700
  },
  palette: {
    primary: {
      main: '#FE00FF'
    },
  },

  
})

function App() {
  return (
    <Router>
      <ThemeProvider theme={tema}>
        <CssBaseline />
        <Switch>
          <Route exact path='/'>
            <Login />
          </Route>
          <Route exact path='/cadastrar'>
            <Cadastro />
          </Route>
          <Route exact path='/home'>
            <Navbar />
            <Home />
          </Route>
          <Route exact path='/sobre'>
            <Navbar />
            <Sobre />
          </Route>
          <Route exact path='/contato'>
            <Navbar />
            <Contato />
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
