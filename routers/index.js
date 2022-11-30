import routerPath from "./routerPath.js";
import { Routes, Route } from "react-router-dom";
import React from "react";
import style from '../client/components/App/style.less'

function Router() {
    return (
      <Routes>
        <Route path={routerPath.home.value} element={<div className={style.myapp}>Hello World</div>} />
        <Route path={routerPath.about.value} element={<div>About</div>} />
      </Routes>
    );
  }
  
  export default Router;