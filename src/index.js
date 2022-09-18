import React from 'react';
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Layout from './Layout';
import Output from './Output';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Faclties from './Faclties';
import FacltyById from './FacltyById';
import Facltycreate from './Facltycreate';
import FacltyUpdate from './FacltyUpdate';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Layout />}>
    <Route index element={<Output />}></Route>
    <Route path="/footer" element={<Output />}></Route>
    <Route path="/faclties" element={<Faclties />}></Route>
    <Route path="/faclty/:id" element={<FacltyById />}></Route>
    <Route path="/faclty/add" element={<Facltycreate />}></Route>
    <Route path="/faclty/update/:id" element={<FacltyUpdate/>}></Route>
    </Route>
  </Routes>
  </BrowserRouter>
);