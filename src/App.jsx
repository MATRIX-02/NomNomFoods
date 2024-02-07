import "./App.css";
import Header from "./Components/Header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <div className=" my-24 flex justify-center mx-32">
        <Outlet />
      </div>
    </>
  );
}

export default App;
