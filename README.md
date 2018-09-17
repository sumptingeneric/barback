Project Name
Pithy project description

Team
Product Owner: J.P. Da Prato
Scrum Master: Duke Goulden
Development Team Members: Carlos Astrada, Michael Banzon, Fredrick Lou

Table of Contents
Usage
Requirements
Development
Installing Dependencies
Tasks
Team
Contributing

Usage
1.Start MYSQL/MariaDB
2.In SQL, create database "barback"
3.Create .env file in root directory with the following:

HOST=localhost
PORT=7337

3.NPM Install

- NPM Install will first install dependencies then,
- Postinstall will auto-run
  -Postinstall will perform the following actions
  1. Parcel Build - (webpack alternative to build react dist)
  2. NPM run copy:media - Copies image files into dist folder
  3. NPM run db:setup - Seeds the database with initial data

4. Connect to the front end through http://localhost/1234 (parcel defaults to port 1234)

Requirements
Node >= V8
MYSQL or MariaDb

Development
Installing Dependencies
From within the root directory:

npm install
Roadmap
View the project roadmap here

Contributing
See CONTRIBUTING.md for contribution guidelines.
