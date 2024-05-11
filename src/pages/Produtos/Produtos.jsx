import React, { useState } from 'react';
import { Space, Table, Tag, Button, Select, Modal, Form, Input, Row, Col  } from 'antd';
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
];

const data = [
    {
        key: '1',
        cod: '001',
        data: '2024-05-01',
        categoria: 'Refrigerante',
        descricao: 'Coca Cola  Original - Pet',
        ml: '350',
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
        ml: '350',
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
        ml: '200',
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
        ml: '300',
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
        ml: '350',
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
    const [editandoProduto, setEditandoProduto] = useState(null);
    const [modalVisivel, setModalVisivel] = useState(false);
    const { Option } = Select;

    const abrirModalEdicao = (produto) => {
        setEditandoProduto(produto);
        setModalVisivel(true);
    };

    const fecharModalEdicao = () => {
        setEditandoProduto(null);
        setModalVisivel(false);
    };

    const handleSalvarEdicao = (values) => {
        // Lógica para salvar a edição do produto
        console.log('Valores editados:', values);
        fecharModalEdicao();
    };

    return (
        <div className="main-content">
            <a href="/addProdutos"><button className="btn" type="button">+ ADD PRODUTOS</button></a>
            <Table
                columns={[
                    ...columns,
                    {
                        title: 'Ações',
                        key: 'action',
                        render: (_, record) => (
                            <Space size="middle">
                                <a onClick={() => abrirModalEdicao(record)}>Editar {record.cod}</a>
                                <a>Excluir</a>
                            </Space>
                        ),
                    }
                ]}
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
                     <Modal
                title="Editar Produto"
                visible={modalVisivel}
                onCancel={fecharModalEdicao}
                footer={null}
            >
                 {editandoProduto && (
                    <Form className='editar' onFinish={handleSalvarEdicao} initialValues={editandoProduto}>
                    <Row gutter={20}> {/* Define o espaçamento entre as colunas */}
                        <Col span={12}> {/* Define que esta coluna ocupará metade do espaço */}
                            <Form.Item label="Código" name="Cod" type="number">
                                <Input />
                            </Form.Item>
                            <Form.Item label="Data" name="data">
                                <Input />
                            </Form.Item>
                            <Form.Item label="Categoria" name="categoria">
                                <Select>
                                    <Option value="Suco">Suco</Option>
                                    <Option value="Refrigerante">Refrigerante</Option>
                                    <Option value="Energético">Energético</Option>
                                </Select>
                            </Form.Item>  
                            {/* Adicione mais itens de formulário conforme necessário */}
                        </Col>
                        <Col span={12}> {/* Define que esta coluna ocupará metade do espaço */}
                            <Form.Item label="ML" name="ml">
                                <Input />
                            </Form.Item>
                            <Form.Item label="Quantidade" name="qtd">
                                <Input />
                            </Form.Item>
                            <Form.Item label="Valor" name="valor">
                                <Input />
                            </Form.Item>
                            {/* Adicione mais itens de formulário conforme necessário */}
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item label="Região" name="regiao">
                                <Select>
                                    <Option value="PE">PE</Option>
                                    <Option value="BA">BA</Option>
                                    <Option value="RJ">RJ</Option>
                                    <Option value="SP">SP</Option>
                                </Select>
                            </Form.Item>
                            {/* Adicione mais itens de formulário conforme necessário */}
                        </Col>
                        <Col span={12}>
                            <Form.Item label="Tipo de Cliente" name="TipoCliente">
                                <Select>
                                    <Option value="Bronze">Bronze</Option>
                                    <Option value="Prata">Prata</Option>
                                    <Option value="Ouro">Ouro</Option>
                                </Select>  
                            </Form.Item>
                            {/* Adicione mais itens de formulário conforme necessário */}
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                        <Form.Item label="Descrição" name="descricao">
                                <Input />
                            </Form.Item> 
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <Form.Item>
                                <Button type="primary" htmlType="submit">Salvar</Button>
                                <Button onClick={fecharModalEdicao}>Cancelar</Button>
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
                 )}
            </Modal>
        </div>
    );
};

export default Produtos;