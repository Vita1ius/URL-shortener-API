# URL-shortener-API

Welcome to the URL-shortener-API repository! This project aims to provide a URL shortening service.

## Getting Started

To get started with the project, follow the steps below:

### Prerequisites

Before running the application, ensure you have the following installed on your system:

- Node.js and npm (Node Package Manager)
- Docker (for running the database using Docker Compose)

### Installation

1. Clone the repository:

```
git clone https://github.com/Vita1ius/URL-shortener-API.git
```

2. Install the project dependencies:

```
npm install
```

### Configure the Environment

Create a `.env` file in the root of the project and add the following line, replacing `db_link` with your actual database link:

```
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/db_link?schema=public"
```

### Database Setup

For the database, this project uses PostgreSQL. To set up the database, follow these steps:

1. Make sure Docker is installed and running on your system.

2. Start the PostgreSQL database using Docker Compose:

```
docker-compose up -d
```

3. Run the Prisma migration to initialize the database:

```
npx prisma migrate dev --name init
```

### Running the Application

Now that everything is set up, you can start the development server:

```
npm run dev
```

The application should now be running on `http://localhost:3000`.
