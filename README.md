# E-commerce

Simple e-commerce application using React, Context API and React Router.

> You can run all the application in https://github.com/alt-art/ecommerce using the docker-compose.

## Installation

Clone the repository and install the dependencies.

```bash
yarn install
```

## Running

This application uses my e-commerce API, so you need to run it first.

```bash
git clone https://github.com/alt-art/back-ecommerce.git
cd back-ecommerce
docker build -t back-ecommerce .
docker run -p 8000:8000 back-ecommerce
```

Add to the `.env` file the API URL.

```
VITE_ECOMMERCE_API=http://localhost:8000
```

Now you can run the application.

```bash
yarn dev
```
