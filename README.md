# Weatherify
A web application that serves detailed weather data to the user through leveraging server side rendering and data visualization. Made with a react frontend and node/express backend.

# Architecture and components
Client (consists of two primary views)
  1. Location Search (geocodes user entry to fetch weather json data).                           
  2. Weather Data (displays weather data through rendering data visualization charts).

Server
  * All data retreival, parsing, validation, is done in the backend via express routes and application-level middleware.
  * Essentially serves as a beacon that responds to RESTful requests from the client (which are then handled by a series of Express middleware functions).
 
# To-do
  - [X] Implement dynamic resizing for client mountable views with Formidable Victory.
  - [X] Allow client to search a new location with client-side hydration.
  - [X] Dockerize
  - [X] Deploy
  - [ ] Implement user creation and authentication with mongo
  - [ ] Save user searched history of weather locations



  
 
  
  
