import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DeleteBook from "./pages/DeleteBook";
import Editbook from "./pages/EditBook";
import ShowBook from "./pages/ShowBook";
import CreateBook from "./pages/CreateBook";

const App = () => {
  return(
   <Routes>
      <Route path="" element={<Home />} />
      <Route path="/books/create" element={<CreateBook />} />
      <Route path="/books/delete/:id" element={<DeleteBook />} />
      <Route path="/books/edit/:id" element={<Editbook />} />
      <Route path="/books/details/:id" element={<ShowBook />} />
   </Routes>
  );
};

export default App