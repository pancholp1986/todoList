import React from 'react';
import Header from './components/layout/Header';
import TodoList from './components/TodoList';
import Add from './components/Add';
import Edit from './components/Edit';
import Login from './components/Login';
import store from './store';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

function App() {

  return (
    <>
      <Router>
        <Provider store={store} >
          <ToastContainer />
          <Header />
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/items' element={<TodoList />} />
            <Route path='/items/create' element={<Add />} />
            <Route path='/items/:idItem' element={<Edit />} />
          </Routes>
        </Provider>
      </Router>
    </>
  );
}

export default App;
