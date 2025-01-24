import './App.css'
import RootLayout from "./components/sidebar/RootLayout.tsx";
import {BrowserRouter} from "react-router-dom";

function App() {

  return (
    <>
      <BrowserRouter>
        <RootLayout />
      </BrowserRouter>
    </>
  )
}

export default App
