---
title: "Docker with FastAPI (uv) basic setup"
description: "Learn how to run with Docker an FastAPI app and use uv like package manager"
---

## 🎯 Goal

The goal of this task is to **run a basic FastAPI app inside a Docker container**, using the [`uv`](https://docs.astral.sh/uv/) Python package manager.

This is a simple first step — we are **not using volumes**, **not enabling hot reload**, and **not focusing on development experience inside the container** yet. The idea is to **understand the basics** of:

- FastAPI app structure
- Installing dependencies with `uv`
- Running a FastAPI server
- Building and running a Docker container

Later tasks will add features like hot reload for a better development experience.

## 🧠 Learn the Basics

Before jumping into Docker, take a few minutes to explore:

- [FastAPI documentation](https://fastapi.tiangolo.com/)
- [uv documentation](https://docs.astral.sh/uv/guides/integration/docker/])

Try to answer the following questions:

- How is Python typically installed on a Linux system?
- How do you install `uv`?
- How do you create a virtual environment with `uv`?
- How do you install project dependencies using `uv`?
- What is the command to run a FastAPI app in development mode?

## 🛠️ Create a Basic FastAPI App

Start by writing a simple `Hello, world!` FastAPI application. The goal is to understand how FastAPI works and how to run it locally (without Docker for now).

To get started:

- Follow the [uv: Working on Projects](https://docs.astral.sh/uv/guides/projects/#working-on-projects) guide to initialize your app environment.

- Then, refer to the [FastAPI Quickstart](https://fastapi.tiangolo.com/#installation) to create a basic FastAPI application.

Take your time to read through the documentation and make sure you understand how the local setup works.

## 🐳 Next Step: Use Docker

Once you're comfortable using uv and running a FastAPI app locally, the next step is to containerize your application with Docker.

Use the official [FastAPI in Containers guide](https://fastapi.tiangolo.com/deployment/docker/) as a reference. It walks you through how to build and run your FastAPI app inside a Docker container.
