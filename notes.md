npm- Node package Managerm cab nabage packages that are local dependencies of a particular project.

npm start - this command looks into the root directory of our project, and looks for the scripts object. If it finds it, it will look for the matching keyword(in this case, it's "start") then runs the following command script.

npm dev - Indicates that we are running our project in development mode and that we are use 'nodemon' to do that. Nodemon allows us to make changes to our server without having to restart it manually every time we make a change.

node_modules -  packages that npm installs that allow our application and all of its dependencies to run properly.

package-lock.json - simply locks in the version of the packages that we're using in a specific project. We get this file so that anyone who colones our project and tries to run it will have the exact same versions of the packages that we use.

MVC - Model View Controller

Express - A framework used to help us organize our server into MVC architecture.

ORM - (Object Relational Mapping) 
- Code library that automates the transfer of data in a database, into objects are more commonly used in applications(like JSON)

.env - Environment
- allows us to set up variables that we can use inside of our code

Sequelize - a JS library that we'll use to manage our postgreSQL databases. (npm install sequelize)

Models - how we shape the data that we'll be sending to our databases.

Pg - a package that allows us to write in the dialect that sequelize needs to speak to our PostgreSQL database (npm i pg pg-hstore)

Pg-hstore - a package that allows us to access more advanced and complex pieces of code regarding PostgreSQL

pgAdmin - is a GUI (Graphic User Interface, pretty much a front-end client) that allows us to visualize our PostgreSQL database. pgAdmin is one of many GUIs that interface with PostgreSQL.

pgAdmin and PostgreSQL are not the same thing. PostgreSQL is a database engine implementing SQL standards.

pgAdmin is a sort of client. You are able to manipulate schema and data on an instance or multiple instances of PostgreSQL engines.

bcrypt - used to encrypt sensitive data such as user passwords (npm i bcryptjs)

jwt - used to create sessions (npm i jsonwebtoken)