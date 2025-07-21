---
title: "Solution: Docker with FastAPI (uv)"
description: "Docker with FastAPI (uv) basic setup solution"
---

## ✅ Solution Overview

If you’ve read through the documentation and experimented a bit — great job!

Now let’s walk through a **basic example** of how to run a FastAPI application using the `uv` package manager inside a Docker container.

This solution is based on:

- [📘 FastAPI documentation](https://fastapi.tiangolo.com/)
- [📘 uv documentation](https://docs.astral.sh/uv/)
- [📘 FastAPI in containers](https://fastapi.tiangolo.com/deployment/docker/)
- [📘 uv Docker guide](https://docs.astral.sh/uv/guides/integration/docker/)

Feel free to adapt this setup to your own project as you learn more.

---

### 🛠️ Step-by-Step Guide

#### 1. Clone the Repository

Download the project source code:

```bash
git clone https://github.com/IsWladi/Learning-IT.git
```

#### 2. Navigate to the Task Directory

Go to the folder containing the `task 1` solution:

```bash
cd Learning-IT/web_astro/src/content/docs/containers/docker/examples/fastapi/task1
```

#### 3. Explore the Project Structure

Take a moment to review the files and folder layout. Try to understand the purpose of each file in this task.

#### 4. Review the `Dockerfile`

Open the Dockerfile to see how the app is built and run with uv.

_🔍 Pay close attention to the comments — they explain what each step does and why it matters._

#### 5. Build the Docker image

From the `task 1` directory, build the image using:

```bash
docker build -t fastapi_simple_dev_uv .
```

#### 6. Run the Docker container

Start the container and expose the app on port 8000:

```bash
docker run -d -p 8000:8000 fastapi_simple_dev_uv
```

#### 7. Access the Application

Open your web browser and go to:

```
http://localhost:8000/docs
```
