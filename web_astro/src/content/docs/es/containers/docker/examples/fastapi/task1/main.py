# docs: https://fastapi.tiangolo.com/
from typing import Union

from fastapi import FastAPI

app = FastAPI()


@app.get("/")
def leer_raiz():
    return {"Hola": "Mundo!"}


@app.get("/items/{item_id}")
def leer_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}
