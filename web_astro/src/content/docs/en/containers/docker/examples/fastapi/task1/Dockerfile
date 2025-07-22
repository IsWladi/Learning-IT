# 🐍 Use an official lightweight Python 3.12 image as the base
FROM python:3.12.5-slim-bullseye

# 📁 Set the working directory inside the container
# All subsequent commands will be run from this folder
WORKDIR /code

# Install uv (python package manager)
# Learn more: https://docs.astral.sh/uv/guides/integration/docker/

# 🌐 Install required system tools: curl and certificate authorities
# These are needed to securely download the uv installer
RUN apt-get update && apt-get install -y --no-install-recommends curl ca-certificates

# 📦 Download the official installation script for uv (a fast Python package manager)
ADD https://astral.sh/uv/install.sh /uv-installer.sh

# 🚀 Run the installer script, then remove it to keep the image clean
RUN sh /uv-installer.sh && rm /uv-installer.sh

# 🛠️ Add uv to the PATH so we can use it globally
ENV PATH="/root/.local/bin/:$PATH"

# 📄 Copy the project's dependency file into the container
# This is used to install the required Python packages
COPY ./pyproject.toml /code/pyproject.toml

# 📥 Install Python dependencies with uv
# --no-cache-dir avoids storing downloaded files
# --system installs packages directly into the system environment
RUN uv pip install -r pyproject.toml --no-cache-dir --system

# 📄 Copy the main FastAPI app file into the container
COPY ./main.py /code/main.py

# 🚦 Start the FastAPI development server
# --host 0.0.0.0 allows external access (needed for Docker)
CMD ["fastapi", "dev", "main.py", "--host", "0.0.0.0"]
