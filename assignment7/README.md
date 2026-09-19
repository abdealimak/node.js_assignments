# Assignment 7 — Express.js Routing

This assignment demonstrates routing in Express.js using **Route Parameters** and **Query Parameters**.

## Project Structure

```text
assignment7/
│
├── task1/
│   ├── package.json
│   └── server.js
│
├── task2/
│   ├── package.json
│   └── server.js
│
├── task3/
│   ├── package.json
│   └── server.js
│
└── README.md
```

## Task 1 — Route Parameters

### Objective

Implement dynamic routing using Route Parameters in Express.js.

### Route

```text
/student/:id
```

The student ID is retrieved using:

```js
req.params.id
```

### Example

URL:

```text
http://localhost:3000/student/101
```

Output:

```text
Student ID: 101
```

Another example:

```text
http://localhost:3000/student/205
```

Output:

```text
Student ID: 205
```

### Concept Used

* Dynamic Routes
* Route Parameters
* `req.params`
* Express Routing

---

## Task 2 — Query Parameters

### Objective

Retrieve and display data using Query Parameters.

### Route

```text
/search
```

The application accepts:

* `name`
* `course`

The values are retrieved using:

```js
req.query.name
req.query.course
```

### Example

URL:

```text
http://localhost:3000/search?name=Ricky&course=Node.js
```

Output:

```text
Name: Ricky
Course: Node.js
```

If no query parameters are provided:

```text
http://localhost:3000/search
```

Output:

```text
No search data provided.
```

### Concept Used

* Query Parameters
* `req.query`
* Express Routing

---

## Task 3 — Route Parameters & Query Parameters

### Objective

Build a dynamic route using both Route Parameters and Query Parameters.

### Route

```text
/student/:id
```

The application uses:

```js
req.params.id
```

to retrieve the student ID and:

```js
req.query.name
req.query.course
```

to retrieve the student's name and course.

### Example

URL:

```text
http://localhost:3000/student/101?name=John&course=FullStack
```

Output:

```text
Student ID: 101
Name: John
Course: FullStack
```

### Concepts Used

* Route Parameters
* Query Parameters
* `req.params`
* `req.query`
* Dynamic Routing
* Express.js Routing

---

## How to Run

Each task is a separate Express.js project.

### Task 1

```bash
cd task1
node server.js
```

Then open:

```text
http://localhost:3000/student/101
```

### Task 2

Stop the previous server using:

```text
Ctrl + C
```

Then:

```bash
cd task2
node server.js
```

Open:

```text
http://localhost:3000/search?name=Ricky&course=Node.js
```

### Task 3

Stop the previous server using:

```text
Ctrl + C
```

Then:

```bash
cd task3
node server.js
```

Open:

```text
http://localhost:3000/student/101?name=John&course=FullStack
```

## Requirements

* Node.js
* Express.js

Express is installed separately inside each task folder using:

```bash
npm install express
```

## Assignment Topics

| Task   | Topic            | Express Feature            |
| ------ | ---------------- | -------------------------- |
| Task 1 | Route Parameters | `req.params`               |
| Task 2 | Query Parameters | `req.query`                |
| Task 3 | Both Parameters  | `req.params` + `req.query` |