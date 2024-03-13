import { BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './pages/home'
import Price from './pages/price'
import Signin from './pages/signin'
import Signup from './pages/signup'
import Header2 from "./components/header2"
import Dashboard from "./pages/dashboard"
import List from './components/list'


function App() {

  return (
    <BrowserRouter>
    <Routes>
    <Route exact path="/"element={<Home/>} /> 
    <Route path="/Price" element={<Price/>} /> 
    <Route path="/in" element={<Signin/>} /> 
    <Route path="/up" element={<Signup/>} /> 
    <Route path="/dash" element={<Dashboard/>} />
    <Route path="/list" element={<List/>} />

    </Routes>
    </BrowserRouter>
    
  )
}

export default App
