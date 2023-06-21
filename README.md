# bearer-auth

## Routes
### `app.use(signUpRouter)`

- **Path:** `/signup`
- **HTTP Method:** POST
- **Description:** This route is used for user sign up. It takes the user's username and password in the request body and creates a new user record in the database. The password is hashed using bcrypt before being stored in the database. The response returns the created user record.

### `app.use(signInRouter)`

- **Path:** `/signin`
- **HTTP Method:** POST
- **Description:** This route is used for user sign in. It requires basic authentication, where the user's username and password are encoded in the `Authorization` header using Base64. The route verifies the credentials by comparing them with the stored user records in the database. If the authentication is successful, it responds with the user information.

### `app.use(secretStuffRouter)`

- **Path:** `/secretstuff`
- **HTTP Method:** GET
- **Description:** This route is used to access secret information. It requires bearer token authentication, where the user includes a valid access token in the `Authorization` header. The route verifies the token by decoding and validating it against the stored user records in the database. If the authentication is successful, it responds with a JSON object containing a message indicating the user can view the secret and the user information.

### `app.get("/")`

- **Path:** `/`
- **HTTP Method:** GET
- **Description:** This route is the home route and is used to display a simple "Hello Home" message. It is accessible without any authentication.

Notes: 
- The authentication middleware (`basic` and `bearer`) mentioned in the routes is implemented in separate middleware files (`basicAuth.js` and `bearerAuth.js`) and is used to handle the authentication logic.
- Also  `signup` folder created alone in src with his route.


## Tests
[Test1](./lab07tests.jpg)
[Test2](./lab07testssignup.jpg)
[Test3](./lab07signin.jpg)
[Test4](./lab07bearer.jpg)

