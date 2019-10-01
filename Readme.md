# Soccer Academy

- The purpose of this page is to give users information about a soccer academy. With the ability to register for the site, edit the user account, delete the account and see a list of the teams. 

+ This website consists of six pages:
    + Home page.  
    + Login page. 
    + Register a User. 
    + Teams Listing.  
    + Edit a user page 
    + Admin page.

### Features

+ Some features include:

    + List of teams. 
    + Edit member information. 
    
### Audience

- People looking for a place to register their teams.
- Parents looking for a league to register their kids.
- People just looking for a team to join. 

### PostgreSQL Setup

- Crate a PostgreSQL User with the following:
    + username: hca
    + password: password
    
- Migrate DB: 
    + cd server\db
    + node migrate
    + node seed  
### Server setup and start

- Use Node.js/Express back end REST API to manage the data services.
- To start the server use node server.js
- To stop the server use Ctrl+C.    

- Test 
    + run npm start
    + Test using Postman Collection 

### Page Navigation
- Enter http://localhost:4200/  in the browser to navigate to the page.

### Main page of Soccer Academy

![](/client/src/assets/images/indexSnippet.PNG)
![](/client/src/assets/images/indexSnippet2.PNG)
![](/client/src/assets/images/indexSnippet3.PNG)