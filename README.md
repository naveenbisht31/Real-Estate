# Real Estate Website

## Overview

The Real Estate Website is a full-featured application built using the MERN stack (MongoDB, Express.js, React, Node.js) along with Tailwind CSS and Redux. Additionally, Firebase is used for storing images and integrating Google Sign-In. This application provides a comprehensive platform for managing real estate listings, including user authentication, listing creation and management, and search functionality.

## Features

- **User Authentication**:

  - Signup and signin functionality with options for Google Sign-In and traditional email/password authentication.
  - Account management with options to delete the account and sign out.

- **Listing Management**:

  - Create, update, and delete real estate listings.
  - Each listing includes details such as name, description, address, sale/rent status, price, images, etc.

- **Search Functionality**:

  - Users can search for listings based on various criteria.

- **Responsive Design**:
  - Fully responsive user interface using Tailwind CSS.

## Technology Used

- **Frontend**: Tailwind CSS, React, Redux
- **Backend**: Node.js, Express.js, Firebase
- **Database**: MongoDB

## Usage

1. **Sign Up**: Create a new user account.
2. **Sign In**: Log in to your account.
3. **Create Listing**: Add a new real estate listing by filling out details such as name, description, address, sale/rent status, price, images, etc.
4. **Update Listing**: Edit existing listings as needed.
5. **Search Listings**: Use the search feature to find specific listings based on your criteria.

## Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/naveenbisht31/Real-Estate.git
   ```

2. **Navigate to the Project Directory**:

   ```bash
   cd Real-Estate
   ```

3. **Install Dependencies**:

   - **Backend**:
     ```bash
     npm install
     ```
   - **Frontend**:
     ```bash
     cd client
     npm install
     ```

4. **Set Up Environment Variables**:

   - **Backend**:
   - Create a `.env` file in the `root` directory with the following content:

   ```bash
   MONGO = your_mongodb_url
   JWT_SECRET = your_jwt_secret_key # This can be any string of your choice. Ensure it's kept secret and not exposed publicly.
   ```

   - **Frontend**:
   - Create a `.env` file in the `client` directory with the following content:

   ```bash
   VITE_FIREBASE_API_KEY = your_firebase_api_key
   ```

5. **Start the Development Servers**:

   - **Backend**:
     ```bash
     cd server
     npm start
     ```
   - **Frontend**:
     ```bash
     cd ../client
     npm start
     ```

6. **Open the Application**:
   - Visit `http://localhost:5173/` in your web browser to view the application.
