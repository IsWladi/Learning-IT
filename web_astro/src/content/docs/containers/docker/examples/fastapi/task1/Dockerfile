# Define the base image and its version
FROM python:3.12.5-slim-bullseye

# Set the working directory
WORKDIR /code

# Install uv (python package manager)
# docs: https://docs.astral.sh/uv/guides/integration/docker/

## The installer requires curl (and certificates) to download the release archive
RUN apt-get update && apt-get install -y --no-install-recommends curl ca-certificates

## Download the latest installer
ADD https://astral.sh/uv/install.sh /uv-installer.sh

## Run the installer then remove it
RUN sh /uv-installer.sh && rm /uv-installer.sh

## Ensure the installed binary is on the `PATH`
ENV PATH="/root/.local/bin/:$PATH"

# Copy from the local directory to the container the pyproject.toml file for installing dependencies
COPY ./pyproject.toml /code/pyproject.toml

# Install the dependencies using uv
# -- no-cache-dir: do not cache the downloaded packages
# -- system: install the packages in the system Python environment, not in a virtual environment
RUN uv pip install -r pyproject.toml --no-cache-dir --system

# Copy the main.py file from the local directory to the container
COPY ./main.py /code/main.py

# Command to run the FastAPI application
# --host 0.0.0.0 makes the server accessible from outside the container
CMD ["fastapi", "dev", "main.py", "--host", "0.0.0.0"]
