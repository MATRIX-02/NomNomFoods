import appStore from "../utils/store/appStore";
import "./App.css";
import Header from "./Components/Header";
import { Provider } from "react-redux";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <Provider store={appStore}> 
      <Header />

      <div className=" my-24 flex justify-center">
        <Outlet />
      </div>
    </Provider>
  );
}

export default App;
