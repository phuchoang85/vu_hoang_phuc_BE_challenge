# User Management API

## Description

This is a User Management API built with Express.js and TypeScript, using MongoDB as the database. The API provides endpoints for creating, retrieving, updating, and deleting user records.

## Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or later)
- [MongoDB](https://www.mongodb.com/)

### Environment Variables

Create a `.env` file in the root directory and configure the following variables:

```
PORT=5000
MONGO_URI=mongodb://localhost:27017/user_management
```

## Installation

Install dependencies using npm:

```sh
npm install
```

## Running the Application

### Development Mode

To start the application in development mode:

```sh
npm run dev
```

### Production Mode

To build and start the application in production mode:

```sh
npm run build
npm start
```

## Run Tests

To run tests:

```sh
npm test
```

## API Endpoints

### User Endpoints

- **Get all users**: `GET /api/users`
- **Get user by ID**: `GET /api/users/:id`
- **Create a new user**: `POST /api/users`
- **Update a user**: `PUT /api/users/:id`
- **Delete a user**: `DELETE /api/users/:id`

