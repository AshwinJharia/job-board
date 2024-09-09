# Job Board Application

## Overview

This project is a job board application built with a React frontend and a Node.js backend. The backend is powered by Express.js and MongoDB, providing a RESTful API for managing job listings. The frontend is a React.js application that interacts with the backend to display job listings, search functionality, and job application features.

## Features

- **Job Listings**: Display a list of job postings with details such as title, company, location, and salary.
- **Search Functionality**: Search for jobs by title, company, or location.
- **Filters**: Filter job listings based on criteria such as location or company.
- **Apply for Jobs**: Apply for jobs directly through the UI.
- **Backend Integration**: Connects to MongoDB for persistent job data storage.

## Technologies Used

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **ORM**: Mongoose

## Prerequisites

- Node.js (version 14.x or later)
- MongoDB
- npm (Node Package Manager)

## Installation

### Backend

1. Navigate to the `backend` directory:

    ```bash
    cd backend
    ```

2. Install backend dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file for environment variables (optional, e.g., for MongoDB connection string):

    ```env
    MONGODB_URI=your-url
    PORT=your-port
    ```

4. Start the backend server:

    ```bash
    npm start
    ```

### Frontend

1. Navigate to the `frontend` directory:

    ```bash
    cd frontend
    ```

2. Install frontend dependencies:

    ```bash
    npm install
    ```

3. Start the frontend development server:

    ```bash
    npm start
    ```

## API Endpoints

### GET /api/jobs

- **Description**: Fetch all job listings.
- **Response**: JSON array of job objects.

### POST /api/jobs

- **Description**: Add a new job listing.
- **Request Body**: JSON object with job details (title, company, location, description, salary, isNew).
- **Response**: JSON object with the created job.

### PUT /api/jobs/:id

- **Description**: Update an existing job listing.
- **Request Body**: JSON object with updated job details.
- **Response**: JSON object with the updated job.

### DELETE /api/jobs/:id

- **Description**: Delete a job listing by ID.
- **Response**: JSON object with a confirmation message.

## Folder Structure

```bash
job-board/
├── backend/
│   ├── models/
│   │   └── job.js         # Mongoose model for job listings
│   ├── public/
│   │   ├── profile/       # Profile images or documents
│   │   └── resume/        # Resumes or documents
│   ├── server.js          # Main server file
│   └── .env               # Environment variables (optional)
└── frontend/
    ├── public/
    └── src/
        ├── components/   # React components
        ├── App.js         # Main React component
        ├── App.css        # Styles for React components
        └── index.js       # Entry point for React application
    └── package.json       # Frontend dependencies and scripts
```


## Usage

1. Ensure MongoDB is running on your local machine.
2. Start the backend server using `npm start` in the `backend` directory.
3. Start the frontend development server using `npm start` in the `frontend` directory.
4. Open your browser and navigate to `http://localhost:3000` to access the job board application.

## Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any questions or feedback, please contact [your-email@example.com](mailto:your-email@example.com).
