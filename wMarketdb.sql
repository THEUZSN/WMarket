CREATE TABLE Produtos (
    id_produtos INT AUTO_INCREMENT PRIMARY KEY,
    nome_produtos VARCHAR(45),
    preço FLOAT(7,2),
    descrição TEXT
);

CREATE TABLE Vendas (
    id_vendas INT AUTO_INCREMENT PRIMARY KEY,
    fk_produtos INT,
    quantidade INT,
    FOREIGN KEY (fk_produtos) REFERENCES Produtos(id_produtos)
);
