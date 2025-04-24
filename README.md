# 📔 Projeto Diário - DAW III

Este repositório contém o projeto **Diário**, desenvolvido na disciplina de Desenvolvimento de Aplicações Web III (DAWIII). O sistema consiste em uma aplicação web para criação e visualização de postagens de diário, utilizando **React com Next.js** no frontend e **Spring Boot** no backend. As imagens são armazenadas em um bucket local do **MinIO** com **Docker Compose**.

---

## Tecnologias Utilizadas

### Frontend
- [Next.js](https://nextjs.org/)
- [Axios](https://axios-http.com/)
- [Zustand](https://github.com/pmndrs/zustand)

### Backend
- [Spring Boot](https://spring.io/projects/spring-boot)
- [Spring Data JPA](https://spring.io/projects/spring-data-jpa)
- [PostgreSQL](https://www.postgresql.org/)

### Armazenamento de Imagens
- [MinIO](https://min.io/)
- [Docker Compose](https://docs.docker.com/compose/)

---

## Como rodar o projeto

### 1. Clonar o repositório

```bash
git clone https://github.com/lucasramallo/diario.git
cd diario
```

## 2. Subir o MinIO com Docker Compose

Certifique-se de ter o Docker e Docker Compose instalados.

```bash
cd backend
docker-compose up -d
```

Isso irá subir o MinIO acessível em http://localhost:9000 com as credenciais padrão (definidas no docker-compose.yml).

## 3. Rodar o Backend (Spring Boot)
Pré-requisitos:

    Java 17+

    PostgreSQL rodando (ou configure o banco conforme desejar)

Exemplo de application.properties

```properties
spring.application.name=diario
file.upload-dir=temp-uploads

spring.datasource.url=jdbc:URL_DO_BANCO
spring.datasource.username=postgres
spring.datasource.password=SENHA_DO_BANCO
spring.datasource.driver-class-name=org.postgresql.Driver

# Configurações do MinIO
minio.url=http://localhost:9000
minio.access-key=SUA_CHAVE_DE_ACESSO
minio.secret-key=SUA_CHAVE_SECRETA

# JPA/Hibernate
spring.jpa.database-platform=org.hibernate.dialect.PostgreSQLDialect
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true

spring.servlet.multipart.max-file-size=10MB
spring.servlet.multipart.max-request-size=10MB

```

## Executar


```bash
cd backend
./mvnw spring-boot:run
```

### 4. Rodar o Frontend (Next.js)
Pré-requisitos:

Node.js 18+

```bash
cd frontend
npm install
npm run dev
```
O frontend será iniciado em http://localhost:3000.
