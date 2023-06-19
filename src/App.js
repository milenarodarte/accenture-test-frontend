import { RoutesMain as Routes } from "./Routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import "./App.css";
import { SettingProvider } from "../src/Context/SettingContext";
import { APIProvider } from "./Context/ApiContext";
import React from "react";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <APIProvider>
        <SettingProvider>
          <Routes />
        </SettingProvider>
      </APIProvider>
    </div>
  );
}

export default App;
