# EventAdministrationApp

## Regarding the design decisions

### Library choices

[Angular](https://angular.io/) was chosen because it is a popular framework and because there was previous experience with it.

[Angular ESLint](https://github.com/angular-eslint/angular-eslint) is used because a default linter is no longed included in Angular. The usage of the mentioned package is suggested because it contains all the necessary configurations and boileplate changes that need to be done.

[Prettier](https://prettier.io) was used so that code formatting is consistent and in line with the conventions used by the community.

[Jest](https://jestjs.io/) was used as I had previous experience with it and it is more performant than the defaults.

[Supertest](https://github.com/visionmedia/supertest) was used to make the testing of the endpoints easier.

[Cypress](https://www.cypress.io/) is a popular end to end testing framework and was installed so that we can write e2e tests which are a very useful for testing properly the app.

[Angular Material](https://material.angular.io/) was selected because it provides an easy way to style your applications and a lot of components out of the box.

[Express](https://expressjs.com/) is the most popular framework for writing back-end apps in Node.js and I have used it before also so it was an obvious choice.

[MongoDB](https://www.mongodb.com/) was used just based on popularity as there was no experience at all with NoSQL databases.

[Docker](https://www.docker.com/) containers are provided as an easy way to run the app in an isolated way.

### Design

Both the client and the server were developed in the same repository and some libraries were reused in both of them.

The data for each event are limited, as the focus was not showing the complete data model.

Docker containers were utilized for serving the server and the client as well as mongodb. Two containers are enough this, one with node and one with mongodb.  
A dockerfile was written that facilitates file copying and npm installation. Several docker compose files are provided:

* __docker-compose.yml:__ Creates client production build.
* __docker-compose.dev.yml__ Creates a dev environment which supports hot reloading.
* __docker-compose.db.yml__ Runs a MongoDB database.

#### Server

The database configuration exists in db.ts. At the moment it leaks database user credential data which would normally exist on docker. It is done only for the sake of easier local development and taking into consideration the demo nature of the app.

There are separate folders for the models, the controllers and the routes.  
The routes are validated with express-validation middlewares.  
The returned data is transformed to prevent some mongodb data to be returned to the client.  
Error codes are returned when the request either has missing data or the resource doesn't exist.

An extensive test suite was not written due to time constraints. A demo test was written to showcase the libraries.

#### Client

The main structure of the app contains a navigation bar on the top of the page and the rest of the components are displayed at the rest of the page.

For the layout Angular Flex-Layout was used for the flexbox utilities it provides.

A simple visual structure was chosen for the event list. The event details and the creation of the new event is opened in a angular material dialog which contains a reactive form. Form submission is done conditionally based on whether the form data has been changed or not.

The event data are loaded using resolvers. The data are passed around the components through child relationships, routes and the dialog utilities provided by the material dialog component.

No new tests were written due to time restrictions. The current tests were fixed to work with all the modifications done.

## How to run the app

There are several ways to run the app locally(number 3 is suggested).

1. Run `docker-compose -f docker-compose.yml up`. The app is listening at `http://localhost:3000`.
2. Run `docker-compose -f docker-compose.yml -f docker-compose.dev.yml up` for a build that watches for file changes. The app is listening at `http://localhost:4200`.
3. Local dev build. Less strain on the system resources.

    * Run `npm install`
    * Run `docker-compose -f docker-compose.db.yml up` to run the mongodb database in docker. In case you don't have docker installed you need to manually install mongodb and insert 3 documents with the data found in `mongo-init.js`.
    * Run `npm run dev`
    * The app is listening at `http://localhost:4200`

## Running the tests

The tests can only be run locally, so you have to run `npm install` before running the the tests.

Run `npm run test` to execute the tests both for the client and the server. Run `npm run test:client` or `npm run test:server` to run either the client or the server tests.

Run `npm run test:e2e` to execute the end-to-end tests.
