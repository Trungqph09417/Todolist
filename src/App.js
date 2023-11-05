import { useState } from "react";
import{Home,Login,Personal,Public} from './containers/public/'
import { Routes,Route } from "react-router-dom";
import path from "./utils/path";
function App() {
 

  return (
    <div className="">
     <Routes>
      <Route path={path.PUBLIC} element={<Public/>}>
         <Route path={path.HOME} element={<Home/>}/>
         <Route path={path.LOGIN} element={<Login/>}/>
         <Route path={path.PERSONAL} element={<Personal/>}/>
         <Route path={path.STAR} element={<Home/>}/>
      </Route>
     </Routes>
    </div>
  );
}

export default App;
