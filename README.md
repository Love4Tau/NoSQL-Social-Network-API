
  # NoSQL-Social-Network-API

  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

  ## Description
  In this project, I learned how to use mongoose to create a social network API. After this project, I would choose to use mongoose over SQL, haha! I ran into an issue where my routes were correct but I still could get insomnia to find my server. Shoutout to my teacher, Robbert Wijtman. He helped me figure out the problem - my server.js file did not have the right route in the app.use routes function. I forgot to write it like this: app.use("/api", routes). My api routes did not have an index.js file importing and exporting both routes, so doing this fixed my issue!

  User Story

  AS A social media startup<br>
  I WANT an API for my social network that uses a NoSQL database<br>
  SO THAT my website can handle large amounts of unstructured data

  Acceptance Criteria

  GIVEN a social network API<br>
  WHEN I enter the command to invoke the application<br>
  THEN my server is started and the Mongoose models are synced to the MongoDB database<br>
  WHEN I open API GET routes in Insomnia for users and thoughts<br>
  THEN the data for each of these routes is displayed in a formatted JSON<br>
  WHEN I test API POST, PUT, and DELETE routes in Insomnia<br>
  THEN I am able to successfully create, update, and delete users and thoughts in my database<br>
  WHEN I test API POST and DELETE routes in Insomnia<br>
  THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Tests](#tests)
  - [Contact Information](#questions)

  ## Installation
  1) Git clone repo 
  2) Run "npm install" 
  3) Run "npm start"

  ## Usage

  [Walk-Through Video Link](https://www.loom.com/share/bf4effbd67e9452fb691f9db4cde5b08?sid=a1396ead-8750-4322-b555-3804df2da2ff)

  ## Credits

  Robbert Wijtman - My bootcamp instructor<br>
  https://www.youtube.com/watch?v=_ST946yIFSw<br>
  https://www.youtube.com/watch?v=E1w9kthC4YQ

  I ran into syntax errors - I used the Xpert AI tool for assistance with fixing those and I also asked my intructor for some assistance 

  ## License
  
  This project is licensed under MIT License.

  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  https://opensource.org/licenses/MIT
  

  ## Tests
  No tests

  ## Questions
  If you had any questions, please feel free to contact me at lovelytau650@gmail.com.
  Here is my GitHub profile link https://github.com/Love4Tau/NoSQL-Social-Network-API

  