<h1 style="font-weight: bold;">Payflux - Finance Web App</h1>

![Java](https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white)
![Spring](https://img.shields.io/badge/spring-%236DB33F.svg?style=for-the-badge&logo=spring&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)

![dashboard_ex](https://github.com/pedroshr/payflux/assets/116831695/57d4c2df-cfa1-4ebc-9471-0e6a0901e795)

<h2>📜 About</h2>
Payflux is a fullstack web application I developed to learn about Spring Boot and React. The idea of this app is to manage finances, where you can add income and expenses, being able to categorize them.

[Figma project](https://www.figma.com/file/2zdGL7fadhdcN1v1GP4pwY/Payflux?type=design&node-id=0%3A1&mode=design&t=CdxTeALeswEeit5V-1).

<h2>💻 How to use?</h2>
<h3>Prerequisites:</h3>
You will need all the items from the list below to run the project.

- [Java 17+](https://www.oracle.com/java/technologies/downloads/)
- [Node.js](https://nodejs.org/en)
- [Git](https://git-scm.com/downloads)
- [PostgreSQL](https://www.postgresql.org/)
- [Maven](https://maven.apache.org/download.cgi)

<h3>Installing:</h3>

1. Cloning the project to your computer:
    ```bash
    git clone https://github.com/pedroshr/payflux.git
    ```
    ```bash
    cd payflux
    ```

2. <b>Configuring the database:</b>
   
   I used PostgreSQL for the database.

   The project has two tables: "transactions" and "totalmoney". It is important to note that the "totalmoney" table should always have only one row that will start with a value for the "total_amount" column equal to zero. "total_amount" will store the money value based on transactions.
   
   Connect to the database and then <b>execute the script</b> contained in the ["ddl.sql"](https://github.com/pedroshr/payflux/blob/master/database/ddl.sql) file in the "database" folder to create the necessary tables.

   To initialize "total_amount" with a value of zero, you should execute:
    ```bash
    INSERT INTO TotalMoney (total_amount) VALUES (0);
    ```
    
   Perhaps it's necessary to update the URL of your database in the "application.properties"(server/src/main/resources/application.properties) file of the backend.

   Ps: If you want to populate the database via script, the file ["dml.sql"](https://github.com/pedroshr/payflux/blob/master/database/dml.sql) has some randomly generated examples. However, you can simply follow the previous steps and populate directly in the app itself.

4. <b>Backend</b>:

   Entering the backend folder:
    ```bash
    cd server
    ```

    Running the server:
    ```bash
    mvn spring-boot:run
    ```
    The API can be accessed at http://localhost:8080.

5. <b>Frontend</b>:

    Open a new terminal in the folder of the project
   
    Entering the frontend folder:
    ```bash
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

<h2>🤝 Contribute</h2>
Feel free to contribute, giving suggestions and making pull requests.****

<h2>🖥️ Screenshots</h2>

![dashboard_ex](https://github.com/pedroshr/payflux/assets/116831695/49ce5504-09f0-48d6-99f1-f50a69434cdd)
![received_ex](https://github.com/pedroshr/payflux/assets/116831695/816f5803-6212-4d9c-a8b2-6c96514d2237)
![outflow_ex](https://github.com/pedroshr/payflux/assets/116831695/d02fff55-91f9-4e3e-b976-a8b5ca74f310)
![newtransaction_ex](https://github.com/pedroshr/payflux/assets/116831695/14305e95-ecdb-4144-8cdc-6557f2f9ca5e)
![edit_ex](https://github.com/pedroshr/payflux/assets/116831695/c8f4fe79-3c3e-4296-988c-29208b5add6d)
