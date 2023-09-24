import './App.css';
import React from 'react';
import Navigation from './containers/Navigation'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './redux/store'
import Home from './containers/Home'
import Businesses from './containers/Businesses'
import Login from './containers/Login'
import Business from './containers/Business';
import ProtectedRoute from './components/ProtectedRoute';
import AddBusiness from './containers/AddBusiness'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='business' element={<Businesses />} />
          <Route path='login' element={<Login />} />
          <Route path="/business/:id" element={<Business />} />
          <Route path="/add" element={<ProtectedRoute component={AddBusiness} />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
