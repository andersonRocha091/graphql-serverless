FROM lambci/lambda:build-nodejs12.x

WORKDIR /src/

COPY package*.json ./

RUN curl -sL https://unpkg.com/@pnpm/self-installer | node
RUN npm cache clean --force
RUN pnpm i

COPY . .

CMD npm start