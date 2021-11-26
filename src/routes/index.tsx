import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { PublicArea, PrivateArea } from "../components";

import publicR from "./public";
import privateR from "./private";

const App = () => {
  const publicRoutes = publicR.map(({ path, component }, key) => (
    <Route path={path} element={component} key={key} />
  ));

  const privateRoutes = privateR.map(({ path, component }, key) => (
    <Route path={path} element={component} key={key} />
  ));

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicArea />}>{publicRoutes}</Route>
        <Route element={<PrivateArea />}>{privateRoutes}</Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
