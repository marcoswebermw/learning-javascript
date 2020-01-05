## Instalar Mysql  

```sh
sudo apt update

sudo apt install mysql-server

mysql -V

sudo systemctl status mysql

# Para remover bancos de testes, logins remotos, anonimos,
# melhorando a segurança do mysql.
sudo mysql_secure_installation

# Essas dicas parecem estar depreciadas.
# Para versões anteriores à versão 5.7.6 use:
# mysql_install_db
# Para versão 5.7.6 e posteriores use
# mysqld --initialize

mysql -u root -p

# Usando o mysqladmin para gerenciamento.
sudo mysqladmin -p -u root version

# Comandos úteis.
show databases;
create database teste;
use teste;
show tables;

create table minhaTabela (id INT(11) unsigned not null auto_increment, name VARCHAR(255), primary key(id));
```  

Instalando Driver de acesso ao Mysql pelo Nodejs.  

```sh
npm install mysql --save-dev
```  
