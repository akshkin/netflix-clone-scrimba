import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { GlobalStyles } from './global-styles';
import App from './App';
// import {FirebaseContext} from "./context/firebase"
// import { firebaseApp } from './utils/firebase';
import { CategoriesProvider} from './context/categories.context';
import { UserProvider } from './context/user.context';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <>
        <UserProvider>
          <CategoriesProvider >
            <GlobalStyles />
            <App />
          </CategoriesProvider>
        </UserProvider>              
      </>      
    </BrowserRouter>   
  </React.StrictMode>
);

