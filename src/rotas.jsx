import { BrowserRouter, Route, Routes } from "react-router-dom";
import PaginaInicial from "./pages/paginaInicial/PaginaInicial";
import Produtos from "./pages/Produtos/Produtos";
import Sidebar from "./components/layout/Sidebar";
import AddProdutos from "./pages/add/addprodutos";


function Rotas() {
  return (
    <BrowserRouter>
    <Sidebar />
          <Routes>
            
            <Route path="/" element={<PaginaInicial />} />
            <Route path="/produtos" element={<Produtos />} />
            <Route path="/addProdutos" element={<AddProdutos />} />
          </Routes>
    </BrowserRouter>
  );
}

export default Rotas;
