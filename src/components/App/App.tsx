import { useState } from 'react';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import {Switch, Route, Redirect} from 'react-router-dom';
import { RootState } from '../../store';
import Login from '../Login/Login';
import Regist from '../Regist/Regist';
import Todo from '../Todo/Todo';
import './App.css';

function App() {
  const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector

  const {isAuth} = useTypedSelector(state => state.authReducer)

  return (
    <div className="App">
      {/* <Link to='/login'>login</Link>
      <Link to='/regist'>regist</Link> */}
      {
      isAuth || localStorage.getItem('formData') ? 

      <Switch>
        <Route exact path='/todo'>
          <Todo/>
        </Route>
        <Redirect to='/todo'/>
      </Switch>
      :
      <Switch>
        <Route exact path='/login'>
          <Login/>
        </Route>

        <Route exact path='/regist'>
          <Regist/>
        </Route>
        <Redirect to='/login'/>
      </Switch>
      }
    </div>
  );
}

export default App;
