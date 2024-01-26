import React from 'react';
import { BrowserRouter } from 'react-router-dom';

type RouterProviderProps = {
  children: React.ReactNode;
};
const RouterProvider = ({ children }: RouterProviderProps) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};

export default RouterProvider;
