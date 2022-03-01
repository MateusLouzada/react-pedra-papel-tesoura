import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Result from "./routes/Result";

const Pages = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="result" element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Pages;