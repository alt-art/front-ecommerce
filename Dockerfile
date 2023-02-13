FROM node:18-alpine AS builder

WORKDIR /app

COPY . .

RUN yarn install

ARG VITE_ECOMMERCE_API

RUN yarn build

FROM nginx:1.21.3-alpine AS runner

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
