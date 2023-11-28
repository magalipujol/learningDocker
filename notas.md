#### Si solo tengo la imagen de node, y no tengo el archivo docker-componse:

    docker run  -v ${PWD}:/peke --entrypoint bash -w /peke -p 3000:3000 -ti node

- docker run: creo el contenedor
- -v ${PWD}:/peke: le agrego al volumen el contenido de donde estoy parada (learningDocker)
- --entrypoint bash: le digo que en el contenedor entremos a la consola de bash
- -ti: contenedor interactivo
- node: imagen que quiero cargar en el contenedor
- -w /peke: path absoluto de donde arranca
- -p 3000:3000: puerto de mi máquina y puerto de docker

```
    cd peke
    npm install express --save
    node app.js
```

#### Agregando el archivo docker-compose:

La api ya arranca corriendo en /peke, con express instalado

```
docker-componse -up
```
