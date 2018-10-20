# Goonies BarBack #
BarBack is a drink ordering and bar management tool focused on delivering a unique experience for bar owners, staff, and customers.
## Deployed URL link ##
https://goonies-barback.herokuapp.com/
## Team ##
Goonies developers:
Development Team: Ryan Heise, Stephen Zerfas, Nicolas Turner, Joanne Kim, Sarah Silva
Product Owner: Sarah Silva
Scrum Master: Nicolas Turner

Sumtingeneric legacy developers:
Product Owner: J.P. Da Prato
Scrum Master: Duke Goulden
Development Team Members: Carlos Astrada, Michael Banzon, Fredrick Lou

## Usage ##
Live app: https://goonies-barback.herokuapp.com/

Local Host settings:
Start MYSQL/MariaDB
  a. In terminal run: 'mysql.server start'
  b. Then in terminal run: 'mysql -u root -p'
  c. press enter when password is requested
In SQL, create database "barback"
Create .env file in root directory with the following:

HOST=localhost
PORT=7337

NPM Install

- NPM Install will first install dependencies then,
- Postinstall will auto-run
  -Postinstall will perform the following actions
  1. Parcel Build - (webpack alternative to build react dist)
  2. NPM run copy:media - Copies image files into dist folder

Connect to the front end through http://localhost/7337

Requirements
Node >= V8
MYSQL or MariaDb

Contributing
See CONTRIBUTING.md for contribution guidelines.
