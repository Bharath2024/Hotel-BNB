# Hotel B N B - Your Ultimate Reservation Platform

Welcome to Hotel B N B, your gateway to a seamless and delightful hotel reservation experience.

## About

Hotel B N B is more than just a reservation platform; it's an invitation to unparalleled comfort and luxury. Experience a seamless blend of modern convenience and warm hospitality. Whether you're a traveler seeking a tranquil escape or a business professional in need of a comfortable stay, Hotel B N B is your home away from home.

## Table of Contents
1. [Introduction](#introduction)
2. [Features](#features)
3. [System Architecture](#system-architecture)
4. [Components](#components)
5. [Technologies Used](#technologies-used)
6. [Installation](#installation)
7. [Usage](#usage)
8. [Azure Services](#azure-services)
9. [Screenshots](#screenshots)
10. [Demo Video URL](#demo-video-url)
11. [Demo URL](#demo-url)
12. [Contributing](#contributing)

## Introduction

The Hotel Reservation System is designed to streamline the process of room booking and management for hotels. It provides a user-friendly interface for customers to check room availability, make reservations, and manage their bookings efficiently. The system also assists hotel administrators in managing room inventory, checking reservations, and ensuring a smooth check-in and check-out process.

## Features

- **Room Availability:** Customers can check the availability of rooms for a specific date range.
- **User Registration:** Customers can create accounts to manage their bookings and personal information.
- **Booking Management:** Customers can make, modify, or cancel reservations.
- **Admin Dashboard:** Hotel administrators have access to a dashboard for managing room inventory, reservations, and customer details.
- **Real-time Updates:** The system provides real-time updates on room availability and booking status.

## System Architecture

The Hotel Reservation System follows a client-server architecture. It comprises a front-end interface for customers and an admin dashboard, and a back-end server for processing requests, managing databases, and handling reservations.

## Components

1. **Front-end:**
   - Customer Interface
2. **Back-end:**
   - Reservation Controller
   - User Controller
3. **Database Management:**
   - Database:
     - User Database
     - Room Database
     - Reservation Database

## Technologies Used

- **Front-end:**
  - HTML, CSS, JavaScript
  - React.js 
- **Back-end:**
  - Node.js 

## Installation

1. Clone the repository from [Hotel B N B GitHub Repo](https://github.com/Bharath2024/Hotel-BNB.git).
2. Install Node.js and npm if not already installed.
3. Navigate to the project directory and run `npm install` to install dependencies.
4. Run the application using `npm start`.

## Usage

- Access the customer interface to check room availability and make reservations.
- Log in to the admin dashboard to manage room inventory and reservations.

## Azure Services

The project leverages the following Azure services:

- **Azure App Service:**
  - Create an Azure App Service for Node.js.
  - Set up continuous deployment from your Git repository.
  - Configure the following environment variables in the Azure App Service: 
    - PORT (e.g., 3002)
    - NODE_ENV (e.g., production)
- **Azure Virtual Network (VNet):**
  - Set up a Virtual Network in the Azure Portal.
  - Integrate your Azure App Service and Azure Blob Storage with the Virtual Network for enhanced security.
  - Configure the necessary network rules and security groups.
- **Azure AI services:**
  - Connected with Azure AI services (AI Language & Bot services).

## Screenshots

[Add screenshots here]

## Demo Video URL

[Add demo video URL here]

## Demo URL

[Add demo URL here]

## Contributing

This project is a collaborative effort, and each team member has a specific role:

1. **Development & Deployment (bharathkumars.2024@gmail.com, rr642237@gmail.com):**
   - Responsible for coding and implementing new features.
   - Follow the contribution guidelines.

2. **Documentation (vigneshp3008@gmail.com):**
   - Responsible for creating and updating the README file, including demo screenshots, demo video.
   - Follow the contribution guidelines.

3. **Create Azure AI service, Record Video and Voice Over (gokulpersonal3111@gmail.com):**
   - Responsible for creating Azure AI service, recording video & Voice Over for the video.
   - Follow the contribution guidelines.
