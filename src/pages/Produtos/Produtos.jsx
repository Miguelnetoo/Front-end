import React, { useState } from 'react';
import { Space, Table, Tag, Button, Select } from 'antd';
import './produtos.css'; // Importe o arquivo de estilo

const { Option } = Select;

const columns = [
    {
        title: 'Código',
        dataIndex: 'cod',
        key: 'cod',
        filters: []
    },
    {
        title: 'Data',
        dataIndex: 'data',
        key: 'data',
        filters: []
    },
    {
        title: 'Categoria',
        dataIndex: 'categoria',
        key: 'categoria',
        filters: []
    },
    {
        title: 'Descrição',
        dataIndex: 'descricao',
        key: 'descricao',
        filters: []
    },
    {
        title: 'ML',
        dataIndex: 'ml',
        key: 'ml',
        filters: []
    },
    {
        title: 'Quantidade',
        dataIndex: 'quantidade',
        key: 'quantidade',
        filters: []
    },
    {
        title: 'Região',
        dataIndex: 'regiao',
        key: 'regiao',
        filters: [
            { text: 'PE', value: 'PE' },
            { text: 'BA', value: 'BA' },
            { text: 'RJ', value: 'RJ' },
            { text: 'SP', value: 'SP' },
        ],
        onFilter: (value, record) => record.regiao.indexOf(value) === 0,
        
    },
    {
        title: 'Tipo de Cliente',
        dataIndex: 'tipoCliente',
        key: 'tipoCliente',
        filters: [
            { text: 'Bronze', value: 'Bronze' },
            { text: 'Prata', value: 'Prata' },
            { text: 'Ouro', value: 'Ouro' },
        ],
        onFilter: (value, record) => record.tipoCliente.indexOf(value) === 0,
    },
    {
        title: 'Valor',
        dataIndex: 'valor',
        key: 'valor',
        filters: []
    },
    {
        title: 'Ações',
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
                <a>Editar {record.cod}</a>
                <a>Excluir</a>
            </Space>
        ),
        
    },
];

const data = [
    {
        key: '1',
        cod: '001',
        data: '2024-05-01',
        categoria: 'Refrigerante',
        descricao: 'Coca Cola  Original - Pet',
        ml: '350 ml',
        quantidade: 3,
        regiao: 'PE',
        tipoCliente: 'Bronze',
        valor: 'R$ 15,00',
    },
    {
        key: '2',
        cod: '002',
        data: '2024-05-01',
        categoria: 'Refrigerante',
        descricao: 'Coca Cola  Original - Lata',
        ml: '350 ml',
        quantidade: 3,
        regiao: 'BA',
        tipoCliente: 'Bronze',
        valor: 'R$ 18,00',
    },
    {
        key: '3',
        cod: '003',
        data: '2024-05-02',
        categoria: 'Energético',
        descricao: 'Monster - Lata',
        ml: '200 ml',
        quantidade: 5,
        regiao: 'BA',
        tipoCliente: 'Prata',
        valor: 'R$ 20,00',
    },
    {
        key: '4',
        cod: '004',
        data: '2024-05-02',
        categoria: 'Água',
        descricao: 'Garrafa Cristal',
        ml: '300 ml',
        quantidade: 11,
        regiao: 'RJ',
        tipoCliente: 'Prata',
        valor: 'R$ 30,00',
    },
    {
        key: '5',
        cod: '005',
        data: '2024-05-02',
        categoria: 'Heineken',
        descricao: 'Garrafa de Vidro',
        ml: '350 ml',
        quantidade: 12,
        regiao: 'SP',
        tipoCliente: 'Ouro',
        valor: 'R$ 48,00',
    },
    // Adicione mais dados conforme necessário
];

const Produtos = () => {
    const [filtroRegiao, setFiltroRegiao] = useState(null);
    const [filtroTipoCliente, setFiltroTipoCliente] = useState(null);

    const handleChangeRegiao = (value) => {
        setFiltroRegiao(value);
    };

    const handleChangeTipoCliente = (value) => {
        setFiltroTipoCliente(value);
    };

    return (
        <div className="main-content">
            <Button className='new'>+ Novo Produto</Button>
            <Table
                columns={columns}
                dataSource={data}
                // Aplica os filtros de região e tipo de cliente
                onChange={(pagination, filters) => {
                    if (filters.regiao && filters.regiao.length > 0) {
                        setFiltroRegiao(filters.regiao[0]);
                    } else {
                        setFiltroRegiao(null);
                    }
                    if (filters.tipoCliente && filters.tipoCliente.length > 0) {
                        setFiltroTipoCliente(filters.tipoCliente[0]);
                    } else {
                        setFiltroTipoCliente(null);
                    }
                }}
                filters={{ regiao: [filtroRegiao], tipoCliente: [filtroTipoCliente] }}
            />
        </div>
    );
};

export default Produtos;