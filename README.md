Project URL-shortener-API

Getting Started

To get started with the project, follow the steps below:
Prerequisites

Before running the application, ensure you have the following installed on your system:

    Node.js and npm (Node Package Manager)
    Docker (for running the database using Docker Compose)

Installation

    Clone the repository:

https://github.com/Vita1ius/URL-shortener-API.git

    Install the project dependencies:

npm install

Database Setup

For the database, this project uses PostgreSQL. To set up the database, follow these steps:

    Make sure Docker is installed and running on your system.

    Start the PostgreSQL database using Docker Compose:

docker-compose up -d

    Create a .env file in the root of the project and add the following line, replacing db_link with your actual database link:

makefile

DATABASE_URL="postgresql://postgres:postgres@localhost:5432/db_link?schema=public"

    Run the Prisma migration to initialize the database:

csharp

npx prisma migrate dev --name init

Running the Application

Now that everything is set up, you can start the development server:

arduino

npm run dev

The application should now be running on http://localhost:3000.
