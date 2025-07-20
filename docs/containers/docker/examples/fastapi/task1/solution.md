# ✅ Task #1: Solution

If you've explored the docs and experimented a bit — great job!

Now let’s look at a **simple example** of how to run a FastAPI app using the `uv` package manager inside a Docker container.

This example is based on:

- [📘 FastAPI documentation](https://fastapi.tiangolo.com/)
- [📘 uv Docker guide](https://docs.astral.sh/uv/guides/integration/docker/)

You can adapt this to your own needs as you continue learning.

---

## 🛠️ Step-by-Step: Run the Example

### 1. Build the Docker image

From the project root, run:

```bash
docker build -t fastapi_simple_dev_uv:v1.0.0 .
```

### 2. Run the Docker container

```bash
docker run -d -p 8000:8000 fastapi_simple_dev_uv:v1.0.0
```
