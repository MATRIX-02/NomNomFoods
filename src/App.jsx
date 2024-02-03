import './App.css'
import Header from './Components/Header';
import { Outlet } from 'react-router-dom';

function App() {

  return (
    <>
    <Header />
    <div className="app">
      <Outlet />
    </div>
    </>
  )
}

export default App
