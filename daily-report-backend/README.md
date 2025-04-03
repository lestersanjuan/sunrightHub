# Daily Report Backend

This project is a backend application for managing daily reports using MongoDB. It provides an API for creating, retrieving, and updating daily reports.

## Features

- Create daily reports
- Retrieve daily reports
- Update existing reports
- MongoDB integration for data persistence

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- TypeScript

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- MongoDB (local or cloud instance)
- npm or yarn

### Installation

1. Clone the repository:

   git clone <repository-url>

2. Navigate to the project directory:

   cd daily-report-backend

3. Install the dependencies:

   npm install

### Configuration

1. Create a `.env` file in the root directory and add your MongoDB connection string:

   ```
   MONGODB_URI=<your-mongodb-connection-string>
   ```

### Running the Application

1. Start the application:

   npm run start

2. The server will run on `http://localhost:3000`.

### API Endpoints

- `POST /api/reports` - Create a new daily report
- `GET /api/reports/:date` - Retrieve a daily report by date
- `PUT /api/reports/:date` - Update an existing daily report by date

## License

This project is licensed under the MIT License.