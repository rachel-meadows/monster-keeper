# Monster Keeper

## About

This project started life as a one-day hackathon, where I worked with four other students to plan and build a working MVP in less than 24 hours.

I was the back-end lead for the project. I found it interesting to figure out how to call from an API without CORS support, and then how to handle the image data I received from the API (which comes in the form of a byte array, so needed to be converted to a base64 string).

We built the project in React, but the project was first developed very early in our learning journey - so I would like to simplify and refactor the code at some point. 


## Using this project

I will probably deploy this project to a hosting service such as Heroku in the short-term future.

In the meantime, you can run the site locally using these commands:

```
git clone https://github.com/rachel-meadows/monster-keeper
cd monster-keeper
npm install # to install dependencies
npm run knex migrate:latest # to create the database
npm run knex seed:run # to insert the seed data
npm run dev # to start the dev server
```

The server will then be running on [http://localhost:3000](http://localhost:3000).
