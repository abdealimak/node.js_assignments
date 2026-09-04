# Express.js Basics Assignment

This assignment demonstrates basic Express.js routing concepts using Node.js and Express.js.

## Project Structure

```text
assignment5/
│
├── task1/
│   └── server.js
│
├── task2/
│   └── server.js
│
├── task3/
│   └── server.js
│
├── task4/
│   └── server.js
│
├── task5/
│   └── server.js
│
├── package.json
├── package-lock.json
└── .gitignore
```

## Installation

Make sure Node.js is installed.

Install the required dependencies:

```bash
npm install
```

## How to Run the Tasks

Each task has its own `server.js` file.

### Task 1: Basic Routes

Run:

```bash
node task1/server.js
```

Routes:

```text
GET /
GET /about
GET /contact
```

Sample responses:

```text
Welcome to Home Page
This is About Page
This is Contact Page
```

### Task 2: Route Parameter

Run:

```bash
node task2/server.js
```

Route:

```text
GET /user/:name
```

Example:

```text
GET /user/john
```

Response:

```text
Hello john
```

### Task 3: Multiple Route Parameters

Run:

```bash
node task3/server.js
```

Route:

```text
GET /product/:id/:category
```

Example:

```text
GET /product/101/electronics
```

Response:

```text
Product ID: 101, Category: electronics
```

### Task 4: Query Parameters

Run:

```bash
node task4/server.js
```

Route:

```text
GET /search
```

Example:

```text
GET /search?name=john&role=developer
```

Response:

```text
Name: john, Role: developer
```

Query parameters are accessed using:

```javascript
req.query.name
req.query.role
```

### Task 5: Request-Response Understanding

Run:

```bash
node task5/server.js
```

The server logs the request method and URL in the terminal.

Example requests:

```text
GET /about
GET /user/john
GET /search?name=john
```

Sample terminal output:

```text
GET /about
GET /user/john
GET /search?name=john
```

## Sample Outputs

### Task 1

```text
GET /
Response: Welcome to Home Page

GET /about
Response: This is About Page

GET /contact
Response: This is Contact Page
```

### Task 2

```text
GET /user/john

Response:
Hello john
```

### Task 3

```text
GET /product/101/electronics

Response:
Product ID: 101, Category: electronics
```

### Task 4

```text
GET /search?name=john&role=developer

Response:
Name: john, Role: developer
```

### Task 5

Terminal output:

```text
GET /about
GET /user/john
GET /search?name=john
```

## Concepts Covered

- Express.js server setup
- GET routes
- Basic routing
- Dynamic route parameters
- Multiple route parameters
- Query parameters
- Request method
- Request URL
- Express middleware
- Request-response cycle