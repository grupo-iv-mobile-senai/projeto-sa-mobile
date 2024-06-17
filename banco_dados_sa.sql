CREATE DATABASE estacionamento_sa;

USE estacionamento_sa;

CREATE TABLE cliente (
id_cliente INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nome_cliente VARCHAR(45) NOT NULL,
cpf_cliente BIGINT(11),
telefone_cliente BIGINT(11),
email_cliente VARCHAR(100) UNIQUE,
senha_cliente VARCHAR (45)
);
select*from cliente;


CREATE TABLE cadastro_vaga (
id_vaga INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nome_vaga VARCHAR(45),
capacidade INT,
valor DECIMAL (4.6),
logradouro VARCHAR(100),
bairro VARCHAR(100),
cidade VARCHAR(100),
estado VARCHAR(100),
veiculo ENUM('moto', 'carro', 'van', 'caminhao'),
cliente_id INT ,
FOREIGN KEY (cliente_id) 
REFERENCES cliente (id_cliente)
);

select* from cadastro_vaga;


