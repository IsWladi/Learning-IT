# Task #1 Solution

If you've explored the docs and tried things out — great!

Here's a simple example of how to run a FastAPI app using the `uv` package manager inside a Docker container.

This is based on:

- [FastAPI documentation](https://fastapi.tiangolo.com/)
- [uv Docker guide](https://docs.astral.sh/uv/guides/integration/docker/)

Feel free to adapt this example to your own needs.

## 🔧 Run the Example

**1. Build the Docker image:**

```bash
docker build -t fastapi_simple_dev_uv:v1.0.0 .
```

**2. Run the Docker container:**

```bash
docker run -d -p 8000:8000 fastapi_simple_dev_uv:v1.0.0
```
