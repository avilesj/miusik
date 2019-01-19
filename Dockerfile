FROM node:10
EXPOSE 8888
WORKDIR /app
COPY . /app
RUN npm i
ENV PORT 8888
CMD ["npm", "run", "prod"]