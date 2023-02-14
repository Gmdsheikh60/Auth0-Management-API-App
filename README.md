# Auth0 Management API App
This repository contains a sample application that demonstrates how to use the Auth0 Management API to manage user accounts, roles, and permissions in an Auth0 tenant.

## Prerequisites
To run this app, you will need the following:

## An Auth0 account
- An Auth0 API token with the `read:users`, `update:users`, `create:users`, `delete:users` and `read:roles scopes`.
## Setting Up the Application
1. Clone this repository:  

`git clone https://github.com/Gmdsheikh60/Auth0-Management-API-App.git` 

2. Install the dependencies:  

`npm install`  

3. Rename the .env.example file to .env and set the values for the following environment variables:

- `AUTH0_DOMAIN:` Your Auth0 tenant domain.  
- `AUTH0_AUDIENCE:` The identifier of your Auth0 API.  
- `AUTH0_CLIENT_ID:` The client ID of the client that will call the API.  
- `AUTH0_CLIENT_SECRET:` The client secret of the client that will call the API.  
- `AUTH0_ACCESS_TOKEN:` A valid Auth0 API token with the necessary scopes.  
## Running the Application 

To run the application, simply execute the following command:  

 `npm start`  

The app will be running at http://localhost:3000.

## Contributing
This app is open source, and contributions are welcome! If you find a bug or have an idea for a new feature, please open an issue or a pull request.

## Author
Gmdsheikh60

## License
This project is licensed under GNU General Public License License - see the LICENSE.md file for details


