# Assignment 7 --- Route Parameters & Query Parameters

## Overview

This assignment demonstrates dynamic routing in Express.js using **Route
Parameters** and **Query Parameters**.

The assignment is divided into three independent tasks:

-   **Task 1:** Route Parameters
-   **Task 2:** Query Parameters
-   **Task 3:** Route Parameters + Query Parameters

Each task is maintained in a separate folder with its own Express.js
setup.

------------------------------------------------------------------------

## Folder Structure

``` text
assignment7/
│
├── task1/
│   ├── package-lock.json
│   ├── package.json
│   └── server.js
│
├── task2/
│   ├── package-lock.json
│   ├── package.json
│   └── server.js
│
├── task3/
│   ├── package-lock.json
│   ├── package.json
│   └── server.js
│
└── README.md
```

> The `package.json` and `package-lock.json` files are sufficient to reinstall the dependencies.

------------------------------------------------------------------------

# Task 1 --- Route Parameters

## Objective

Implement dynamic routing using **Route Parameters** in Express.js.

## Requirements

-   Create the route `/student/:id`.
-   Extract the student ID using route parameters.
-   Display the student ID in the browser.
-   The application should work for different student IDs dynamically.

## Route

``` text
/student/:id
```

Here, `:id` is a dynamic route parameter.

## Concept Used

### Route Parameters

Route parameters are values embedded directly in the URL path.

Example:

``` text
/student/101
```

The value `101` is available through:

``` js
req.params.id
```

## Expected Output

### URL

``` text
http://localhost:3000/student/101
```

### Browser

``` text
Student ID: 101
```

### Another Example

URL:

``` text
http://localhost:3000/student/205
```

Browser:

``` text
Student ID: 205
```

## Concepts Covered

-   Express.js routing
-   Dynamic routes
-   Route parameters
-   `req.params`
-   Accessing a specific route parameter
-   Sending a response using `res.send()`

------------------------------------------------------------------------

# Task 2 --- Query Parameters

## Objective

Retrieve and display data using **Query Parameters**.

## Requirements

-   Create the route `/search`.
-   Accept the following query parameters:
    -   `name`
    -   `course`
-   Display both values in the browser.
-   If no query parameters are provided, display:
    -   `No search data provided.`

## Route

``` text
/search
```

## Concept Used

### Query Parameters

Query parameters are values provided after `?` in a URL.

Example:

``` text
/search?name=Ricky&course=Node.js
```

The values can be accessed using:

``` js
req.query.name
req.query.course
```

## Expected Output

### URL

``` text
http://localhost:3000/search?name=Ricky&course=Node.js
```

### Browser

``` text
Name: Ricky
Course: Node.js
```

### Without Query Parameters

URL:

``` text
http://localhost:3000/search
```

Browser:

``` text
No search data provided.
```

## Concepts Covered

-   Express.js routing
-   Query parameters
-   `req.query`
-   Reading multiple query parameters
-   Conditional checking
-   `res.send()`
-   Handling requests when query data is missing

------------------------------------------------------------------------

# Task 3 --- Route Parameters + Query Parameters

## Objective

Build a dynamic route that uses both **Route Parameters** and **Query
Parameters**.

## Requirements

-   Create the route `/student/:id`.
-   Retrieve the student ID using route parameters.
-   Accept the following query parameters:
    -   `name`
    -   `course`
-   Display all student details in the browser.

## Route

``` text
/student/:id
```

## Example URL

``` text
http://localhost:3000/student/101?name=John&course=FullStack
```

This URL contains both:

-   Route parameter → `101`
-   Query parameters → `name=John` and `course=FullStack`

## How the Parameters Are Retrieved

### Route Parameter

``` js
req.params.id
```

### Query Parameters

``` js
req.query.name
req.query.course
```

## Expected Output

### URL

``` text
http://localhost:3000/student/101?name=John&course=FullStack
```

### Browser

``` text
Student ID: 101
Name: John
Course: FullStack
```

## Concepts Covered

-   Express.js routing
-   Dynamic routing
-   Route parameters
-   `req.params`
-   Query parameters
-   `req.query`
-   Using route and query parameters together
-   Sending dynamic responses with `res.send()`

------------------------------------------------------------------------

# Installation

Each task is an independent Express.js application.

If dependencies have not already been installed, open a terminal inside
the respective task folder and run:

``` bash
npm install
```

If setting up a task from scratch:

``` bash
npm init -y
npm install express
```

------------------------------------------------------------------------

# Running the Applications

Only one task should be running on port `3000` at a time.

## Task 1

``` bash
cd task1
node server.js
```

Open:

``` text
http://localhost:3000/student/101
```

------------------------------------------------------------------------

## Task 2

Stop Task 1 using:

``` text
Ctrl + C
```

Then:

``` bash
cd ../task2
node server.js
```

Open:

``` text
http://localhost:3000/search?name=Ricky&course=Node.js
```

------------------------------------------------------------------------

## Task 3

Stop Task 2 using:

``` text
Ctrl + C
```

Then:

``` bash
cd ../task3
node server.js
```

Open:

``` text
http://localhost:3000/student/101?name=John&course=FullStack
```

------------------------------------------------------------------------

# Key Difference: Route Parameters vs Query Parameters

## Route Parameter

``` text
/student/101
```

The `101` is part of the URL path.

It is accessed using:

``` js
req.params.id
```

## Query Parameter

``` text
/search?name=Ricky&course=Node.js
```

The values appear after `?`.

They are accessed using:

``` js
req.query.name
req.query.course
```

## Using Both

``` text
/student/101?name=John&course=FullStack
```

Here:

``` text
101
```

is the route parameter, while:

``` text
name=John
course=FullStack
```

are query parameters.

------------------------------------------------------------------------

# Assignment Rubric

The implementation addresses the provided 10-mark rubric:

  Criteria                                                    Marks
  -------------------------------------------------- --------------
  Correct implementation of dynamic routes/queries                3
  Proper use of `req.params` and/or `req.query`                   2
  Correct functionality and expected output                       2
  Code quality, formatting, and readability                       2
  Successful execution without errors                             1
  **Total**                                            **10 Marks**

------------------------------------------------------------------------

# Technologies Used

-   **Node.js**
-   **Express.js**
-   JavaScript
-   npm

------------------------------------------------------------------------

# Conclusion

This assignment demonstrates how Express.js handles dynamic data through
URL paths and query strings.

The three tasks progressively demonstrate:

1.  Using `req.params` for route parameters.
2.  Using `req.query` for query parameters.
3.  Combining `req.params` and `req.query` in a single route.
