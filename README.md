# Just Stream It

![CHESS TOURNAMENT MANAGER AND PAIRING SYSTEM](https://user-images.githubusercontent.com/97233634/187218721-9890d752-b5d1-411c-b4c8-ca1db0b76f3e.png)

## Review : 

This is my firrst JavaScript project for OpenClassrooms courses.

In this scenario I work as a freelancer and have to integrate a wireframe for a company who creates newsletter about movies and TV Shows. They want to transform their recommandations on a specific website. 
They sent a wireframe for integration, looks like 'Netflix" interface with carousel and onclick modals windows.
This project use HTML/CSS and Vanilla Javascript (no framework) and intern API for informations.

Please find below informations for API installation

## Clone Repository 

1. Clone the repo with your terminal

```bash
  git clone https://github.com/bendms/juststreamit.git
```
## API Installation

This locally-executable API can be installed and executed from http://localhost:8000/api/v1/titles/ using the following steps.

# Option 1: Installation and execution with pipenv
For this method, it is necessary to have pipenv already installed on your python installation. If pipenv is not already installed on your computer, refer to this page.

Clone this repository using $ git clone https://github.com/OpenClassrooms-Student-Center/OCMovies-API-EN-FR.git (you can also download the code using as a zip file)
Move to the ocmovies-api root folder with $ cd ocmovies-api-en
Install project dependencies with pipenv install
Create and populate project database with pipenv run python manage.py create_db
Run the server with pipenv run python manage.py runserver
When the server is running after step 5 of the procedure, the OCMovies API can be requested from endpoints starting with the following base URL: http://localhost:8000/api/v1/.

Steps 1-4 are only required for initial installation. For subsequent launches of the API, you only have to execute step 5 from the root folder of the project.

# Option 2: Installation and execution without pipenv (using venv and pip)
Clone this repository using $ git clone clone https://github.com/OpenClassrooms-Student-Center/OCMovies-API-EN-FR.git (you can also download the code using as a zip file)
Move to the ocmovies-api root folder with $ cd ocmovies-api-en
Create a virtual environment for the project with $ py -m venv env on windows or $ python3 -m venv env on macos or linux.
Activate the virtual environment with $ env\Scripts\activate on windows or $ source env/bin/activate on macos or linux.
Install project dependencies with $ pip install -r requirements.txt
Create and populate the project database with $ python manage.py create_db
Run the server with $ python manage.py runserver
When the server is running after step 7 of the procedure, the OCMovies API can be requested from endpoints starting with the following base URL: http://localhost:8000/api/v1/titles/.

Steps 1-3 and 5-6 are only required for initial installation. For subsequent launches of the API, you only have to execute steps 4 and 7 from the root folder of the project.

## How to contribute

This project is not responsive yet, it will be a great improvement to use it with mobile & tablet. 