This project connects to a local MongoDB server and creates 10 random documents at a time. If any generated combination already exists in the database, the earlier duplicate record is deleted before the new one is inserted.

 Features
>Connects to MongoDB running locally

>Generates and inserts 10 random documents at once

>Ensures uniqueness by deleting existing duplicates

Technologies Used
>Node.js / Python / ejs / html,css,js

>MongoDB (local server)

📋 How It Works
Random documents are generated using a fixed set of fields.

Before inserting each new document, the script checks if a document with the same combination already exists.

If found, the earlier record is deleted, and the new one is added.
