# People Management System API

The People Management System API is a web application that provides endpoints to manage a list of people through CRUD (Create, Read, Update, Delete) operations. It also includes an authentication system for secure access to certain routes. This API is built using Node.js and Express.js.

## Table of Contents

- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Authentication](#authentication)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Installation

1. Clone this repository to your local machine.

git clone https://github.com/your-username/people-management-system-api.git

2. Install the required dependencies.

cd people-management-system-api

npm install


### Usage

To start the API server, use the following command:

npm start


The API will be running on `http://localhost:5000` by default.

## API Endpoints

- `GET /api/people`: Fetches the list of all people.
- `POST /api/people`: Creates a new person with the provided name.
- `POST /api/people/postman`: Alternative endpoint for creating a new person using JSON data.
- `PUT /api/people/:id`: Updates the name of a specific person with the provided ID.
- `DELETE /api/people/:id`: Deletes a specific person with the provided ID.

## Authentication

The API provides an authentication endpoint for user login:

- `POST /login`: Accepts a JSON body with user credentials (e.g., username and password) and returns a welcome message if the login is successful. If the credentials are incorrect or missing, it returns an error message.

Please note that this is a basic demonstration of authentication and should be enhanced with proper security measures (e.g., JWT, hashing, etc.) in a production environment.

## Contributing

Contributions are welcome! If you find any issues or want to suggest improvements, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License 
