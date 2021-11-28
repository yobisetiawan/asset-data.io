import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { PublicArea, PrivateArea } from "../components";

import publicR from "./public";
import privateR from "./private";
import NotFound from "../pages/NotFound";

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
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
