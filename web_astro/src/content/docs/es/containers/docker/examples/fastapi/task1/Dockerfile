# 🐍 Usa una imagen oficial ligera de Python 3.12 como base
FROM python:3.12.5-slim-bullseye

# 📁 Establece el directorio de trabajo dentro del contenedor
# Todos los comandos posteriores se ejecutarán desde esta carpeta
WORKDIR /code

# Instala uv (gestor de paquetes de Python)
# Más información: https://docs.astral.sh/uv/guides/integration/docker/

# 🌐 Instala las herramientas de sistema necesarias: curl y autoridades de certificados
# Se requieren para descargar de forma segura el instalador de uv
RUN apt-get update && apt-get install -y --no-install-recommends curl ca-certificates

# 📦 Descarga el script oficial de instalación de uv (un gestor de paquetes de Python rápido)
ADD https://astral.sh/uv/install.sh /uv-installer.sh

# 🚀 Ejecuta el script de instalación y luego elimínalo para mantener la imagen limpia
RUN sh /uv-installer.sh && rm /uv-installer.sh

# 🛠️ Añade uv al PATH para poder usarlo globalmente
ENV PATH="/root/.local/bin/:$PATH"

# 📄 Copia el archivo de dependencias del proyecto dentro del contenedor
# Se utiliza para instalar los paquetes de Python necesarios
COPY ./pyproject.toml /code/pyproject.toml

# 📥 Instala las dependencias de Python con uv
# --no-cache-dir evita almacenar los archivos descargados
# --system instala los paquetes directamente en el entorno del sistema (para no crear un virtualenv)
RUN uv pip install -r pyproject.toml --no-cache-dir --system

# 📄 Copia el archivo principal de la aplicación FastAPI dentro del contenedor
COPY ./main.py /code/main.py

# 🚦 Inicia el servidor de desarrollo de FastAPI
# --host 0.0.0.0 permite el acceso externo (necesario para Docker cuando uno expone puertos)
CMD ["fastapi", "dev", "main.py", "--host", "0.0.0.0"]
