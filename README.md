# Wardrobify

Team:

- Ryan Paschen - Shoes
- Person 2 - Which microservice?

## Design

React / Bootstrap
Django / PostgreSQL

## Shoes microservice

Created a Shoe model to store:

- Manufacturer
- Model
- Color
- Optional Picture
- Stored BIN (fetched from Wardrobe API)

## REST API Design

| HTTP Method | Path            | Description                    |
| ----------- | --------------- | ------------------------------ |
| GET         | /api/shoes      | Get a list of all stored shoes |
| GET         | /api/shoes/{id} | Get a single shoe by ID        |
| POST        | /api/shoes      | Add a new shoe to database     |
| PUT         | /api/shoes{id}  | Update an existing shoe        |
| DELETE      | /api/shoes/{id} | Delete a shoe by it's ID       |

## Hats microservice

Explain your models and integration with the wardrobe
microservice, here.
