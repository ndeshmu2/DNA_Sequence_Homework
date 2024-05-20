### DNA Homework Documentation

  

## Project Overview

This project validates DNA sequences through a web interface using Vue.js for the frontend and Node.js with ActionHero for the backend.

  

### Prerequisites

- [Node.js](https://nodejs.org/en/download/) (version 20 )

- [npm](https://www.npmjs.com/get-npm) (typically comes with Node.js)

  
  

## Installation Instructions

### Setting Up and Running the frontend

  

Navigate to the frontend directory and install the necessary dependencies. Then start the development server:

  
  

```bash

cd  frontend

npm  install

npm  run  dev
```
  
  

Access  the  application  by  opening  `http://localhost:3000` in your web browser (replace  `3000`  with  your  configured  port  if  different).

  
  

### Setting Up and Running the backend

  

Navigate  to  backend

```bash

cd backend

  

npm install

  

Install redis and enable / start it -:

https://redis.io/docs/latest/operate/oss_and_stack/install/install-redis/

  

npm run serve

```

  

The backend API is now running and can process requests from the frontend.

  
  

### Unit Test

  

To run the frontend tests, ensure you are in the frontend directory and then execute the following command:

  

```bash

npx  jest
```

  
  

### Additional Information

  

Frontend  Technologies:  Vue.js,  Vite,  TailwindCSS

Backend  Technologies:  Node.js,  ActionHero,  Redis (for session  storage)

Testing  Frameworks:  Jest (for both  frontend  and  backend  tests)