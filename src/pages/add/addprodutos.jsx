import React, { useState } from 'react';
import { Divider } from "antd";
import "./addprodutos.css"

const AddProdutos = () => {
  const [produto, setProduto] = useState({
    codigo: '',
    categoria: '',
    descricao: '',
    ml: '',
    quantidade: '',
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
    // Aqui você pode enviar os dados para onde desejar, por exemplo, uma API.
    console.log(produto);
  };

  return (
    <div  className="fundo" style={{ fontFamily: 'Arial, sans-serif', margin:'20px' }}>
      <h2 className= "cadastro" style={{ marginLeft: '260px'}}>Cadastro de Produtos </h2>
      <Divider style={{ margin: "10px 0", backgroundColor: "#9CA3AF" }} />
      <form onSubmit={handleSubmit} style={{ marginLeft: '135px', marginTop: '14px'}}>
        <label style={{ marginLeft:'135px' }}>
          Código:
          <input type="text" name="codigo" value={produto.codigo} onChange={handleChange} style={{ marginLeft: '5px', padding: '5px', borderRadius: '5px', border: '1px solid #ccc' }} />
        </label>
        <label style={{ marginBottom: '10px' }}>
          Categoria:
          <select name="categoria" value={produto.categoria} onChange={handleChange} style={{ marginLeft: '5px', padding: '5px', borderRadius: '5px', border: '1px solid #ccc' }}>
            <option value="">Selecione uma categoria</option>
            <option value="agua">Água</option>
            <option value="refrigerante">Refrigerante</option>
            <option value="bebidas">Bebidas</option>
          </select>
        </label>
        <label style={{ marginBottom: '10px' }}>
          Descrição:
          <input type="text" name="descricao" value={produto.descricao} onChange={handleChange} style={{ marginLeft: '5px', padding: '5px', borderRadius: '5px', border: '1px solid #ccc' }} />
        </label>
        </form>

        <form onSubmit={handleSubmit} style={{ marginLeft: '135px', marginTop: '50px'}}>
        <label style={{ marginLeft:'135px' }}></label>
        <label style={{ marginBottom: '10px' }}>
          ML:
          <input type="text" name="ml" value={produto.ml} onChange={handleChange} style={{ marginLeft: '5px', padding: '5px', borderRadius: '5px', border: '1px solid #ccc' }} />
        </label>
        <label style={{ marginBottom: '10px' }}>
          Quantidade:
          <input type="text" name="quantidade" value={produto.quantidade} onChange={handleChange} style={{ marginLeft: '5px', padding: '5px', borderRadius: '5px', border: '1px solid #ccc' }} />
        </label>
        <label style={{ marginBottom: '10px' }}>
          Região:
          <select name="regiao" value={produto.regiao} onChange={handleChange} style={{ marginLeft: '5px', padding: '5px', borderRadius: '5px', border: '1px solid #ccc' }}>
            <option value="">Selecione uma região</option>
            <option value="pe">Pernambuco (PE)</option>
            <option value="ba">Bahia (BA)</option>
            <option value="rj">Rio de Janeiro (RJ)</option>
            <option value="sp">São Paulo (SP)</option>
          </select>
        </label>
        <label style={{ marginBottom: '10px' }}>
          Tipo de Cliente:
          <select name="tipoCliente" value={produto.tipoCliente} onChange={handleChange} style={{ marginLeft: '5px', padding: '5px', borderRadius: '5px', border: '1px solid #ccc' }}>
            <option value="">Selecione um tipo de cliente</option>
            <option value="bronze">Bronze</option>
            <option value="prata">Prata</option>
            <option value="ouro">Ouro</option>
          </select>
        </label>
        <label style={{ marginBottom: '10px' }}>
          Valor:
          <input type="text" name="valor" value={produto.valor} onChange={handleChange} style={{ marginLeft: '5px', padding: '5px', borderRadius: '5px', border: '1px solid #ccc' }} />
        </label>
        <button type="submit" style={{ margin: '120px', padding: '8px 12px', borderRadius: '5px', border: 'none', backgroundColor: '#007bff', color: '#fff', cursor: 'pointer' }}>Adicionar Produto</button>
      </form>
    </div>
  );
};

export default AddProdutos;
