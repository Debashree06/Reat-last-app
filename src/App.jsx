import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Blog from "./components/Blog";
import YouTube from "./components/YouTube";
import Insta from "./components/Insta";
import Facebook from "./components/Facebook";
import Navbar from "./components/Navbar";
import AboutCourses from "./components/AboutCourses";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* multiple endpoints also provide */}
        <Route path="/about/:courses" element={<AboutCourses />} />
        <Route path="blog" element={<Blog />}>
          <Route path="youtube" element={<YouTube />} />
          <Route path="insta" element={<Insta />} />
          <Route path="facebook" element={<Facebook />} />
        </Route>
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
