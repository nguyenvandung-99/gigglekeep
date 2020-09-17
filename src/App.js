import React from 'react';
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Link } from "react-router-dom";
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';



function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="grid-container">
          <header>
            <Link className="header-link" to="/">Giggle Keep</Link>
            <Link className="header-link" to="/login">Dummy account</Link>
          </header>
          <main>
            <Route path="/login" component={LoginScreen} />
            <Route path="/" component={HomeScreen}/>
          </main>
          <footer></footer>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
