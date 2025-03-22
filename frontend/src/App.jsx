import { BrowserRouter, Route, Routes } from "react-router"
import WelcomePage from "./pages/welcomePage"
import Signin from "./pages/signin"
import Signup from "./pages/signup"
import Profile from "./pages/profile"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage></WelcomePage>}></Route>
        <Route path="/signin" element={<Signin></Signin>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/profile" element={<Profile></Profile>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
