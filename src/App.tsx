import './App.css'
import Header from './components/Header'
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddProdutos from './pages/AddProdutos';

function App() {

  return (
    <>
      <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home /> }></Route>
        <Route path='/cadastrar' element={<AddProdutos/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
