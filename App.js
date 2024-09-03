import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
//import StackNavigator from './src/navigation/StackNavigator';
//import MyTabs from "./src/navigation/manipulador_button";
//import MyMaterialtopTabs from "./src/navigation/manipulador_MaterialTopTabs";
import DrawerNavigation from "./src/navigation/manipulador_nativo";

const queryclient = new QueryClient()

export default function App() {
  return (
      <QueryClientProvider client={queryclient}>
        < DrawerNavigation />
      </QueryClientProvider>)

}