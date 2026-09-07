# Assignment 6 — Express Middleware

## Overview

This assignment contains three separate Express.js applications demonstrating different types of middleware.

### Tasks

- Task 1 — Router-Level Middleware
- Task 2 — Request Logger Middleware
- Task 3 — Response Time Middleware

Each task is implemented in a separate folder and can be executed independently.

## Technologies Used

- Node.js
- Express.js
- JavaScript

## Project Structure

    Assignment6/
    │
    ├── task1/
    │   ├── server.js
    │   ├── router.js
    │   ├── package.json
    │   └── package-lock.json
    │
    ├── task2/
    │   ├── server.js
    │   ├── package.json
    │   └── package-lock.json
    │
    ├── task3/
    │   ├── server.js
    │   ├── package.json
    │   └── package-lock.json
    │
    └── README.md

# Task 1 — Router-Level Middleware

## Objective

Implement router-level middleware using Express Router.

## Description

A separate Express Router is created with a custom middleware named `routerLogger`.

The middleware logs the following information for every request received by the router:

- HTTP Method
- Request URL
- Current Date & Time

The router contains the following routes:

- `/students`
- `/courses`
- `/faculty`

The router is mounted using `/api`.

The middleware is applied only to routes inside the router.

## Routes

| Method | URL | Response |
|---|---|---|
| GET | `/api/students` | Students List |
| GET | `/api/courses` | Courses List |
| GET | `/api/faculty` | Faculty List |

## Expected Terminal Output

    GET /api/students 2026-09-07 23:15:20
    GET /api/courses 2026-09-07 23:15:25
    GET /api/faculty 2026-09-07 23:15:30

The date and time will change according to when the requests are made.

## Expected Browser Output

### `/api/students`

    Students List

### `/api/courses`

    Courses List

### `/api/faculty`

    Faculty List

## Concepts Covered

- Express Router
- Router-Level Middleware
- `router.use()`
- `req.method`
- `req.url`
- `next()`

# Task 2 — Request Logger Middleware

## Objective

Create a custom middleware that logs every incoming request.

## Description

A custom middleware named `logger` is created to log information about every incoming request.

The middleware logs:

- HTTP Method
- Request URL
- Current Date & Time

The middleware is registered globally using `app.use()` and executes before every route.

The following routes are created:

- `/`
- `/about`
- `/contact`

## Routes

| Method | URL | Response |
|---|---|---|
| GET | `/` | Welcome to Home Page |
| GET | `/about` | About Us |
| GET | `/contact` | Contact Information |

## Expected Terminal Output

    GET / 2026-09-07 23:20:10
    GET /about 2026-09-07 23:20:15
    GET /contact 2026-09-07 23:20:20

The date and time will change according to when the requests are made.

## Expected Browser Output

### `/`

    Welcome to Home Page

### `/about`

    About Us

### `/contact`

    Contact Information

## Concepts Covered

- Global Middleware
- `app.use()`
- `req.method`
- `req.url`
- `next()`

# Task 3 — Response Time Middleware

## Objective

Measure the time taken to process each request using middleware.

## Description

A custom middleware named `responseTimeLogger` is created.

The middleware:

1. Records the request start time using `Date.now()`.
2. Calls `next()` to continue the request lifecycle.
3. Calculates the response processing time.
4. Displays the HTTP method, request URL, and response time in milliseconds in the terminal.

The following routes are created:

- `/`
- `/products`
- `/users`

## Routes

| Method | URL | Response |
|---|---|---|
| GET | `/` | Home Page |
| GET | `/products` | Product List |
| GET | `/users` | User List |

## Expected Terminal Output

    GET / - 4 ms
    GET /products - 6 ms
    GET /users - 3 ms

The exact response time will vary depending on the system and request.

## Expected Browser Output

### `/`

    Home Page

### `/products`

    Product List

### `/users`

    User List

## Concepts Covered

- Custom Middleware
- Request Lifecycle
- Response Time Measurement
- `Date.now()`
- `next()`

# Installation

Each task is an independent Express.js application.

## Task 1

Navigate to the Task 1 folder and install the dependencies:

    cd task1
    npm install

## Task 2

Navigate to the Task 2 folder and install the dependencies:

    cd task2
    npm install

## Task 3

Navigate to the Task 3 folder and install the dependencies:

    cd task3
    npm install

# Running the Applications

All three tasks use port `3000`.

Therefore, run the tasks one at a time.

## Running Task 1

    cd task1
    npm start

Open the following URLs in a browser:

    http://localhost:3000/api/students
    http://localhost:3000/api/courses
    http://localhost:3000/api/faculty

After testing Task 1, stop the server using:

    Ctrl + C

## Running Task 2

    cd task2
    npm start

Open the following URLs in a browser:

    http://localhost:3000/
    http://localhost:3000/about
    http://localhost:3000/contact

After testing Task 2, stop the server using:

    Ctrl + C

## Running Task 3

    cd task3
    npm start

Open the following URLs in a browser:

    http://localhost:3000/
    http://localhost:3000/products
    http://localhost:3000/users

After testing Task 3, stop the server using:

    Ctrl + C

# Middleware Flow

## Task 1

    Request
       ↓
    /api Router
       ↓
    routerLogger
       ↓
    next()
       ↓
    Route Handler
       ↓
    Response

## Task 2

    Request
       ↓
    logger
       ↓
    next()
       ↓
    Route Handler
       ↓
    Response

## Task 3

    Request
       ↓
    responseTimeLogger
       ↓
    Record Start Time
       ↓
    next()
       ↓
    Route Handler
       ↓
    Calculate Response Time
       ↓
    Terminal Output

# Assignment Requirements Covered

## Task 1

- Separate Express Router
- Custom router-level middleware named `routerLogger`
- HTTP method logging
- Request URL logging
- Date and time logging
- `/students` route
- `/courses` route
- `/faculty` route
- Router mounted using `/api`
- Middleware executes only for routes inside the router
- Correct use of `next()`

## Task 2

- Custom middleware named `logger`
- HTTP method logging
- Request URL logging
- Date and time logging
- `/` route
- `/about` route
- `/contact` route
- Global middleware using `app.use()`
- Middleware executes before routes
- Correct use of `next()`

## Task 3

- Custom middleware named `responseTimeLogger`
- Request start time recorded using `Date.now()`
- Response time calculation in milliseconds
- HTTP method logging
- Request URL logging
- `/` route
- `/products` route
- `/users` route
- Correct use of `next()`

# Conclusion

This assignment demonstrates the implementation and usage of Express.js middleware at different levels:

- Router-level middleware for specific router routes
- Global middleware for application routes
- Custom middleware for measuring request processing time

Each task is implemented independently and follows the requirements specified in the assignment.
