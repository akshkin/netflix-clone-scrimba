import './App.css';
import { useEffect } from "react"
import {Routes, Route} from "react-router-dom"
import * as ROUTES from "./constants/routes"
import Home from './routes/home/home.component'
import SignIn from './routes/sign-in'
import SignUp from './routes/sign-up'
import Browse from './routes/browse';


function App() {

 

  return (
    <div className="App">
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.SIGN_IN} element={<SignIn />} />           
          <Route path={ROUTES.SIGN_UP} element={<SignUp />}/>            
          <Route path={ROUTES.BROWSE} element={<Browse />}/>
          
        </Routes>
    </div>
  );
}

export default App;
