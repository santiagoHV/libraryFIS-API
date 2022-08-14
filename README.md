<h1>LIBRARY API</h1>

## Description

API construida con [Nest.js](https://github.com/nestjs/nest) a cargo de la gestión de datos de la librería WriteLibrary
haciendo uso de la programación modular distribuye controladores, servicios, entidades y DTOs siguiendo el patrón DAO sobre la 
construcción de la base de datos. Se integran servicios externos como Amazon S3, Postgresql, Docker, entre otros.

Para ver documentación de API hacer click [aquí](https://damp-reef-29694.herokuapp.com/docs)

##Requerimientos de software

<ul>
    <li>Node.js >= 14.x.x</li>
    <li>Nest cli</li>
    <li>Docker</li>
</ul>

## Installación

Dependencias de desarrollo y build
```bash
$ npm install
```

Levantamiento de la base de datos
```bash
$ docker-compose up -d library_database
```

Migraciones
```bash
$ npm run migrations:run
```

## Corriendo la aplicación

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Arquitectura de la API

La carpeta raiz cuenta con archivos  esenciales para el proyecto con las siguientes funcionalidades destacables:
<ul>
<li>ormconfig.js - Configuración para TypeOrm (Migraciones)</li>
<li>package.json - Percistencia de dependencias y versiones</li>
<li>docker-compose.yml - Instrucciones de servicios para la base de datos</li>
<li>Procfile -  Instrucciones de despliegue en Heroku</li>
</ul>

Adicionalmente se encuentran las siguientes carpetas con las siguientes funcionalidades
<ul>
<li>/dist - Compilación de archivos fuente para salir a producción</li>
<li>/test - Archivos de test automatizado</li>
<li>/src - Código fuente</li>

En la carpeta del codigo fuente se encuentra la arquitectura modular construida entonde cada subcarpeta es un modulo con sub
responsabilidades respectivamente
<ul>
<li>/database - Configuración de conexión a la DB y archivos de migraciones</li>
<li>/auth - Configuración, endpoints, middlewares, strategies y detalles de la autenticación</li>
<li>/users, /publications, /loans, /authors y /files - Modulos correspondientes a las entidades del modelo de software.</li>

Los módulos anteriormente mencionados cuentan con la siguiente arquitectura interna:
<ul>
<li>/entities - Entidades que modelan el sistema, mismas que se convierten en migraciones para moldear la base de datos</li>
<li>/services - Servicios encargados de hacer la consulta a la base de datos y formatear la respuesta</li>
<li>/dto - (Data transfer objects) Formato de datos para validación de entrada externa</li>
<li>/controllers -  Controladores con los endpoints a recibir y enviar datos al front-end</li>
</ul>
</ul>
</ul>


## Support

[Santiago Herrera Velásquez](https://github.com/santiagoHV)

## Stay in touch

- Author - [Santiago Herrera Velásquez](https://github.com/santiagoHV)

## License

Nest is [MIT licensed](LICENSE).
