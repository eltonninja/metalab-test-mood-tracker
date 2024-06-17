# Mood Tracker App

This is a full-stack mood tracker application built with Next.js for the frontend, Node.js/Express for the backend, and MongoDB for the database. The application allows users to record their daily moods and visualize their mood trends over time.

## Features

- Record daily mood
- View mood history
- Visualize mood trends

## Prerequisites

- Docker: Ensure you have Docker and Docker Compose installed on your machine. You can download Docker from [here](https://www.docker.com/get-started).

## Running the Application

To run the application locally using Docker, follow these steps:

1. **Clone the repository:**
    ```sh
    git clone https://github.com/eltonninja/metalab-test-mood-tracker.git
    cd metalab-test-mood-tracker
    ```

2. **Build and start the Docker containers:**
    ```sh
    docker-compose up -d --build
    ```

    This command will:
    - Pull the latest MongoDB image.
    - Build the backend and frontend Docker images.
    - Start the MongoDB, backend, and frontend services.

3. **Access the application:**

    Once the Docker containers are up and running, you can access the application at:
    - Frontend: `http://localhost:3000`
    - Backend API: `http://localhost:5000`

## Project Structure

- **frontend:** Contains the Next.js frontend application.
- **backend:** Contains the Node.js/Express backend application.
- **docker-compose.yml:** Docker Compose configuration file to set up the multi-container application.

## Environment Variables

The application uses the following environment variables:

- **Backend:**
  - `DATABASE_URI`: MongoDB connection URI (set in `docker-compose.yml`).
  - `PORT`: The port on which the backend server runs (set in `docker-compose.yml`).

- **Frontend:**
  - `NEXT_PUBLIC_API_BASE_URL`: The base URL for the backend API (set in `docker-compose.yml`).


## Future Enhancements

- **User Authentication:** Implement user authentication to allow users to securely log in and manage their mood data.
- **Social Sharing:** Enable users to share their mood updates with friends or within a community.
- **Personalized Recommendations:** Provide users with personalized suggestions based on their mood trends.

## Notes

- The backend currently runs on port `5000`, and the frontend runs on port `3000`.
- Ensure that Docker is running on your machine before executing the `docker-compose up --build` command.

If you have any questions or need further assistance, please feel free to contact me.

---

With this `README.md`, users will have clear instructions on how to set up and run the application locally using Docker. Adjust the `<repository-url>` and `<repository-name>` placeholders as needed for your specific repository.
