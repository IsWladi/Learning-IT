# Task #1: Hello World FastAPI App with `uv` in a Docker Container

## Goal

The goal of this task is to **run a basic FastAPI app inside a Docker container**, using the [`uv`](https://docs.astral.sh/uv/) Python package manager.

This is a simple first step — we are **not using volumes**, **not enabling hot reload**, and **not focusing on development experience inside the container** yet. The idea is to **understand the basics** of:

- FastAPI app structure
- Installing dependencies with `uv`
- Running a FastAPI server
- Building and running a Docker container

Later tasks will add features like hot reload for a better development experience.

## Learn the Basics

Before jumping into Docker, take a few minutes to explore:

- [FastAPI documentation](https://fastapi.tiangolo.com/)
- [uv documentation](https://docs.astral.sh/uv/guides/integration/docker/]

Try to answer the following questions:

- How is Python typically installed on a Linux system?
- How do you install `uv`?
- How do you create a virtual environment with `uv`?
- How do you install project dependencies using `uv`?
- What is the command to run a FastAPI app in development mode?

## Next Step: Use Docker

Once you're familiar with `uv` and FastAPI, try running the app inside a Docker container.

You can check the solution example here:
👉 [Task #1 solution](./task1/solution.md)
