# Wardrobify

Team:

- Ryan Paschen - Shoes
- Daniel Zambrana - Hats

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

# Shoes REST API Design

| HTTP Method | Path            | Description                    |
| ----------- | --------------- | ------------------------------ |
| GET         | /api/shoes      | Get a list of all stored shoes |
| GET         | /api/shoes/{id} | Get a single shoe by ID        |
| POST        | /api/shoes      | Add a new shoe to database     |
| PUT         | /api/shoes{id}  | Update an existing shoe        |
| DELETE      | /api/shoes/{id} | Delete a shoe by it's ID       |

## Hats microservice

Created a Hat model to store:

-Fabric
-Style Name
-Color
-Picture URL
-Location

## Hats REST API Design

HTTP Method     Path           Description

-GET           /api/hats       Get a list of all hats
-GET           /api/hats/{id}  Get a single hat with ID
-POST          /api/hats       Add a new hat to database
-PUT           /api/hats{id}   Update an existing hat
-DELETE        /api/hats{id}   Delete a hat by ID
