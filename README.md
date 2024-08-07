# Real Estate

### SignUp Page
![SignUp](https://github.com/user-attachments/assets/6309ddac-a2c7-4e21-9b43-7637f5bc7802)

### Home Page
![Home](https://github.com/user-attachments/assets/a40ce8ec-6f66-4772-bbf7-b3625abeda68)

### Profile Page
![Profile](https://github.com/user-attachments/assets/789ceb2c-5a45-4f69-b6c4-ad462cc5b8ca)

### Create Listing
![Create Listing](https://github.com/user-attachments/assets/f6ad9a54-8276-458f-8bdb-52b407a41e19)

### Update Listing
![Update Listing](https://github.com/user-attachments/assets/dec39d61-c31f-4aea-a20b-bb9f4a7e7722)

### Search
![Search](https://github.com/user-attachments/assets/e4fb19c9-d08a-405b-9dc4-3e135a3acb2f)

### View Listing
![View Listing](https://github.com/user-attachments/assets/dbad964c-adfb-457d-96c0-14b3f53ebf9b)

## Overview

The Real Estate is a full-featured application built using the MERN stack (MongoDB, Express.js, React, Node.js) along with Tailwind CSS and Redux. Additionally, Firebase is used for storing images and integrating Google Sign-In. This application provides a comprehensive platform for managing real estate listings, including user authentication, listing creation and management, and search functionality.

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
5. **Search Listings**: Use the search feature to find specific listings based on your criteria and contact landlords directly through email.

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
     Create a `.env` file in the `root` directory with the following content:
      ```bash
      MONGO = your_mongodb_url
      JWT_SECRET = your_jwt_secret_key # This can be any string of your choice. Ensure it's kept secret.
      ```

   - **Frontend**:
     Create a `.env` file in the `client` directory with the following content:
     ```bash
     VITE_FIREBASE_API_KEY = your_firebase_api_key
     ```

5. **Start the Development Servers**:

   - **Backend**:
     ```bash
     npm run dev
     ```
     
   - **Frontend**:
     ```bash
     cd client
     npm run dev
     ```

6. **Open the Application**:
   - Visit `http://localhost:5173/` in your web browser to view the application.
