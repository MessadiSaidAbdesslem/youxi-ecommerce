# YOUXI E-COMMERCE

our website made with :node.js, bootstraps, html, css, express, mongoose, mongoDB.

# Configuration

create a file named config.env at the project's root containing the following
```
NODE_ENV=production
PORT=8000
DATABASE_PASSWORD=*MONGODB password*
DATABASE=mongodb+srv://admin:<PASSWORD>@DATABASELINK/DATABASENAME?retryWrites=true&w=majority
JWT_EXPIRES_IN=90d *JWT EXPIRATION TIME*
JWT_COOKIE_EXPIRES_IN=90 *JWT EXPIRATION TIME*
JWT_SECRET=*YOUR SECRET*

EMAIL_USERNAME= *EMAIL*
EMAIL_PASSWORD= *EMAIL PASSWORD*
EMAIL_HOST=*MAIL HOST SERVER*
EMAIL_PORT= *MAIL SERVICE PORT*

RESET_TOKEN_TIMER= *RESET TOKEN TIME IN MINUTES* ex: 10

HOST_LINK=*WEBSITE LINK*
```
