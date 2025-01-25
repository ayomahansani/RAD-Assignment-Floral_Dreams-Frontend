import './App.css'
import RootLayout from "./components/sidebar/RootLayout.tsx";
import {BrowserRouter} from "react-router-dom";
import {ToastContainer} from "react-toastify";

function App() {

  return (
    <>
      <BrowserRouter>
        <RootLayout />
      </BrowserRouter>
        <ToastContainer />
    </>
  )
}

export default App
