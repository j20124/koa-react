FROM node:carbon

# 앱 디렉터리 생성
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# 앱 의존성 설치
COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000
ENV NODE_HOST host.docker.internal
CMD [ "npm", "start" ]
