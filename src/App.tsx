import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { RouteType } from './models';
import { authRoutes, privateRoutes } from './routes';
import ProtectedRoute, { NotProtectedRoute } from './routes/protected-route';


function App() {
  const getRoutes = (routes: RouteType[]) => routes.map((route: RouteType, index: number) => {
    const Component = route.component;
    return <Route key={index} path={route.path} element={ 
      <NotProtectedRoute>
        {Component}
      </NotProtectedRoute>
    } />
  })

  const getPrivateRoutes = (routes: RouteType[]) => routes.map((route: RouteType, index: number) => {
    const Component = route.component;
    return <Route key={index} path={route.path} element={ <ProtectedRoute>{Component}</ProtectedRoute>} />
  })

  return (
    <Router>
      <Routes>
        {getRoutes(authRoutes)}
        {getPrivateRoutes(privateRoutes)}
      </Routes>
    </Router>
  );
}

export default App;

