import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Components/Header';
import Photos from './Pages/Photos';
import Cart from './Pages/Cart';
import '../src/App.css';


const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Photos />
        </Route>
        <Route path='/cart'>
          <Cart />
        </Route>
      </Switch>
    </div>
  )
}

export default App;