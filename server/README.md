## Hello Koa

 - node + typescript + koa2


## Start

### Run app
```bash
$ yarn && yarn install
$ yarn start
```

### Test
```bash
$ curl -X GET 'localhost:3000/api/v1/users'
{"users":[{"id":1,"name":"Kim","age":"21"},{"id":2,"name":"Lee","age":"25"},{"id":3,"name":"Park","age":"32"}]}
```

```bash
$ curl -X GET 'localhost:3000/api/v1/users/2'
{"user":{"id":2,"name":"Lee","age":"25"}}
```


## Docker
### Build image
```bash
$ docker build -t nowpark/hello-koa .
```
```bash
$ docker images
```

### Run image
```bash
$ docker run -p 80:3000 -d nowpark/hello-koa
```
```bash
$ docker ps
$ docker logs <container id>
```
```bash
$ docker exec -it <container id> /bin/bash
```

### Test
```bash
$ curl -X GET 'localhost/api/v1/users'
{"users":[{"id":1,"name":"Kim","age":"21"},{"id":2,"name":"Lee","age":"25"},{"id":3,"name":"Park","age":"32"}]}
```

## Todo

 - [ ] swagger
 - [ ] mongodb + mongoose + docker
 - [ ] pm2
 - [ ] split env config
 - [ ] jest
 - [ ] lint
 - [ ] redis + docker
 - [ ] oAuth2