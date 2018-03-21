import React, { Component } from 'react';
import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Layout from "./components/Layout/Layout";
import Main from "./containers/Main/Main";


class App extends Component {

  render() {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route path='/' component={Main}/>
                </Switch>
            </Layout>
        </BrowserRouter>
    );
  }
}

export default App;
