---
title: "Configuración básica de Docker con FastAPI (uv)"
description: "Aprende cómo ejecutar una aplicación FastAPI con Docker y usar uv como gestor de paquetes"
---

## 🎯 Objetivo

El objetivo de esta tarea es **ejecutar una aplicación básica de FastAPI dentro de un contenedor Docker**, utilizando el gestor de paquetes de Python [`uv`](https://docs.astral.sh/uv/).

Este es un primer paso con Docker — **no nos vamos a preocupar aún por la experiencia de desarrollo o flujo de trabajo**. La idea es **entender lo básico** sobre:

- Estructura de una app FastAPI
- Instalación de dependencias con `uv`
- Ejecución de un servidor FastAPI
- Construcción y ejecución de un contenedor Docker

Tareas posteriores añadirán características como recarga automática para una mejor experiencia de desarrollo.

## 🧠 Aprende los Fundamentos

Antes de pasar directamente a Docker, tómate unos minutos para explorar:

- [Documentación de FastAPI](https://fastapi.tiangolo.com/)
- [Documentación de uv](https://docs.astral.sh/uv/guides/integration/docker/])

Intenta responder las siguientes preguntas:

- ¿Cómo se instala Python normalmente en un sistema Linux?
- ¿Cómo se instala `uv`?
- ¿Cómo se crea un entorno virtual con `uv`?
- ¿Cómo se instalan las dependencias de un proyecto usando `uv`?
- ¿Cuál es el comando para ejecutar una aplicación FastAPI en modo desarrollo?

## 🛠️ Crea una Aplicación Básica con FastAPI

Comienza escribiendo una aplicación FastAPI simple que diga `¡Hola, mundo!`. El objetivo es entender cómo funciona FastAPI y cómo ejecutarla localmente (sin usar Docker por ahora).

Para empezar:

- Sigue la guía [Trabajando en proyectos con uv](https://docs.astral.sh/uv/guides/projects/#working-on-projects) para inicializar el entorno de tu aplicación.
- Luego, consulta la [Guía Rápida de FastAPI](https://fastapi.tiangolo.com/#installation) para crear una aplicación básica.

Tómate tu tiempo para leer la documentación y asegúrate de entender cómo funciona la configuración local.

## 🐳 Siguiente Paso: Usar Docker

Una vez que te sientas cómodo usando `uv` y ejecutando una app FastAPI localmente, el siguiente paso es **empaquetar tu aplicación dentro de un contenedor Docker**.

Utiliza como referencia la guía oficial [FastAPI en contenedores](https://fastapi.tiangolo.com/deployment/docker/). Esta guía te muestra paso a paso cómo construir y ejecutar tu aplicación FastAPI dentro de un contenedor Docker.
