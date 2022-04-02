import React from "react";
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";

import { CreatePost, Home, PostDetail ,Navbar } from './';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
    <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home />} ></Route>
          <Route exact path="/post/:postId" element={<PostDetail />} > </Route>
          <Route extact path="/create-post" element={<CreatePost />} > </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
