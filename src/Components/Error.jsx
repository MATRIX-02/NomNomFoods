import { useRouteError } from "react-router-dom";
import Header from "./Header";

const Error = () => {

    const err = useRouteError();
    console.log(err);

  return (
    <>
      <Header />
    <div className=" h-screen flex flex-col justify-center items-center ">
        <h1 className=" font-bold">OOPS!!!</h1>
        <h2>Something went wrong!!!</h2>
        <h2>{err.data}</h2>
    </div>
    </>
  )
}

export default Error;
