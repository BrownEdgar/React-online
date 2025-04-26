import React from "react";
import { useState } from 'react';
import { useLocation } from 'react-router';

function PrivateRoutes() {
  const location = useLocation();
  const [isLogin, setisLogin] = useState(() => {
    return localStorage.getItem('login') || false
  });


  return isLogin
    ? <Outlet />
    : <Navigate to="/login" replace state={{ from: location }} />;
}

export default PrivateRoutes;
