import React, { useState } from 'react';
import { Divider } from 'antd';
import './addprodutos.css';

const AddProdutos = () => {
  const [produto, setProduto] = useState({
    codigo: '',
    categoria: '',
    descricao: '',
    ml: '',
    regiao: '',
    tipoCliente: '',
    valor: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduto({
      ...produto,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(produto);
  };

  return (
    <div className="fundo" style={{ marginLeft: '250px' }}>
      <h2 className="cadastro" style={{ margin: '20px' }}>Cadastro de Produtos </h2>
      <Divider style={{ backgroundColor: "#9CA3AF" }} />

      <form className='line'>
        <div className='smash'>Codigo*<input className="input" type="number" placeholder=" Novo" name="codigo" value={produto.codigo} onChange={handleChange} /> </div>
        <div className='smash'>Categoria*<input className="input" type="text" placeholder=" Produto" name="categoria" value={produto.categoria} onChange={handleChange} /></div>
        <div className='smash'>Descrição*<input className="desc" type="text" placeholder=" Descreva o nome do seu produto" name="descricao" value={produto.descricao} onChange={handleChange} /></div>
      </form>
      <form className='line'>
        <div className='smash'>ML*<input className="input" type="number" placeholder=" 600" name="ml" value={produto.ml} onChange={handleChange} /> </div>
        <div className='smash'>
          Região*
          <select className="input" name="regiao" value={produto.regiao} onChange={handleChange}>
            <option value="">UF</option>
            <option value="PE">PE</option>
            <option value="BA">BA</option>
            <option value="RJ">RJ</option>
            <option value="SP">SP</option>
          </select>
        </div>
        <div className='smash'>
          Tipo Cliente*
          <select className="input" name="tipoCliente" value={produto.tipoCliente} onChange={handleChange}>
            <option value="">Selecione...</option>
            <option value="bronze">Bronze</option>
            <option value="prata">Prata</option>
            <option value="ouro">Ouro</option>
          </select>
        </div>
        <div className='smash'>Valor*<input className="descr" type="text" placeholder=" R$1500,00..." name="valor" value={produto.valor} onChange={handleChange} /></div>
      </form>
      <button className="bt" type="button" onClick={handleSubmit}>ADICIONAR PRODUTO</button>
    </div>
  );
};

export default AddProdutos;
