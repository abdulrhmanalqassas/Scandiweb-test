import { PureComponent } from 'react';
import Header from './components/header/Header';
import './App.css';
import Category from './components/category/Category';
import PDP from './components/PDP/PDP';
import Cart from "./components/cart/Cart"
import { Routes , Route} from 'react-router-dom';
import { createStore } from 'redux';
import {combineReducers} from "redux";
import categoryReducer from './reducers/categoryReducer';
import curincyReducer from './reducers/curincyReducer';
import cartReducer from './reducers/cartReducer';
import { Provider } from 'react-redux';
import { from } from '@apollo/client';

// let my = c
const rootReducer = combineReducers({curincyReducer, categoryReducer,cartReducer})

const store = createStore( rootReducer );
export class App extends PureComponent {
  render() {

    
    return (
      <Provider store = {store}>
       <Header/>
      <Routes>
       
        {console.log(store.getState())}
       <Route path="/" element={ < Category/>} />
       <Route path="/pdp" element={ < PDP/>} />
       <Route path="/cart" element={ < Cart/>} />
      
      
       
      </Routes>
      </Provider>
     
      
       
  
      
    )
  }
}


export default App;