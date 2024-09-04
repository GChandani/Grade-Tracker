# Grade Tracker


# Introduction
## What is the Grade Tracker?
Grade tracker is a web application that allows students to create an account/log in to track all their grades in one spot. This is different from websites such as Canvas grading and PrarieLearn because not only does it show all the users grades in one spot, it also calculates the students grades, something that PrarieLearn does not have as a functionality. The user will be able to create courses and add assignments for each course, as well as specifying which element the grade belongs to. Finally, the user will be able to view their current grade based on the inputted breakdown. 

For more details, view the full project proposal [here](https://docs.google.com/document/d/1ANBiNjvUYKCXu87RfWcZ5j_IrmQ0Ym6U_cwaIjBiulg/edit#heading=h.qougbnz1fcec).


# Technical Architecture
The two main components are the frontend and backend.
The frontend is built with React and in charge of the user login / authentication, user interface design, handling user input to create courses and add grades, and showing the grade of each course. 

The backend is built with Django, Python, and SQLite. We created three models: course, grade breakdown, and assignments. A course can have multiple assignments and grade breakdowns. Using this schema, Django writes to the SQLite database when objects are created.

The frontend communicates with the backend server through Axios, which sends requests and receives responses to and from the backend to insert into and query data from the database.

![Grade Tracker Technical Architecture](https://github.com/CS222-UIUC-FA23/group-project-team51/blob/main/architecture.png)


# Environment & Development 

Install Python3

Install Django

```
pip install django
```
```
pip install djangorestframework
```
```
python -m pip install django-cors-headers
```
Install Node.js (version 12+)

Install npm (version 6+)

Install React (version 8+)

Install react-router-dom (version v5.2.0)
```
npm i react-router-dom
```
Install axios
```
npm install axios
```

# Project Instructions
### Frontend
To run the frontend in development mode, cd to frontend folder and run

```
npm start
```

### Backend

This command is used to detect changes made in the database.
```
python manage.py makemigrations
```
This command applies those changes to the database
```
python manage.py migrate 
```
For creating a superuser who will be the admin of the whole app.
```
python manage.py createsuperuser --email admin@example.com --username admin
```
This command will run the server and the server should always be in running state.
```
python manage.py runserver
```

# Group Member Roles

### Frontend 

Christopher Xie - I worked on implementing the authorization library into react so that the user could log in and out, while making sure that the user could only access the website while they authorized. I also helped to link the buttons to the correct pages so that the user could input information such as the course breakdown and adding in a grade for a class. Finally, I worked on making the submit course button and submit grade button redirect to the backend and to store the user information.

Charlene Huang - I worked on the user interface design and created the components that handled user input through form submissions. I also worked on the frontend and backend connection using axios and Django.

### Backend

Chandani Grover - I worked on creating the course class, implementing the grade breakdown and assignments, and developed test cases to help debug and test the functionality of these functions as they were being developed. I also helped with the connection of the backend to the frontend. This involved technical implementation and required ensuring that both the backend and frontend operated under a cohesive and identical logic. 

Bolden Jones - I worked on implementing the grade breakdown class and assignment class, and the test server for debugging. 