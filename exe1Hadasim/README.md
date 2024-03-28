# Hadasim

# HMO System

A system that provides information services about members of an HMO.

## How to use the site?

#### Welcome to the site:
![welcome](./screenShot/screenShot1.png)
#### View user information:
![user information](./screenShot/screenShot2.png)
#### Edit user information:
![edit user information](./screenShot/screenShot3.png)
##### Adding a vaccination receiving to a member:
![add vaccination receiving](./screenShot/screenShot4.png)
##### Add a vaccine:
![Add a vaccine](./screenShot/screenShot5.png)
##### It has been added!
![vaccine](./screenShot/screenShot6.png)
##### Add illness to a friend
![add illness](./screenShot/screenShot7.png)
#### It has been added!
![illness](./screenShot/screenShot.8.png)
Add a new member:
![Add a new member](./screenShot/screenShot9.png)
It has been added!
![new member](./screenShot/screenShot10.png)

## Built With
React ,
node.js ,
MySql.

## Run Locally

Clone the project

```bash
git clone https://github.com/SariSafra/Hadasim/tree/main/exe1Hadasim
```
#
Run the "createTables" file in your database that is located in the "mysql" folder.
#
Change the configuration file according to the port on which you are running the server and also the details about the database.
#

Go to the server directory:

```bash
cd server
```

Install dependencies:

```bash
npm -v
  ```
```bash
npm i nodemon
  ```  
  ```bash
npm i mysql2
  ```
```bash
npm install express
  ```
  ```bash
npm install cors
  ```
Start the server

```bash
npm run startSever
```

Change in the client configuration file in Tools the port where your server is located.

Go to the client directory:
```bash
cd client
  ```
  ```bash
npm install  react-router-dom
  ```
Start the client:

  ```bash
npm run dev
  ```

# API architecture:
1.Separation of Concerns: Ensure that each module has a single responsibility. It's good that you already have controllers, services, and routers separated, but you can further improve this by ensuring that each component focuses on its specific task.

2.Error Handling Middleware: Implement a centralized error handling middleware to catch errors and handle them uniformly across your application. This can simplify error management and make error responses consistent.

3.Validation Middleware: Use middleware for request validation to ensure that incoming data meets the expected format and constraints. This can help prevent malformed requests from reaching your controllers and services.

4.Authentication and Authorization: Implement authentication and authorization mechanisms to secure your API endpoints. This can involve using JSON Web Tokens (JWT) for authentication and role-based access control (RBAC) for authorization.

5.Swagger Documentation: Consider integrating Swagger or a similar tool for API documentation. This can automatically generate documentation based on your code and make it easier for developers to understand and consume your API.

7.Dependency Injection: Consider using a dependency injection (DI) framework or pattern to manage dependencies between your components. This can improve modularity and testability by decoupling components and making them easier to replace or mock in tests.

