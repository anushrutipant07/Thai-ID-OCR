For creating a Thai ID OCR application the steps should be :
1. Make a UI to upload the ID card (thai particularly) which contains some specific fields
2. API intergration to the backend 
3. Extracting the data from the uploaded card/image
4. CRUD operations on existing data

Frontend file contains:
Update.jsx for updating the existing records
List.jsx for the styling of list and providing the delete and update operations
Ocr.jsx for the front page 
App.css for the css styling of the front page
App.js for mainly list all records and back  button

In backend the env file contains the credentials for the mongodb account.
The models contains the data type of the information from the ID card
The routes contain the methods for updating, viewing and all the other operations
