<h1 align="center" style="font-weight: bold;">Payflux - Finance Web App</h1>

![Java](https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white)
![Spring](https://img.shields.io/badge/spring-%236DB33F.svg?style=for-the-badge&logo=spring&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)

![dashboard_ex](https://github.com/pedroshr/payflux/assets/116831695/57d4c2df-cfa1-4ebc-9471-0e6a0901e795)

<h2>📜 About</h2>
Payflux is a fullstack web application I developed to learn about Spring Boot and React. The idea of this app is to manage finances, where you can add income and expenses, being able to categorize them.

<h2>💻 How to use?</h2>
<h3>Prerequisites:</h3>
You will need all the items from the list below to run the project.

- [Java 17](https://www.oracle.com/java/technologies/downloads/)
- [Node.js](https://nodejs.org/en)
- [Git](https://git-scm.com/downloads)
- [PostgreSQL](https://www.postgresql.org/)

<h3>Installing:</h3>

1. Cloning the project to your computer:
    ```bash
    git clone https://github.com/pedroshr/payflux.git
    ```
    ```bash
    cd project-folder
    ```

2. <b>Configuring the database:</b>
   
   I used PostgreSQL for the database.

   The project has two tables: "transactions" and "totalmoney". It is important to note that the "totalmoney" table should always have only one row that will start with a value for the "total_amount" column equal to zero. "total_amount" will store the money value based on transactions.
   
   Connect to the database and then <b>execute the script</b> contained in the ["ddl.sql"](https://github.com/pedroshr/payflux/blob/master/database/ddl.sql) file in the "database" folder to create the necessary tables.

   To initialize "total_amount" with a value of zero, you should execute:
    ```bash
    INSERT INTO TotalMoney (total_amount) VALUES (0);
    ```

3. <b>Backend</b>:

   Entering the backend folder:
    ```bash
    cd server
    ```
    Compiling:
    ```bash
    mvn clean install
    ```

    Running the server:
    ```bash
    mvn spring-boot:run
    ```
    The API can be accessed at http://localhost:8080.

4. <b>Frontend</b>:
   
    Entering the frontend folder:
    ```bash
    cd ..
    cd web
    ```
    Installing dependencies:
    ```bash
    npm install
    ```

    Starting the application:
    ```bash
    npm run dev
    ```
    After that, access the application at the URL provided in the terminal after starting the application.

<h2>🔀 Routes</h2>
Routes for the app pages.

| Route                 | Description                       |
| --------------------- | --------------------------------- |
| <kbd>/</kbd>         | Home/dashboard                   |
| <kbd>/received</kbd> | Money in page                     |
| <kbd>/outflow</kbd>  | Money out page                    |

<h2>🔀 API Endpoints</h2>

| Route                                  | Description                                                                  |
| -------------------------------------- | ---------------------------------------------------------------------------- |
| <kbd>GET</kbd> /transaction/dashboard | Returns a summary containing total values and the last five transactions     |
| <kbd>GET</kbd> /transaction/balance   | Returns total money                                                          |
| <kbd>GET</kbd> /transaction/all/in    | Returns all money in transactions                                             |
| <kbd>GET</kbd> /transaction/all/out   | Returns all money out transactions                                            |
| <kbd>DEL</kbd> /transaction/{id}      | Remove a transaction by the sent id                                           |
| <kbd>GET</kbd> /transaction/{id}      | Returns a transaction by the sent id                                          |
| <kbd>GET</kbd> transaction/all        | Returns all transactions                                                      |
| <kbd>POST</kbd> /transaction          | Add a transaction                                                             |
| <kbd>PUT</kbd> /transaction           | Edit a transaction                                                            |

<h2>🖥️ Screenshots</h2>
<img src="https://github.com/pedroshr/payflux/assets/116831695/22fa2436-9059-4483-98e3-ea666009c089" data-canonical-src="https://gyazo.com/eb5c5741b6a9a16c692170a41a49c858.png" width="300" />
<img src="https://github.com/pedroshr/payflux/assets/116831695/22fa2436-9059-4483-98e3-ea666009c089" data-canonical-src="https://gyazo.com/eb5c5741b6a9a16c692170a41a49c858.png" width="300" />
<img src="https://github.com/pedroshr/payflux/assets/116831695/22fa2436-9059-4483-98e3-ea666009c089" data-canonical-src="https://gyazo.com/eb5c5741b6a9a16c692170a41a49c858.png" width="300" />

<h2>🤝 Contribute</h2>
Feel free to contribute, giving suggestions and making pull requests.
