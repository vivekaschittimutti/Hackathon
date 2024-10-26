// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Students from './components/Students';
import Courses from './components/Courses';
import Teachers from './components/Teachers';
import Navbar from './components/Navbar';

const App = () => {
  const routes = [
    { path: '/', element: <Home /> },
    { path: '/students', element: <Students /> },
    { path: '/courses', element: <Courses /> },
    { path: '/teachers', element: <Teachers /> },
  ];

  return (
    <>
      <Navbar />
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={route.element}
          />
        ))}
      </Routes>
    </>
  );
};

export default App;
