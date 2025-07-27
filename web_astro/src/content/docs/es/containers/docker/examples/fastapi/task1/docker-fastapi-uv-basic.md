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

## 🛠️ Crea una Aplicación Básica con FastAPI

Comienza escribiendo una aplicación FastAPI simple que diga `¡Hola, mundo!`. El objetivo es entender cómo funciona FastAPI y cómo ejecutarla localmente (sin usar Docker por ahora).

Para empezar:

- Sigue la guía [Trabajando en proyectos con uv](https://docs.astral.sh/uv/guides/projects/#working-on-projects) para inicializar el entorno de tu aplicación.
- Luego, consulta la [Guía Rápida de FastAPI](https://fastapi.tiangolo.com/es/#instalacion) para crear una aplicación básica.

Tómate tu tiempo para leer la documentación y asegúrate de entender cómo funciona la configuración local.

## 🐳 Siguiente Paso: Usar Docker

Cuando ya te sientas cómodo utilizando `uv` y ejecutando tu aplicación FastAPI localmente, el siguiente reto es **empaquetar tu app dentro de un contenedor Docker**.

Te recomiendo seguir la [guía oficial para usar FastAPI con Docker](https://fastapi.tiangolo.com/es/deployment/docker/), donde se explica paso a paso cómo construir y ejecutar tu aplicación FastAPI dentro de un contenedor. Además, revisa la [guía de integración de uv en Docker](https://docs.astral.sh/uv/guides/integration/docker/) para aprender cómo instalar uv en el entorno del contenedor.

**Pista:** En este desafío, solo necesitas escribir un archivo `Dockerfile`, construir la imagen y ejecutar el contenedor usando el comando `docker run`.
