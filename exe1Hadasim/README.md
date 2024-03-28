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


