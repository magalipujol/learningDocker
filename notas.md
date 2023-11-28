    docker run  -v ${PWD}:/peke --entrypoint bash -ti node

- docker run: creo el contenedor
- -v ${PWD}:/peke: le agrego al volumen el contenido de donde estoy parada (learningDocker)
- --entrypoint bash: le digo que en el contenedor entremos a la consola de bash
- -ti: contenedor interactivo
- node: imagen que quiero cargar en el contenedor

```
    cd peke
    npm install express --save
    node app.js
```
