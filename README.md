# Validador de CEP

![image](https://user-images.githubusercontent.com/6164326/95704953-e67b5680-0c28-11eb-9fae-fed796a85026.png)
![image](https://user-images.githubusercontent.com/6164326/95704934-d794a400-0c28-11eb-87b3-54fd192ab966.png)

## Tecnologias utilizadas:

### Infra
- Docker
- MongoDB - NoSQL Database

### Frontend
- ReactJS
- WIndmill React UI/TailwindCSS (UI)
- Axios (Comunicação com API)
- React Icons
- React Notifications Compontent
- React Router DOM (Navegação)

### Backend
- Express (HTTP Server)
- Cors
- Youch (Tratar erros)
- Mongoose (Comunicação com DB)
- Jest/Supertest (Ferramenta para testes)

## Como rodar o projeto?

### Com docker
- Faça um git clone deste repositório
- Acesse a pasta do frontend e renomeie o arquivo .env.example para .env e coloque o seguinte conteúdo:
```
REACT_APP_API_URL=http://localhost:8080/
```
- Acesse a pasta do backend e renomeie o arquivo .env.example para .env e coloque o seguinte conteúdo:
```
NODE_ENV=development
APP_PORT=8080

MONGO_URL=db
MONGO_PORT=27017
MONGO_DATABASE=cep
```
- Volte a pasta raiz e execute o seguinte comando para subir os containers:
```
docker-compose up -d
```
- Por final, acesse http://localhost

### Sem docker

- Primeiramente verifique se possui o MongoDB instalado, pois é necessário.
- Faça um git clone deste repositório
- Acesse a pasta do frontend e renomeie o arquivo .env.example para .env e coloque o seguinte conteúdo:
```
REACT_APP_API_URL=http://localhost:3334/
```
- Após o comando acima execute o comando a seguir na mesma pasta:
```
npm install - ou caso use yarn - yarn install
```
- Após a instalação das dependencias, por fim, execute: 
```
npm start - ou caso use yarn - yarn start
```
- Acesse a pasta do backend e renomeie o arquivo .env.example para .env e coloque o seguinte conteúdo:
```
NODE_ENV=development
APP_PORT=3334

MONGO_URL=localhost
MONGO_PORT=27017
MONGO_DATABASE=cep
```
- Após o comando acima execute o comando a seguir na mesma pasta:
```
npm install - ou caso use yarn - yarn install
```
- Após a instalação das dependencias, por fim, execute: 
```
npm dev - ou caso use yarn - yarn dev
```
- Depois de iniciar tanto o frontend quanto o backend acesse http://localhost

## Como rodar os testes

- Após realizar o passo a passo acima para execução da aplicação (instalação das dependencias...)
- Entre na pasta backend e execute o seguinte comando:
```
npm run test - ou caso use yarn - yarn test
```
- E verá uma saida dessa forma:
![image](https://user-images.githubusercontent.com/6164326/95704797-6523c400-0c28-11eb-8d60-0e38047389cd.png)






