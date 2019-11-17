![Todo Logo](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsF0w5VbA-DOErgm4BZRuFyOld0O9tqHyLTtvEspnOc0NcaJQk&s)

# TODO APP

### A simple tood App created with ReactJS

## Tech Stack
 - Backend
    - Nodejs
    - ExpressJS
 - Frontend
    - React
    - Redux
    - Redux Thunk
 - Database
    - postgresql
 - Devops
    - Docker

##### Note - 
    - React-props types hasnt been implemented yet.
    - Dependency list can be found in respective package.json files

## How to run

The below command should run the app
````shell
$ node app.js
````

You need to start the database and create following tables. The same can be done with executing .sql files that are stored in  ``database/postgres/``.

Create a Db named todoApi and your user then run the following comand in psql console.
````shell
todoApi= CREATE TABLE buckets(
    id SERIAL PRIMARY KEY,
    name VARCHAR(20),
    created TIMESTAMP DEFAULT now()
);

todoApi= CREATE TABLE todos
(
    id SERIAL PRIMARY KEY,
    name VARCHAR(30),
    status VARCHAR(15),
    bucket INT,
    created TIMESTAMP DEFAULT now(),
    FOREIGN KEY (bucket) REFERENCES buckets(id)
);
# A default bucket needs to be created
todoApi= INSERT INTO buckets (name) VALUES ('default');

````

### Docker
To avoid all these hassle and let docker take care of everything install docker on your machine.

Then Open a terminal and browse to project folder.

Switch to the docker branch of this repo.

````shell
$ docker-compose up --build
````

Docker should take care of everything.

*Thanks For using this app. Feel free to contribute*
