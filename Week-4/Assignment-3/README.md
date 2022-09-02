# Assignment 3: Build a Website with MySQL

You already have experience in building an HTTP server by Node.js and Express. Now, it’s time to add a MySQL database server to your website for a simple member sign-up and sign-in feature.

1. Build a simple HTTP server by Node.js and Express as usual.
2. Setup  
   a. Install MySQL server in your computer (version 8.x is recommended).  
   b. Create a database named assignment.  
   c. Create a user table named user.  
   d. The user table should contain at least 3 columns: id, email, password.  
   e. Column id should be a primary key and increase automatically.
3. Try connecting to MySQL server from your HTTP server by mysql2 module.
4. Provide a home page, including sign-up and sign-in forms, for people to take action.  
   a. When people submit the sign-up form, you should add a new row in the user  
   table if the same email wasn’t registered before.  
   b. When people submit the sign-in form, you should check if the pair of email and passwords match any existing row in the user table.
5. If people sign-up or sign-in successfully, redirect them to a member page including any simple welcome message. Done.
6. If people failed to sign-up or sign-in, just keep them in home page with a proper wrong message. Done.  
   Reminder: In this assignment, you should hand in an additional data file in SQL format by mysqldump tool.
