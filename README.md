# number-classification-apiNumber Classification API

Welcome to the Number Classification API, a simple yet powerful tool to classify numbers based on their mathematical properties and provide fun facts. This API was built using Express.js and deployed on AWS Elastic Beanstalk for public access. 🚀

Project Description
This API allows users to send a number as a query parameter and get a JSON response with:

Whether the number is an Armstrong number.
If it's odd or even.
The sum of its digits.
A fun fact fetched from the Numbers API.
It's designed to handle input validation, return appropriate HTTP responses, and ensure fast performance for seamless integration into any application.

Features
🚀 Publicly accessible via a deployed endpoint.
🌐 Handles CORS for cross-origin requests.
🧮 Returns well-structured JSON responses.
💾 Lightweight and scalable with clean code organization.
Installation Instructions

1. Clone the Repository
   bash
   Copy
   git clone https://github.com/hartharney/number-classification-api.git
   cd number-classification-api
2. Install Dependencies
   bash
   Copy
   npm install
3. Set Up Environment Variables
   Create a .env file in the root directory and add the following (if needed for customization):

ini
Copy
PORT=3000 4. Run the Application
Start the server locally:

bash
Copy
npm start
The API will be accessible at http://localhost:3000.

5. Deploy to AWS (Optional)
   Install the AWS CLI and Elastic Beanstalk CLI.
   Use the following commands to initialize and deploy the app:
   bash
   Copy
   eb init
   eb create classify-api-env
   API Specification
   Endpoint
   GET /api/classify-number?number={number}

Query Parameter
number: (Required) An integer to classify.
Response Format
200 OK
json
Copy
{
"number": 371,
"is_prime": false,
"is_perfect": false,
"properties": ["armstrong", "odd"],
"digit_sum": 11,
"fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371"
}
400 Bad Request
json
Copy
{
"number": "alphabet",
"error": true
}
Examples
Valid Request
URL: https://your-api-url/api/classify-number?number=371

Response:

json
Copy
{
"number": 371,
"is_prime": false,
"is_perfect": false,
"properties": ["armstrong", "odd"],
"digit_sum": 11,
"fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371"
}
Invalid Request
URL: https://your-api-url/api/classify-number?number=abc

Response:

json
Copy
{
"number": "abc",
"error": true
}
Technologies Used
Backend: Express.js
Deployment: AWS Elastic Beanstalk
Fun Fact Source: Numbers API
To-Do
Add checks for prime and perfect numbers in future iterations.
Optimize performance for handling larger numbers.
Expand to include more number properties like Fibonacci or square numbers.
License
This project is open-source under the MIT License. Feel free to use, contribute, or share.
