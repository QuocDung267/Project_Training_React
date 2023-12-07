import React from "react";
import GetNews from "../components/getNew/GetNews";
import MainLayouts from "../layouts/MainLayouts";
import { useRoutes } from "react-router-dom";
import Reducer from "../components/useReducer/useReducer";
import AppUseContext from "../components/appUseContext";
import TodoApp from "../components/todoAppUseReducer";
import UseImperativeHandle from "../components/useImperativeHandle";

const routes = [
  { path: "/", index: true, element: <GetNews /> },
  { path: "/usereducer", index: true, element: <Reducer /> },
  { path: "/todo-app-usereducer", index: true, element: <TodoApp /> },
  { path: "/app-usecontext", index: true, element: <AppUseContext /> },
  {
    path: "/useimperativehandel",
    index: true,
    element: <UseImperativeHandle />,
  },
];
const RootRoutes = () => {
  const wrapLayoutRoutes = routes.map((route) => ({
    ...route,
    element: <MainLayouts>{route.element}</MainLayouts>,
  }));
  return useRoutes(wrapLayoutRoutes);
};
export default RootRoutes;
