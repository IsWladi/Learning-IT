---
title: "✅ Solución: Docker con FastAPI (uv)"
description: "Configuración básica de Docker con FastAPI (uv) – solución"
---

¡Si ya leíste la documentación y experimentaste un poco, excelente trabajo!

Ahora vamos a ver un **ejemplo básico** de cómo ejecutar una aplicación FastAPI utilizando el gestor de paquetes `uv` dentro de un contenedor Docker.

Esta solución se basa en:

- [📘 Documentación de FastAPI](https://fastapi.tiangolo.com/es)
- [📘 Documentación de uv](https://docs.astral.sh/uv/)
- [📘 FastAPI en contenedores](https://fastapi.tiangolo.com/es/deployment/docker/)
- [📘 Guía de uv para Docker](https://docs.astral.sh/uv/guides/integration/docker/)

Siéntete libre de adaptar esta configuración a tu propio proyecto a medida que aprendes más.

---

### 🛠️ Guía paso a paso

#### 1. Clona el repositorio

Descarga el código fuente del proyecto:

```bash
git clone https://github.com/IsWladi/Learning-IT.git
```

#### 2. Navega al directorio de la tarea

Dirígete a la carpeta que contiene la solución de la `tarea 1`:

```bash
cd Learning-IT/web_astro/src/content/docs/es/containers/docker/examples/fastapi/task1
```

#### 3. Explora la estructura del proyecto

Tómate un momento para revisar los archivos y la organización de carpetas. Intenta comprender el propósito de cada archivo en esta tarea.

#### 4. Revisa el `Dockerfile`

Abre el archivo Dockerfile para ver cómo se construye y ejecuta la aplicación usando uv.

_🔍 Presta especial atención a los comentarios — explican qué hace cada paso y por qué es importante._

#### 5. Construye la imagen de Docker

Desde el directorio de `tarea 1`, construye la imagen usando:

```bash
docker build -t fastapi_simple_dev_uv .
```

#### 6. Ejecuta el contenedor Docker

Inicia el contenedor y expón la aplicación en el puerto 8000:

```bash
docker run -d -p 8000:8000 fastapi_simple_dev_uv
```

#### 7. Accede a la aplicación

Abre tu navegador web y ve a:

```
http://localhost:8000/docs
```
